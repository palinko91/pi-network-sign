import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { QUERY_GET_VOTED, MUTATION_VOTE_AGREED, MUTATION_VOTE_DISAGREED } from "./GraphQL";
import { client } from "./Apollo";

// Make TS accept the existence of our window.__ENV object - defined in index.html:
interface WindowWithEnv extends Window {
    __ENV?: {
        backendURL: string, // REACT_APP_BACKEND_URL environment variable
        sandbox: "true" | "false", // REACT_APP_SANDBOX_SDK environment variable - string, not boolean!
    }
}

const _window: WindowWithEnv = window;
const backendURL = _window.__ENV && _window.__ENV.backendURL;
const axiosClient = axios.create({ baseURL: `${backendURL}`, timeout: 20000, withCredentials: true });

type AuthResult = {
    accessToken: string,
    user: {
        uid: string,
        username: string
    }
};

async function Vote(side: string) {
    const scopes = ['username'];
    const authResult: AuthResult = await window.Pi.authenticate(scopes);
    signInUser(authResult);
    let uuid = authResult.user.uid;
    let username = authResult.user.username;

    let getvoted = await client.query({ query: QUERY_GET_VOTED, variables: { uuid: uuid } });
    let votedstatus = getvoted.data.voted.length;
    if (votedstatus === 0 && side === 'agree') {
        await client.mutate({ mutation: MUTATION_VOTE_AGREED, variables: { username: username, uuid: uuid } });
        alert("Thank you for the vote!");
    } else if (votedstatus === 0 && side === 'disagree') {
        await client.mutate({ mutation: MUTATION_VOTE_DISAGREED, variables: { username: username, uuid: uuid } });
        alert("Thank you for the vote!");
    } else {
        alert("You are voted already!");
    }
    window.location.reload();
}

const signInUser = (authResult: AuthResult) => {
    axiosClient.post('/user/signin', { authResult });
}

export function Agree() {
    return (
        <Button variant="contained" color="success" onClick={() => { Vote('agree'); }}>I Agree</Button>
    )
}

export function Disagree() {
    return (
        <Button variant="contained" color="error" onClick={() => { Vote('disagree'); }} >I Disagree</Button>
    )
}
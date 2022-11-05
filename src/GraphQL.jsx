import React from "react";
import { useQuery, gql } from '@apollo/client';

// Get the amount who voted to agreed option and display in Results file
function QueryGetAgreed() {
  const QUERY_GET_AGREED = gql`
  query {
    agreed(order_by: {agreed: desc}, limit: 1) {
      agreed
    }
  }
`;

  const { loading, error, data } = useQuery(QUERY_GET_AGREED);

  if (loading) {
    return (<div>"Loading..."</div>);
  } else if (error) {
    return (<div>"Error"</div>);
  }

  // Need to -1 because both of the data tables starts from 1
  return (<div>{data.agreed[0].agreed - 1}</div>)
}

// Get the amount who voted to disagreed option and display in Results file
function QueryGetDisagreed() {
  const QUERY_GET_DISAGREED = gql`
  query {
    disagreed(limit: 1, order_by: {disagreed: desc}) {
      disagreed
    }
  }
`;

  const { loading, error, data } = useQuery(QUERY_GET_DISAGREED);

  if (loading) {
    return (<div>"Loading..."</div>);
  } else if (error) {
    return (<div>"Error"</div>);
  }

  // Need to -1 because both of the data tables starts from 1
  return (<div>{data.disagreed[0].disagreed - 1}</div>)
}

// Check the already voted condition, if returns array length 1 it means he voted if 0 he not voted
const QUERY_GET_VOTED = gql`
  query($uuid: uuid!) {
    voted(where: {uuid: {_eq: $uuid}}) {
      uuid
    }
  }
`;

// Write the new voter to the voted table and also increase agreed +1
const MUTATION_VOTE_AGREED = gql`
  mutation vote($username: String!, $uuid: uuid!) {
    insert_voted(objects: {username: $username, uuid: $uuid}) {
      returning {
        uuid
      }
    }
    update_agreed(_inc: {agreed: 1}, where: {agreed: {_is_null: false}}) {
      returning {
        agreed
      }
    }
  }
`;

// Write the new voter to the voted table and also increase disagreed +1
const MUTATION_VOTE_DISAGREED = gql`
  mutation vote($username: String!, $uuid: uuid!) {
    insert_voted(objects: {username: $username, uuid: $uuid}) {
      returning {
        uuid
      }
    }
    update_disagreed(_inc: {disagreed: 1}, where: {disagreed: {_is_null: false}}) {
      returning {
        disagreed
      }
    }
  }
`;


export {
  QueryGetAgreed,
  QueryGetDisagreed,
  QUERY_GET_VOTED,
  MUTATION_VOTE_AGREED,
  MUTATION_VOTE_DISAGREED
};
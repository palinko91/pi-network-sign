import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const httpLink = new HttpLink({ uri: process.env.REACT_APP_HASURA_URI })

const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET
        }
    })
    return forward(operation)
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})

export { client, ApolloProvider };
import * as React from 'react';
import Box from '@mui/material/Box';
import { QueryGetAgreed, QueryGetDisagreed } from "./GraphQL";
import { client, ApolloProvider } from "./Apollo";

export function ResultAgreed(): JSX.Element {
    return (
        <Box>
            <Box
                sx={{
                    bgcolor: 'green',
                    boxShadow: 4,
                    borderRadius: 5,
                    p: 3,
                    minWidth: '8vw',
                }}
            >
                <Box sx={{ color: '#fff', display: 'flex', justifyContent: 'center' }}>Agreed</Box>
                <Box sx={{ color: '#fff', fontSize: 34, fontWeight: 'medium', display: 'flex', justifyContent: 'center' }}>
                    <ApolloProvider client={client}><QueryGetAgreed /></ApolloProvider>
                </Box>
            </Box>
        </Box>

    )
}

export function ResultDisagreed(): JSX.Element {
    return (
        <Box>
            <Box
                sx={{
                    bgcolor: 'red',
                    boxShadow: 4,
                    borderRadius: 5,
                    p: 3,
                    minWidth: '8vw',
                }}
            >
                <Box sx={{ color: '#fff', display: 'flex', justifyContent: 'center' }}>Disagreed</Box>
                <Box sx={{ color: '#fff', fontSize: 34, fontWeight: 'medium', display: 'flex', justifyContent: 'center' }}>
                    <ApolloProvider client={client}><QueryGetDisagreed /></ApolloProvider>
                </Box>
            </Box>
        </Box>
    )
}
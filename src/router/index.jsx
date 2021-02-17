import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import Login from "pages/user/Login"

export const history = createBrowserHistory();

const client = new ApolloClient({
	uri: "https://48p1r2roz4.sse.codesandbox.io",
	cache: new InMemoryCache()
});


export default () => (
		<ApolloProvider client={client}>

				<Router history={history}>
					<Login/>
				</Router>

		</ApolloProvider>
);

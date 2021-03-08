import React from "react";
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import Login from "../pages/Login";
import "antd/dist/antd.css";
import { setContext } from "@apollo/client/link/context";

export const history = createBrowserHistory();

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");

  const user = JSON.parse(localStorage.getItem("token"));

  const newToken = `Bearer ${user}`;

  // return the headers to the context so httpLink can read them
  return {
	headers: {
	  ...headers,
	  Authorization: token ? newToken : "",
	},
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default () => (
	<ApolloProvider client={client}>

		<Router history={history}>
			<Switch>
				<Login />
			</Switch>
		</Router>

	</ApolloProvider>
);

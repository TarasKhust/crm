import React from "react";
import {
  Router,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import MainPage from "pages/Main/index.jsx";
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

export const history = createBrowserHistory();

const httpLink = new HttpLink({
  uri: process.env.NODE_ENV === "development" ? "https://servercrm.herokuapp.com/graphql" : "https://servercrm.herokuapp.com/graphql",
  credentials: "same-origin",
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

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
	graphQLErrors.map(({ message, locations, path }) => {
		  if (message === "Unauthorized") {
			return location.href = "/login";
		  }
		}
	);
  }

  if (networkError) {
	console.log(`[Network error]: ${networkError}`);
  }
});

const client = new ApolloClient({
  connectToDevTools: true,
  link: ApolloLink.from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default () => (
	<ApolloProvider client={client}>
		<Router history={history}>

			<MainPage />

		</Router>
	</ApolloProvider>
);

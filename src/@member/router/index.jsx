import React from "react";
import {
  Router, Switch,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import MainPage from "pages/Main/index.jsx";
import Catalog from "pages/Catalog";

export const history = createBrowserHistory();

export default () => (
	<Router history={history}>

		<MainPage />

	</Router>
);

import React from "react";
import {
	Router,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import MainPage from "pages/Main/index.jsx";

export const history = createBrowserHistory();

export default () => (
	<Router history={history}>
		<MainPage />
	</Router>
);

import React from "react";
import { Route, Switch } from "react-router-dom";
import Catalog from "../pages/Catalog";

const router = () => {
  return (

	<Switch>

		<Route exact path="/member">

			<div>sadasdas</div>

		</Route>
		<Catalog />
		<Route exact path="/member/:id">

			<div>sadasdas</div>

		</Route>
	</Switch>

  );
};

export default router;

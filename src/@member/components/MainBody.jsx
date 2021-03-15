import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "@member/config/routes";
import Product from "pages/Product/containers/Product";
import { Content } from "antd/es/layout/layout";

const Catalog = lazy(() => import(/* webpackChunkName: "Catalog" */ "@member/pages/Catalog/CatalogOfProducts"));

export default () => {
	return (

		<Content>

			<Suspense fallback={null}>
				<Switch>

					<Route exact path={routes.members.catalog._}>
						<Catalog />
					</Route>

					<Route exact path={routes.members.catalog.products._}>
						<Product />
					</Route>

					<Route exact path={routes.members.catalog.categories._}>
						<div><h1>CATEGORY</h1></div>
					</Route>

					<Route exact path={routes.members.catalog.brands._}>
						<div><h1>BRANDS</h1></div>
					</Route>

				</Switch>
			</Suspense>
		</Content>

	);
};

import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "@member/config/routes";

import { Content } from "antd/es/layout/layout";

const Catalog = lazy(() => import(/* webpackChunkName: "Catalog" */ "@member/pages/Catalog/CatalogOfProducts"));
const Product = lazy(() => import(/* webpackChunkName: "Product" */ "@member/pages/Product/containers/Product"));
const Category = lazy(() => import(/* webpackChunkName: "Category" */ "@member/pages/Category/index"));
const Brands = lazy(() => import(/* webpackChunkName: "Brands" */ "@member/pages/Brands/index"));

export default () => {
	return (

		<Content>

			<Suspense fallback={<div>Loading...</div>}>
				<Switch>

					<Route exact path={routes.members.catalog._}>
						<Catalog />
					</Route>

					<Route exact path={routes.members.catalog.products._}>
						<Product />
					</Route>

					<Route exact path={routes.members.catalog.categories._}>
						<Category />
					</Route>

					<Route exact path={routes.members.catalog.brands._}>
						<Brands />
					</Route>

				</Switch>
			</Suspense>
		</Content>

	);
};

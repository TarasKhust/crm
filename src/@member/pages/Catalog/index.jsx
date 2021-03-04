import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const Catalog = lazy(() => import(/* webpackChunkName: "MainPage" */ "./CatalogOfProducts"));

const container = document.querySelector("#catalog");

if (container) {
  if (!container.getAttribute("root")) {
	container.innerHTML = "";
	container.setAttribute("root", "e");
  }
}

const router = () => {
  return (
	  <Portal node={container}>
		<Suspense fallback={null}>

			<Route exact path="/member/catalog">

				<Catalog />

			</Route>
		</Suspense>

	  </Portal>
  );
};

export default router;

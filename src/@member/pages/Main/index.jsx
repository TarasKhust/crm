import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const MainPage = lazy(() => import(/* webpackChunkName: "MainPage" */ "./containers/MainPage"));

const container = document.querySelector("#main_page");

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
				<Route exact path="/member">

					<MainPage />

				</Route>
			</Suspense>

		</Portal>
	);
};

export default router;

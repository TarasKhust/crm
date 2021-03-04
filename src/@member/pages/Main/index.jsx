import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";
import routes from "@member/config/routes";

const MainPage = lazy(() => import(/* webpackChunkName: "MainPage" */ "./containers/MainPage"));

const container = document.querySelector("#main_page");

if (container) {
	if (!container.getAttribute("root")) {
		container.innerHTML = "";
		container.setAttribute("root", "e");
	}
}

const MainRouter = () => {
	return (
		<Portal node={container}>
			<Suspense fallback={null}>
				<Route path={routes.members._}>
					<MainPage />
				</Route>
			</Suspense>

		</Portal>
	);
};

export default MainRouter;

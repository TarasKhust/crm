import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Portal } from "react-portal";

const Login = lazy(() => import(/* webpackChunkName: "Login" */ "./containers/Login"));

const container = document.querySelector("#login");

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
				<Route exact path="/login">
					<Login />
				</Route>
			</Suspense>

		</Portal>
	);
};

export default router;

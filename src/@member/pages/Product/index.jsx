import React, { lazy } from "react";
import { Portal } from "react-portal";

const Product = lazy(() => import(/* webpackChunkName: "MainPage" */ "./containers/Product"));

const container = document.querySelector("#product");

if (container) {
  if (!container.getAttribute("root")) {
	container.innerHTML = "";
	container.setAttribute("root", "e");
  }
}

const MainRouter = () => {
  return (
	  <Portal node={container}>

		<Product />

	  </Portal>
  );
};

export default MainRouter;

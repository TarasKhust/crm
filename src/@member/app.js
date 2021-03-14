import React from "react";
import { render } from "react-dom";
import Router from "./router";
import "antd/dist/antd.css";

// import { debugContextDevtool } from "react-context-devtool";

const target = document.createElement("div");
document.body.appendChild(target);

function renderApp(Router) {
    render(
	<Router />,
        target
    );
}

renderApp(Router);

if (module.hot) {
    module.hot.accept("./router", () => renderApp(require("./router").default));
}

// // Attach root container
// debugContextDevtool(target, {
//   disable: process.env.NODE_ENV === "production",
// });

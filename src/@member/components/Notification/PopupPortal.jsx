import React from "react";
import { createPortal } from "react-dom";
import getPopupContainer from "./getPopupContainer";
import Notifications from "components/Notifications";

const PopupPortal = (props) => (
	createPortal(
		<Notifications {...props} />,
		getPopupContainer()
	)
);

export default PopupPortal;

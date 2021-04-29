import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { notification } from "antd";

const Context = React.createContext({ name: "Default" });

const Notifications = ({ message, typeOfNotification }) => {
  const [api, contextHolder] = notification.useNotification();

  const OpenNotification = {
	error: () => api.error({
	  message: "Что-то Пошло не так",
	  description: <Context.Consumer>{({ name }) => message}</Context.Consumer>,
	  placement: "topRight",
	}),
	success: () => api.success({
	  message: "Успешно",
	  description: <Context.Consumer>{({ name }) => message}</Context.Consumer>,
	  placement: "topRight",
	}),
  };

  useEffect(() => {
		OpenNotification[typeOfNotification]();
  }, [message, typeOfNotification]);

    return (
	    <Context.Provider value={{ name: "" }}>
		  {contextHolder}

	    </Context.Provider>
    );
};

export default Notifications;

Notifications.propTypes = {
  message: PropTypes.string,
  typeOfNotification: PropTypes.string,
};

Notifications.defaultProps = {
  typeOfNotification: "error",
};

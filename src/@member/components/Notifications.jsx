import PropTypes from "prop-types";
import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { Alert, notification } from "antd";

const Context = React.createContext({ name: "Default" });

const Notifications = ({ message }) => {
  const [api, contextHolder] = notification.useNotification();

  const OpenNotification = () => {
	api.info({
	  message: <Alert
		  message="Error"
		  description={message}
		  type="error"
		  showIcon
	           />,
	  description: <Context.Consumer>{({ name }) => ""}</Context.Consumer>,
	  placement: "topRight",
	});
  };

  useEffect(() => {
		OpenNotification();
  }, [message]);

    return (
	    <Context.Provider value={{ name: "" }}>
		  {contextHolder}

	    </Context.Provider>
    );
};

export default Notifications;

Notifications.propTypes = {
  message: PropTypes.string,
};

import PropTypes from "prop-types";
import React from "react";
import { Form as FromAntd } from "antd";

export const { Item, List, ErrorList, Provider, useForm } = FromAntd;

const Form = (props) => {
  const { children } = props;

  const onFinish = (response) => {
	console.log(response);
  };

  const onFinishFailed = (response) => {
	console.log(response);
  };

  return (
	  <FromAntd
		  {...props}
		  labelCol={{
		    span: 4,
		  }}
		  wrapperCol={{
		    span: 14,
		  }}
		  layout="horizontal"
		  size="default"
		  onFinish={onFinish}
		  onFinishFailed={onFinishFailed}
	  >
		{children}
	  </FromAntd>
  );
};

Form.propTypes = {
  children: PropTypes.node,
};

export default Form;

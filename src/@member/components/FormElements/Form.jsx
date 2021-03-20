import PropTypes from "prop-types";
import React from "react";
import { Form as FromAntd } from "antd";

export const { Item, List, ErrorList, Provider, useForm } = FromAntd;

const Form = (props) => {
  const { children, onFinish, onFinishFailed } = props;

  const handleOnFinish = (response) => {
    onFinish(response);
  };

  const handleOnFinishFailed = ({ values, errorFields, outOfDate }) => {
    onFinishFailed({ values, errorFields, outOfDate });
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
		  onFinish={handleOnFinish}
		  onFinishFailed={handleOnFinishFailed}
	  >
		{children}
	  </FromAntd>
  );
};

Form.propTypes = {
  children: PropTypes.node,
  onFinish: PropTypes.func,
  onFinishFailed: PropTypes.func,
};

Form.defaultProps = {
  children: PropTypes.node,
  onFinish: new Function(),
  onFinishFailed: new Function(),
};

export default Form;

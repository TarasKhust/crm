import PropTypes from "prop-types";
import React from "react";
import {
  Input as InputAntd,
} from "antd";
import { Item } from "components/FormElements/Form";

const Input = (props) => {
  const { children, name, label, rules } = props;

  return (
	<Item label={label} name={name} rules={rules} {...props} hasFeedback>
		<InputAntd {...props}>
			{children}
		</InputAntd>
	</Item>

  );
};

Input.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string,
  rules: PropTypes.array,
};

export default Input;

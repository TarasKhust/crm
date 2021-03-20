import React from "react";
import PropTypes from "prop-types";
import { Cascader as CascaderAntd } from "antd";
import { Item } from "components/FormElements/Form";

const Cascader = (props) => {
  const { name, label, rules, options } = props;

  const onChange = (value, selectedOptions) => {
	console.log(value, selectedOptions);
  };

  const filter = (inputValue, path) => {
	return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
  };

  return (

	  <Item label={label} name={name} rules={rules} hasFeedback>
		<CascaderAntd
			{...props}
			options={options}
			onChange={onChange}
			placeholder="Please select"
			showSearch={{ filter }}
		/>
	  </Item>
  );
};

Cascader.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
	  PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string,
	  })
  ),
  rules: PropTypes.array,
};

export default Cascader;

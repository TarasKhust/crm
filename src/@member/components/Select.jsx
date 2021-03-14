import PropTypes from "prop-types";
import React from "react";
import { Select as SelectAntd } from "antd";

const Select = (props) => {
  function onChange(value) {
	console.log(`selected ${value}`);
  }

  function onBlur() {
	console.log("blur");
  }

  function onFocus() {
	console.log("focus");
  }

  function onSearch(val) {
	console.log("search:", val);
  }

  return (
	  <SelectAntd
		  onChange={onChange}
		  {...props}
		  onFocus={onFocus}
		  onBlur={onBlur}
		  onSearch={onSearch}
		  filterOption={(input, option) =>
			  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}

	  />

  );
};

export default Select;

Select.propTypes = {
  options: PropTypes.any,
  showSearch: PropTypes.bool,
  style: PropTypes.any,
};

Select.defaultProps = {
  showSearch: false,
  style: { width: 200 },
};

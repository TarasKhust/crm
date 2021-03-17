import PropTypes from "prop-types";
import React from "react";
import { Select as SelectAntd } from "antd";
import { Item } from "components/FormElements/Form";

const Select = (props) => {
  const { name, label } = props;

  function onChange(value) {
	return value;
  }

  function onBlur(value) {
    return value;
  }

  function onFocus(value) {
    return value;
  }

  function onSearch(val) {
    return val;
  }

  const filterOptions = (input, option) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  const filterSort = (optionA, optionB) => {
    return optionA.label.toLowerCase().localeCompare(optionB.label.toLowerCase());
  };

  return (
	<Item label={label} name={name} >

		<SelectAntd
			{...props}
			showSearch
			onChange={onChange}
			onFocus={onFocus}
			onBlur={onBlur}
			onSearch={onSearch}
			optionFilterProp="label"
			filterOption={filterOptions}
			filterSort={filterSort}
		/>
	</Item>

  );
};

export default Select;

Select.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
	  PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string,
	  })
  ),
};

Select.defaultProps = {
  style: { width: 200 },
};

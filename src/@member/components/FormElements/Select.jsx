import PropTypes from "prop-types";
import React from "react";
import { Select as SelectAntd } from "antd";
import { Item } from "components/FormElements/Form";

const Select = (props) => {
  const { name, label, rules, onChange, onBlur, onFocus, onSearch } = props;

  function handleOnChange(value) {
      onChange(value);
  }

  function handleOnBlur(value) {
      onBlur(value);
  }

  function handleOnFocus(value) {
      onFocus(value);
  }

  function handleOnSearch(val) {
      onSearch(val);
  }

  const filterOptions = (input, option) => {
    return option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  const filterSort = (optionA, optionB) => {
    return optionA.label.toLowerCase().localeCompare(optionB.label.toLowerCase());
  };

  return (
	<Item label={label} name={name} rules={rules}>

		<SelectAntd
			{...props}
			showSearch
			onSearch={handleOnSearch}
			onChange={handleOnChange}
			onFocus={handleOnFocus}
			onBlur={handleOnBlur}
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
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onSearch: PropTypes.func,
  rules: PropTypes.object,
};

Select.defaultProps = {
  style: { width: 200 },
  onFocus: new Function(),
  onChange: new Function(),
  onBlur: new Function(),
  onSearch: new Function(),
};

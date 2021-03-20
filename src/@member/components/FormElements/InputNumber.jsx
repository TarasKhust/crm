import React from "react";
import { InputNumber as InputNumberAntd } from "antd";
import { Item } from "components/FormElements/Form";
import PropTypes from "prop-types";

const InputNumber = (props) => {
  const { name, label, rules, onChange, onBlur, onFocus, onSearch, showSearch, isFormatter, min } = props;

  const handleOnChange = (value) => {
	onChange(value);
  };

  const handleOnBlur = (value) => {
	onBlur(value);
  };

  const handleOnFocus = (value) => {
	onFocus(value);
  };

  const handleOnSearch = (val) => {
	onSearch(val);
  };

  const onFormatter = (value) => {
    if (isFormatter) {
      return `₴ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return value;
  };

  const onParser = (value) => {
    return value.replace(/\$\s?|(,*)/g, "");
  };

  return (
	  <Item label={label} name={name} rules={rules} hasFeedback>
		<InputNumberAntd
			{...props}
			min={min}
			formatter={onFormatter}
			parser={onParser}
			onChange={handleOnChange}
			onFocus={handleOnFocus}
			onBlur={handleOnBlur}
			onSearch={handleOnSearch}
			showSearch={showSearch}
		/>
	  </Item>
  );
};

InputNumber.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onSearch: PropTypes.func,
  rules: PropTypes.object,
  showSearch: PropTypes.bool,
  isFormatter: PropTypes.bool,
  min: PropTypes.number,
};

InputNumber.defaultProps = {
  style: { width: "100%" },
  onFocus: new Function(),
  onChange: new Function(),
  onBlur: new Function(),
  onSearch: new Function(),
  showSearch: false,
  isFormatter: false,
  min: 0,
  rules: [],
};

export default InputNumber;

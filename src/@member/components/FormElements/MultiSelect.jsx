import React, { useState } from "react";
import PropTypes from "prop-types";
import { Item } from "components/FormElements/Form";

import { TreeSelect } from "antd";

const { SHOW_PARENT } = TreeSelect;

const MultiSelect = (props) => {
  const { name, label, options, showSearch } = props;
  const [state, setState] = useState([""]);

  const onChange = value => {
	console.log("onChange ", value);

	setState((prevState) => {
	    return (
		    {
		      ...prevState,
	          value,
		    }
	    );
	});
  };

  const handleOnFilterOptions = (input, option) => {
	return option.title.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  const handleOnFilterSort = (optionA, optionB) => {
	return optionA.title.toLowerCase().localeCompare(optionB.title.toLowerCase());
  };

  const tProps = {
	treeData: options,
	value: state.value,
	onChange: onChange,
	showCheckedStrategy: SHOW_PARENT,
	placeholder: "Please select",
	style: {
	  width: "100%",
	},
  };

  return (
	<Item label={label} name={name} {...props} hasFeedback>
		<TreeSelect {...tProps} {...props}
			key="id"
			showSearch={showSearch}
			filterOption={handleOnFilterOptions}
			filterSort={handleOnFilterSort}
		/>
	</Item>
  	);
};

MultiSelect.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
	  PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string,
	  })
  ),
  showSearch: PropTypes.bool,
};

MultiSelect.defaultProps = {
  showSearch: true,
};

export default MultiSelect;

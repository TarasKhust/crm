import React, { useState } from "react";
import PropTypes from "prop-types";
import { Item } from "components/FormElements/Form";

import { TreeSelect } from "antd";

const { SHOW_PARENT } = TreeSelect;

const MultiSelect = (props) => {
  const { name, label, options } = props;
  const [state, setState] = useState(["0-0-0"]);

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

  const tProps = {
	treeData: options,
	value: state.value,
	onChange: onChange,
	treeCheckable: true,
	showCheckedStrategy: SHOW_PARENT,
	placeholder: "Please select",
	style: {
	  width: "100%",
	},
  };

  return (
	<Item label={label} name={name} {...props}>
		<TreeSelect {...tProps} {...props} />
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
};

export default MultiSelect;

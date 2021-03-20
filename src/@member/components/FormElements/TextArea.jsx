import PropTypes from "prop-types";
import React from "react";
import { Item } from "components/FormElements/Form";
import { Input } from "antd";

const { TextArea: TextAreaAntd } = Input;

const TextArea = (props) => {
  const { children, name, label } = props;

  return (
	  <Item label={label} name={name} {...props} hasFeedback>
		<TextAreaAntd {...props} autoCorrect autoSize autoSave>
			{children}
		</TextAreaAntd>
	  </Item>

  );
};

TextArea.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string,
};

export default TextArea;

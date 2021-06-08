import PropTypes from "prop-types";
import React from "react";
import {
  Switch,
} from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Item } from "components/FormElements/Form";
import Input from "components/FormElements/Input";
import MultiSelect from "components/FormElements/MultiSelect";

const ProductDetailsForm = ({ items }) => {
  return (
	  <React.Fragment>

		<MultiSelect
			name="parentCategory"
			label="Родительская категория:"
			options={items}
			placeholder="Пожалуйста выбирите"
		/>

		<Input name="seoUrl" label="SEO URL:" />

		<Item name="status" label="Отображать на сайте:">
			<Switch
				checkedChildren={<CheckOutlined />}
				unCheckedChildren={<CloseOutlined />}
				defaultChecked
			/>
		</Item>

	  </React.Fragment>
  );
};

export default ProductDetailsForm;

ProductDetailsForm.propTypes = {
  items: PropTypes.array,
};

ProductDetailsForm.defaultProps = {
  items: [],
};

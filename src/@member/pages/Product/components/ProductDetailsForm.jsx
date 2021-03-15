import React from "react";
import {
  Form,
  Input,
} from "antd";
import ProductDetailsImages from "pages/Product/components/ProductDetailsImages";

const ProductDetailsForm = () => {
  const validations = [
	    {
		  required: true,
		  message: "Please input a name product!",
	    },
	];

  return (
	  <React.Fragment>

		<Form.Item label="Наименование:" name="productName" rules={validations}>
			<Input name="productName" />
		</Form.Item>
		<Form.Item label="Описание:" name="productDescriptions">
			<Input.TextArea />
		</Form.Item>
		<Form.Item label="Мета-тег Description:" name="productMetaDescription">
			<Input.TextArea />
		</Form.Item>
		<Form.Item label="Мета-тег Keywords:" name="productMetaKeywords">
			<Input />
		</Form.Item>
		<Form.Item label="Теги товара:" name="productTags">
			<Input />
		</Form.Item>
		<Form.Item label="Фото:" name="productImages">

			<ProductDetailsImages />

		</Form.Item>

	  </React.Fragment>
  );
};

export default ProductDetailsForm;

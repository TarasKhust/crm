import React from "react";
import ProductDetailsImages from "pages/Product/components/ProductDetailsImages";
import { Item } from "components/FormElements/Form";
import Input from "components/FormElements/Input";
import TextArea from "components/FormElements/TextArea";
import Select from "components/FormElements/Select";

const ProductDetailsForm = () => {
  const validations = [
	    {
		  required: true,
		  message: "Please input a name product!",
	    },
	];

  return (
	  <React.Fragment>

		<Input name="productName" label="Наименование:" rules={validations} />

		<TextArea label="Описание:" name="productDescriptions" />

		<TextArea label="Мета-тег Description:" name="productMetaDescription" />

		<Select label="Мета-тег Keywords:" name="productMetaKeywords" open={false} tagRender={<Input />} mode="tags" />

		<Select mode="tags" open={false} tagRender={<Input />} label="Теги товара:" name="productTags" />

		<Item label="Фото:" name="productImages">

			<ProductDetailsImages />

		</Item>

	  </React.Fragment>
  );
};

export default ProductDetailsForm;

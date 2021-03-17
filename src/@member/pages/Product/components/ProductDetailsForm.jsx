import React from "react";
import ProductDetailsImages from "pages/Product/components/ProductDetailsImages";
import { Item } from "components/FormElements/Form";
import Input from "components/FormElements/Input";
import TextArea from "components/FormElements/TextArea";

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

		<Input label="Мета-тег Keywords:" name="productMetaKeywords" />

		<Input label="Теги товара:" name="productTags" />

		<Item label="Фото:" name="productImages">

			<ProductDetailsImages />

		</Item>

	  </React.Fragment>
  );
};

export default ProductDetailsForm;

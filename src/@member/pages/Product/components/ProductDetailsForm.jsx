import React from "react";
import ProductDetailsImages from "pages/Product/components/ProductDetailsImages";
import { Item } from "components/FormElements/Form";
import Input from "components/FormElements/Input";
import TextArea from "components/FormElements/TextArea";
import Select from "components/FormElements/Select";

const ProductDetailsForm = () => {
  const validateVendor = async (rule, val, name) => {
	if (!val || val.length < 1) {
	  return Promise.reject(new Error(`${name} не может быть пустим`));
	}

	if (val <= 0) {
	  return Promise.reject(new Error(`${name} не может быть 0`));
	}
  };

  return (
	  <React.Fragment>

		<Input name="productName" label="Наименование:" rules={[{ validator: (rule, val) => validateVendor(rule, val, "Наименование") }]} />

		<TextArea label="Описание:" name="productDescriptions" rules={[{ validator: (rule, val) => validateVendor(rule, val, "Описание") }]} />

		<TextArea label="Мета-тег Description:" name="productMetaDescription" />

		<Select label="Мета-тег Keywords:" name="productMetaKeywords" open={false} tagRender={<Input />} mode="tags" showSearch={false} />

		<Select mode="tags" open={false} tagRender={<Input />} label="Теги товара:" name="productTags" showSearch={false} />

		<Item label="Фото:" name="productImages" >

			<ProductDetailsImages />

		</Item>

	  </React.Fragment>
  );
};

export default ProductDetailsForm;

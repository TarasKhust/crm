import React from "react";
import ProductDetailsImages from "pages/Product/containers/ProductDetailsImages";
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

		<Input name="name" label="Наименование:" rules={[{ validator: (rule, val) => validateVendor(rule, val, "Наименование") }]} />

		<TextArea label="Описание:" name="description" rules={[{ validator: (rule, val) => validateVendor(rule, val, "Описание") }]} />

		<TextArea label="Мета-тег Description:" name="metaDescription" />

		<Select label="Мета-тег Keywords:" name="metaDataTagKeyword" open={false} tagRender={<Input />} mode="tags" showSearch={false} />

		<Select mode="tags" open={false} tagRender={<Input />} label="Теги товара:" name="tags" showSearch={false} />

		<ProductDetailsImages label="Фото:" name="image" />

	  </React.Fragment>
  );
};

export default ProductDetailsForm;

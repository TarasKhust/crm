import React from "react";
import Input from "components/FormElements/Input";
import TextArea from "components/FormElements/TextArea";
import Select from "components/FormElements/Select";

const CategoryForm = () => {
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

		<Input name="categoryName" label="Название категории:" rules={[{ validator: (rule, val) => validateVendor(rule, val, "Название категории") }]} />

		<TextArea label="Описание:" name="categoryDescriptions" rules={[{ validator: (rule, val) => validateVendor(rule, val, "Описание") }]} />

		<TextArea label="Мета-тег Description:" name="categoryMetaDescription" />

		<Select label="Мета-тег Keywords:" name="categoryMetaKeywords" open={false} tagRender={<Input />} mode="tags" showSearch={false} />

		<Select mode="tags" open={false} tagRender={<Input />} label="Теги товара:" name="categoryTags" showSearch={false} />

	  </React.Fragment>
  );
};

export default CategoryForm;

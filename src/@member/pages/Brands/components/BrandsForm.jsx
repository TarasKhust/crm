import React from "react";
import Input from "components/FormElements/Input";
import TextArea from "components/FormElements/TextArea";
import Select from "components/FormElements/Select";

const BrandsForm = () => {
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

		<Input name="name" label="Имя Производителя:" rules={[{ validator: (rule, val) => validateVendor(rule, val, "Имя Производителя") }]} />

		<TextArea name="description" label="Описание:" rules={[{ validator: (rule, val) => validateVendor(rule, val, "Описание") }]} />

		<TextArea name="metaTagsDescription" label="Мета-тег Description:" />

		<Select name="metaTags" label="Мета-тег Keywords:" open={false} tagRender={<Input />} mode="tags" showSearch={false} />

	  </React.Fragment>
  );
};

export default BrandsForm;

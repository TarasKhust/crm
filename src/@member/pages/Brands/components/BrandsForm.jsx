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

		<Input name="BrandtName" label="Имя Производителя:" rules={[{ validator: (rule, val) => validateVendor(rule, val, "Имя Производителя") }]} />

		<TextArea label="Описание:" name="BrandDescriptions" rules={[{ validator: (rule, val) => validateVendor(rule, val, "Описание") }]} />

		<TextArea label="Мета-тег Description:" name="BrandMetaDescription" />

		<Select label="Мета-тег Keywords:" name="BrandMetaKeywords" open={false} tagRender={<Input />} mode="tags" showSearch={false} />

		<Select mode="tags" open={false} tagRender={<Input />} label="Теги товара:" name="BrandTags" showSearch={false} />

	  </React.Fragment>
  );
};

export default BrandsForm;

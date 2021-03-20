import React from "react";
import {
  Switch,
} from "antd";
import Select from "components/FormElements/Select";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Item } from "components/FormElements/Form";
import Input from "components/FormElements/Input";
import InputNumber from "components/FormElements/InputNumber";

const ProductDetailsForm = () => {
  const productState = [
    { label: "Нет в наличии", value: "0" },
    { label: "Есть в наличии", value: "1" },
  ];

  const validateVendor = async (rule, val, name) => {
    if (!val || val.length < 1) {
      return Promise.reject(new Error(`${name} не может быть пустим`));
    }
  };

  return (
	  <React.Fragment>

		<Input name="vendorCode" label="Артикул:" rules={[{ validator: (rule, val) => validateVendor(rule, val, "Артикул") }]} />

		<InputNumber name="productPrice" label="Цена:" rules={[{ validator: (rule, val) => validateVendor(rule, val, "Цена") }]} isFormatter />

		<InputNumber name="productCount" label="Количество:" min={0} />

		<InputNumber name="productMinimalCount" label="Минимальное количество:" min={1} />

		<Select name="productStatusExist" label="Отсутствует на складе:" options={productState} />

		<Input name="productSeoUrl" label="SEO URL:" />

		<Item name="productStatus" label="Отображать на сайте:">
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

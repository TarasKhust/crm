import React from "react";
import {
  Switch,
} from "antd";
import Select from "components/FormElements/Select";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Item } from "components/FormElements/Form";
import Input from "components/FormElements/Input";

const ProductDetailsForm = () => {
  const productState = [
    { label: "Нет в наличии", value: "0" },
    { label: "Есть в наличии", value: "1" },
  ];

  const validations = [
	{
	  required: true,
	  message: "Please input a name product!",
	},
  ];

  return (
	  <React.Fragment>

		<Input label="Артикул:" name="vendorCode" />

		<Input name="productPrice" label="Цена:" rules={validations} />

		<Input name="productCount" label="Количество:" />

		<Input name="productMinimalCount" label="Минимальное количество:" defaultValue={1} />

		<Select options={productState} label="Отсутствует на складе:" name="productStatusExist" />

		<Input name="productSeoUrl" label="SEO URL:" />

		<Item label="Отображать на сайте:" name="productStatus">
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

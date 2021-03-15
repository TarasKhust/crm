import React from "react";
import {
  Form,
  Input, Switch,
} from "antd";
import Select from "components/Select";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

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

		<Form.Item label="Артикул:" name="vendorCode">
			<Input name="vendorCode" />
		</Form.Item>
		<Form.Item label="Цена:" name="productPrice" rules={validations}>
			<Input name="productPrice" />
		</Form.Item>
		<Form.Item label="Количество:" name="productCount">
			<Input name="productCount" />
		</Form.Item>
		<Form.Item label="Минимальное количество:" name="productMinimalCount">
			<Input name="productMinimalCount" defaultValue={1} />
		</Form.Item>
		<Form.Item label="Отсутствие на складе:" name="productStatusName">
			<Select options={productState} name="productStatusName" />
		</Form.Item>
		<Form.Item label="SEO URL:" name="productSeoUrl">
			<Input name="productSeoUrl" />
		</Form.Item>
		<Form.Item label="Отображать на сайте:" name="productStatus">
			<Switch
				checkedChildren={<CheckOutlined />}
				unCheckedChildren={<CloseOutlined />}
				defaultChecked
			/>
		</Form.Item>

	  </React.Fragment>
  );
};

export default ProductDetailsForm;

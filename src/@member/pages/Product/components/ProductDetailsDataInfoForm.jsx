import React, { useState } from "react";
import {
  Form,
  Input, Switch,
} from "antd";
import Select from "components/Select";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const ProductDetailsForm = () => {
  const [componentSize, setComponentSize] = useState("default");

  const productState = [
  	{ label: "Нет в наличии", value: "0" },
    { label: "Есть в наличии", value: "1" },
  	];

  const productStatus = [
    { label: "Включено", value: "1" },
    { label: "Выключено", value: "0" },
  ];

  const validations = [
	{
	  required: true,
	  message: "Please input a name product!",
	},
  ];

  const onFormLayoutChange = ({ size }) => {
	setComponentSize(size);
  };

  return (
	  <React.Fragment>
		<Form
			labelCol={{
			  span: 4,
			}}
			wrapperCol={{
			  span: 14,
			}}
			layout="horizontal"
			size="default"
		>
			<Form.Item name="size" id="create_product">

			</Form.Item>
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

		</Form>
	  </React.Fragment>
  );
};

export default ProductDetailsForm;

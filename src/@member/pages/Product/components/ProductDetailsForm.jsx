import React from "react";
import {
  Button,
  Form,
  Input,
} from "antd";
import ProductDetailsImages from "pages/Product/components/ProductDetailsImages";

const ProductDetailsForm = () => {
  const validations = [
	    {
		  required: true,
		  message: "Please input a name product!",
	    },
	];

  const onFinish = (response) => {
    console.log(response);
  };

  const onFinishFailed = (response) => {
    console.log(response);
  };

  return (
	  <React.Fragment>
		<Form
			id="create_product"
			labelCol={{
			  span: 4,
			}}
			wrapperCol={{
			  span: 14,
			}}
			layout="horizontal"
			size="default"
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>

			<Form.Item label="Наименование:" name="productName" rules={validations}>
				<Input name="productName" />
			</Form.Item>
			<Form.Item label="Описание:" name="productDescriptions">
				<Input.TextArea />
			</Form.Item>
			<Form.Item label="Мета-тег Description:" name="productMetaDescription">
				<Input.TextArea />
			</Form.Item>
			<Form.Item label="Мета-тег Keywords:" name="productMetaKeywords">
				<Input />
			</Form.Item>
			<Form.Item label="Теги товара:" name="productTags">
				<Input />
			</Form.Item>
			<Form.Item label="Фото:" name="productImages">

				<ProductDetailsImages />

			</Form.Item>

			<Button type="primary" htmlType="submit">
				Сохранить
			</Button>
			<Button type="secondary">
				Отменить
			</Button>

		</Form>
	  </React.Fragment>
  );
};

export default ProductDetailsForm;

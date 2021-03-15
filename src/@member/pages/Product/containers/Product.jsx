import React, { Fragment } from "react";
import { Button, Form, Layout, Space, Tabs } from "antd";
import ProductDetailsForm from "pages/Product/components/ProductDetailsForm";
import ProductDetailsDataInfoForm from "pages/Product/components/ProductDetailsDataInfoForm";
import ProductDetailsAttributesForm from "pages/Product/components/ProductDetailsAttributesForm";
import { Content } from "antd/es/layout/layout";

const Product = () => {
  const { TabPane } = Tabs;

  const callback = (key) => {
	console.log(key);
  };

  const onFinish = (response) => {
	console.log(response);
  };

  const onFinishFailed = (response) => {
	console.log(response);
  };

  return (
	<Fragment>

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
			<Tabs onChange={callback} type="card" >
				<TabPane tab="Главная" key="1">
					<ProductDetailsForm />
				</TabPane>
				<TabPane tab="Данные" key="2">
					<ProductDetailsDataInfoForm />
				</TabPane>
				<TabPane tab="Связи" key="3">
					Connections
				</TabPane>
				<TabPane tab="Атрибуты" key="4">
					<ProductDetailsAttributesForm />
				</TabPane>
			</Tabs>

			<Button type="primary" htmlType="submit">
				Сохранить
			</Button>
			<Button type="secondary">
				Отменить
			</Button>

		</Form>

	</Fragment>
  );
};

export default Product;

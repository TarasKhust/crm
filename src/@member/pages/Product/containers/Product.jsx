import React, { Fragment } from "react";
import { Button, Tabs } from "antd";
import Form from "components/FormElements/Form";
import ProductDetailsForm from "pages/Product/components/ProductDetailsForm";
import ProductDetailsDataInfoForm from "pages/Product/components/ProductDetailsDataInfoForm";
import ProductDetailsAttributesForm from "pages/Product/components/ProductDetailsAttributesForm";
import ProductDetailsConnectionsForm from "pages/Product/components/ProductDetailsConnectionsForm";

const Product = () => {
  const { TabPane } = Tabs;

  const callback = (key) => {
	console.log(key);
  };

  return (
	<Fragment>

		<Form name="create_product">

			<Tabs onChange={callback} type="card" >
				<TabPane tab="Главная" key="1">
					<ProductDetailsForm />
				</TabPane>
				<TabPane tab="Данные" key="2">
					<ProductDetailsDataInfoForm />
				</TabPane>
				<TabPane tab="Связи" key="3">
					<ProductDetailsConnectionsForm />
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

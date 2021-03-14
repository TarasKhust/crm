import React from "react";
import { Tabs } from "antd";
import ProductDetailsForm from "pages/Product/components/ProductDetailsForm";
import ProductDetailsDataInfoForm from "pages/Product/components/ProductDetailsDataInfoForm";

const Product = () => {
  const { TabPane } = Tabs;

  const callback = (key) => {
	console.log(key);
  };

  return (
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
			Attributes
		</TabPane>
	  </Tabs>
  );
};

export default Product;

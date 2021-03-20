import React, { Fragment, useState } from "react";
import { Button, Tabs } from "antd";
import Form from "components/FormElements/Form";
import ProductDetailsForm from "pages/Product/components/ProductDetailsForm";
import ProductDetailsDataInfoForm from "pages/Product/components/ProductDetailsDataInfoForm";
import ProductDetailsAttributesForm from "pages/Product/components/ProductDetailsAttributesForm";
import ProductDetailsConnectionsForm from "pages/Product/components/ProductDetailsConnectionsForm";
import Notifications from "components/Notifications";
import { getForm } from "components/FormElements/Form";

const Product = () => {
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { TabPane } = Tabs;

  const callback = (key) => {
	console.log(key);
  };

  const onSubmit = (response) => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    console.log(response);
  };

  const onSubmitFailed = (response) => {
    console.log(response);
    setIsLoading(true);

    setTimeout(() => {
	  setIsLoading(false);
    }, 3000);

    setError(response.errorFields);
  };

  const onReset = () => {
    getForm.resetFields();
  };

  const initialValues = {
    attributes: [],
    productName: "",
    productDescriptions: "",
    productMetaDescription: "",
    productMetaKeywords: [],
    productTags: [],
    productImages: "",
    vendorCode: "",
    productPrice: 1,
    productCount: 0,
    productMinimalCount: 1,
    productStatusExist: "1",
    productStatus: true,
    productSeoUrl: "",
    brand: [],
    mainCategory: [],
    showInCategory: [],
    relatedProducts: [],
  };

  return (
	<Fragment>

		{error.length > 0 && error.map(({ errors }) => {
	     return (
		     <Notifications message={errors} />
	     );
	  })}

		<Form name="create_product"

			initialValues={initialValues}
			onFinish={onSubmit}
			onFinishFailed={onSubmitFailed}
		>

			<Tabs onChange={callback} type="card">
				<TabPane tab="Главная" key="1">
					<ProductDetailsForm />
				</TabPane>
				<TabPane forceRender tab="Данные" key="2">
					<ProductDetailsDataInfoForm />
				</TabPane>
				<TabPane forceRender tab="Связи" key="3">
					<ProductDetailsConnectionsForm />
				</TabPane>
				<TabPane forceRender tab="Атрибуты" key="4">
					<ProductDetailsAttributesForm />
				</TabPane>
			</Tabs>

		</Form>
		<Button type="primary" htmlType="submit" form="create_product" loading={isLoading}>
			Сохранить
		</Button>
		<Button type="secondary" onClick={onReset}>
			Отменить
		</Button>

	</Fragment>
  );
};

export default Product;

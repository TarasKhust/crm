import React, { Fragment, useState } from "react";
import { Button, Tabs } from "antd";
import Form, { getForm } from "components/FormElements/Form";
import ProductDetailsForm from "pages/Product/components/ProductDetailsForm";
import ProductDetailsDataInfoForm from "pages/Product/components/ProductDetailsDataInfoForm";
import ProductDetailsAttributesForm from "pages/Product/components/ProductDetailsAttributesForm";
import ProductDetailsConnectionsForm from "pages/Product/components/ProductDetailsConnectionsForm";
import Notifications from "components/Notifications";
import { useCreateProduct } from "api/product.api";

const Product = () => {
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
	const { setValue, error: errorMessage, data, loading } = useCreateProduct();
  const { TabPane } = Tabs;

	const onSubmit = (response) => {
		const {
			attributes,
			name,
			description,
			metaDescription,
			metaDataTagKeyword,
			tags,
			image,
			vendor,
			price,
			count,
			minimalCount,
			statusExist,
			status,
			seoUrl,
			brand,
			category,
			relatedProducts } = response;

		const data = {
			description, metaDescription, metaDataTagKeyword, name, tags,
			seoUrl, status, image, vendor, price, count, minimalCount, statusExist, brand, category: Number(category),
		};

		setValue({ variables: { input: data } });
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
    name: "",
	  description: "",
	  metaDescription: "",
	  metaDataTagKeyword: [],
	  tags: [],
	  image: "",
	  vendor: "",
	  price: 1,
	  count: 0,
    minimalCount: 1,
    statusExist: "1",
    status: true,
    seoUrl: "",
    brand: [],
	  category: [],
    relatedProducts: [],
  };

  return (
	<Fragment>

		{error.length > 0 && error.map(({ errors }) => {
	     return (
		     <Notifications message={errors} />
	     );
	  })}

		{errorMessage
		&& (
			<Notifications key="form" message={errorMessage?.message} typeOfNotification="error" />
		)}

		{data
		&& (
			<Notifications key="success" message={errorMessage?.message} typeOfNotification="success" />
		)}

		<Form name="create_product"

			initialValues={initialValues}
			onFinish={onSubmit}
			onFinishFailed={onSubmitFailed}
		>

			<Tabs type="card">
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

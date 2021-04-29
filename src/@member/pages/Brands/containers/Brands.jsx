import React, { Fragment, useState } from "react";
import { Button } from "antd";
import Form, { getForm } from "components/FormElements/Form";
import Notifications from "components/Notifications";
import BrandsForm from "pages/Brands/components/BrandsForm";
import { useCreateBrand } from "api/brand-api";

const Brands = () => {
  const [error, setError] = useState([]);
  const { setValue, data, error: errorBrand, loading } = useCreateBrand();

  const onSubmit = (response) => {
	setValue({ variables: { input: { ...response } } });
  };

  const onSubmitFailed = (response) => {
	setError(response.errorFields);
  };

  const onReset = () => {
	getForm.resetFields();
  };

  const initialValues = {
    name: "",
	description: "",
	metaTagsDescription: "",
	metaTags: [],
  };

  return (
	  <Fragment>

		{error.length > 0 && error.map(({ errors }, index) => {
		  return (
			  <Notifications key={index} message={errors} />
		  );
		})}

		{errorBrand
		   && (
			  <Notifications key="form" message={errorBrand?.message} typeOfNotification="error" />
		  )}

		{data
		&& (
			<Notifications key="success" message={errorBrand?.message} typeOfNotification="success" />
		)}

		<Form name="create_brands"

			initialValues={initialValues}
			onFinish={onSubmit}
			onFinishFailed={onSubmitFailed}
		>

			<BrandsForm />

		</Form>
		<Button type="primary" htmlType="submit" form="create_brands" loading={loading}>
			Сохранить
		</Button>
		<Button type="secondary" onClick={onReset}>
			Отменить
		</Button>

	  </Fragment>
  );
};

export default Brands;

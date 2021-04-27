import React, { Fragment, useState } from "react";
import { Button } from "antd";
import Form, { getForm } from "components/FormElements/Form";
import Notifications from "components/Notifications";
import BrandsForm from "pages/Brands/components/BrandsForm";
import { useCreateBrand, useQueryBrand } from "api/brand-api";
import { useMutation } from "@apollo/client";
import { BRAND_MUTATION } from "api/schema/brand.schema";

const Brands = () => {
  const [error, setError] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { setValue, data, error: errorBrand, loading } = useCreateBrand();
  const { data: brand, error: errorBr, loading: brandLoading } = useMutation(BRAND_MUTATION);

  console.log(brand);

  const onSubmit = (response) => {
	console.log(data);
	console.log(errorBrand);

	setValue({ variables: { data: { response } } }).then(({ data: { setValue: { status } } }) => {
	  console.log(status);
	});
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
    title: "",
    description: "",
    metaDescription: "",
    metaKeywords: [],
  };

  return (
	  <Fragment>

		{error.length > 0 && error.map(({ errors }, index) => {
		  return (
			  <Notifications key={index} message={errors} />
		  );
		})}

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

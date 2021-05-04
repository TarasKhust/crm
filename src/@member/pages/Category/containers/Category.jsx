import React, { Fragment, useState } from "react";
import { Button, Tabs } from "antd";
import Form, { getForm } from "components/FormElements/Form";
import Notifications from "components/Notifications";
import CategoryForm from "pages/Category/components/CategoryForm";
import CategoryDataInfoForm from "pages/Category/components/CategoryDataInfoForm";
import { useCreateCategory, useQueryCategory } from "api/category-api";
import { CATEGORY_QUERY } from "api/schema/category.schema";

const Category = () => {
  const [error, setError] = useState([]);
  const { setValue, error: errorMessage, data, loading } = useCreateCategory();
  const { data: dataQuery, loading: loadingQuery } = useQueryCategory();
  const { TabPane } = Tabs;

	const items = !loadingQuery ? dataQuery?.categoryFindAll : [];

  const callback = (key) => {
	console.log(key);
  };

  const onSubmit = (response) => {
	  const {
    description,
	  metaDataTagKeyword,
	  metaDescription,
	  name,
	  parentCategory,
	  seoUrl,
	  status } = response;

	  const data = {
		  description, metaDescription, metaDataTagKeyword, name,
		  seoUrl, status,
	  };

	  if (parentCategory > 0) {
	  	data.parentCategory = Number(parentCategory);
	  }

	  setValue({ variables: { input: data },
		  refetchQueries: [{ query: CATEGORY_QUERY }] });
  };

  const onSubmitFailed = (response) => {
	setError(response.errorFields);
  };

  const onReset = () => {
	getForm.resetFields();
  };

  const initialValues = {
	  parentCategory: "",
    seoUrl: "",
    status: true,
    name: "",
    description: "",
    metaDescription: "",
	  metaDataTagKeyword: [],
  };

  return (
	  <Fragment>

		{error.length > 0 && error.map(({ errors }, index) => {
		  return (
			  <Notifications key={index} message={errors} typeOfNotification="error" />
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

		<Form name="create_category"

			initialValues={initialValues}
			onFinish={onSubmit}
			onFinishFailed={onSubmitFailed}
		>

			<Tabs onChange={callback} type="card">
				<TabPane tab="Главная" key="1">
					<CategoryForm />
				</TabPane>
				<TabPane forceRender tab="Данные" key="2">
					<CategoryDataInfoForm items={items} />
				</TabPane>
			</Tabs>

		</Form>
		<Button type="primary" htmlType="submit" form="create_category" loading={loading}>
			Сохранить
		</Button>
		<Button type="secondary" onClick={onReset}>
			Отменить
		</Button>

	  </Fragment>
  );
};

export default Category;

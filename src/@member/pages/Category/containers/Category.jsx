import React, { Fragment, useState } from "react";
import { Button, Tabs } from "antd";
import Form, { getForm } from "components/FormElements/Form";
import Notifications from "components/Notifications";
import CategoryForm from "pages/Category/components/CategoryForm";
import CategoryDataInfoForm from "pages/Category/components/CategoryDataInfoForm";
import { useCreateCategory } from "api/category-api";

const Category = () => {
  const [error, setError] = useState([]);
  const { setValue, error: errorMessage, data, loading } = useCreateCategory();
  const { TabPane } = Tabs;

  const callback = (key) => {
	console.log(key);
  };

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
    mainCategory: [],
    seoUrl: "",
    status: "",
    name: "",
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
					<CategoryDataInfoForm />
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

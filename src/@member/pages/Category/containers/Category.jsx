import React, { Fragment, useState } from "react";
import { Button, Tabs } from "antd";
import Form, { getForm } from "components/FormElements/Form";
import Notifications from "components/Notifications";
import CategoryForm from "pages/Category/components/CategoryForm";
import CategoryDataInfoForm from "pages/Category/components/CategoryDataInfoForm";

const Category = () => {
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
    mainCategory: [],
    categorySeoUrl: "",
    categoryStatus: "",
    categoryName: "",
    categoryDescriptions: "",
    categoryMetaDescription: "",
    categoryMetaKeywords: [],
    categoryTags: [],
  };

  return (
	  <Fragment>

		{error.length > 0 && error.map(({ errors }, index) => {
		  return (
			  <Notifications key={index} message={errors} />
		  );
		})}

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
		<Button type="primary" htmlType="submit" form="create_category" loading={isLoading}>
			Сохранить
		</Button>
		<Button type="secondary" onClick={onReset}>
			Отменить
		</Button>

	  </Fragment>
  );
};

export default Category;

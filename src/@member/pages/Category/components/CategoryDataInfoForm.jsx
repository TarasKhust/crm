import React from "react";
import {
  Switch,
} from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Item } from "components/FormElements/Form";
import Input from "components/FormElements/Input";
import MultiSelect from "components/FormElements/MultiSelect";

const ProductDetailsForm = () => {
  const validateVendor = async (rule, val, name) => {
    if (!val || val.length < 1) {
      return Promise.reject(new Error(`${name} не может быть пустим`));
    }
  };

  const treeData = [
	{
	  title: "Node1",
	  value: "0-0",
	  key: "0-0",
	  children: [
		{
		  title: "Child Node1",
		  value: "0-0-0",
		  key: "0-0-0",
		},
	  ],
	},
	{
	  title: "Node2",
	  value: "0-1",
	  key: "0-1",
	  children: [
		{
		  title: "Child Node3",
		  value: "0-1-0",
		  key: "0-1-0",
		},
		{
		  title: "Child Node4",
		  value: "0-1-1",
		  key: "0-1-1",
		},
		{
		  title: "Child Node5",
		  value: "0-1-2",
		  key: "0-1-2",
		},
	  ],
	},
  ];

  return (
	  <React.Fragment>

		<MultiSelect
			name="mainCategory"
			label="Родительская категория:"
			rules={[{ validator: (rule, val) => validateVendor(rule, val, "Родительская категория") }]}
			options={treeData}
			placeholder="Пожалуйста выбирите"
		/>

		<Input name="categorySeoUrl" label="SEO URL:" />

		<Item name="categoryStatus" label="Отображать на сайте:">
			<Switch
				checkedChildren={<CheckOutlined />}
				unCheckedChildren={<CloseOutlined />}
				defaultChecked
			/>
		</Item>

	  </React.Fragment>
  );
};

export default ProductDetailsForm;
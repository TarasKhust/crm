import React from "react";
import Select from "components/FormElements/Select";
import Cascader from "components/FormElements/Cascader";
import MultiSelect from "components/FormElements/MultiSelect";
import ProductDetailsSearch from "pages/Product/containers/ProductDetailsSearch";

const ProductDetailsConnectionsForm = () => {
  const brends = [
	"AL-PLASTIK",
	"BerlingerHaus",
	"Bohemia",
	"Bohmann",
	"Borcam",
	"Borgonovo",
	"Bormioli Rocco",
	"Cristal D`Arques",
	"Durobor",
	"Elbee",
	"ETERNUM",
	"GP&amp;ME",
	"Hoffburg",
	"krosno",
	"Laopala",
	"Lessner",
	"Luminarc",
	"Narodnyiproduct",
	"Pasabahce",
	"Peterhof",
	"Pyrex",
	"Ritzenhoff",
	"Simax",
	"Svanera",
	"Termisil",
	"Tramontina",
	"TVS",
	"Vincent",
	"Vissner",
	"Wilmax",
  ];

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

  const optionsMain = [
	{
	  value: "zhejiang",
	  label: "Zhejiang",
	  children: [
		{
		  value: "hangzhou",
		  label: "Hangzhou",
		  children: [
			{
			  value: "xihu",
			  label: "West Lake",
			},
			{
			  value: "xiasha",
			  label: "Xia Sha",
			  disabled: true,
			},
		  ],
		},
	  ],
	},
	{
	  value: "jiangsu",
	  label: "Jiangsu",
	  children: [
		{
		  value: "nanjing",
		  label: "Nanjing",
		  children: [
			{
			  value: "zhonghuamen",
			  label: "Zhong Hua men",
			},
		  ],
		},
	  ],
	},
  ];

  const options = brends.map((value) => ({ label: value, value: value }));

  return (
	  <React.Fragment>

		<Select name="brand" options={options} label="Производитель:" />

		<Cascader name="mainCategory" label="Главная категория:" options={optionsMain} rules={[{ required: true, message: "Missing main category" }]} />

		<MultiSelect name="showInCategory" label="Показывать в категориях:" options={treeData} />

		<ProductDetailsSearch name="relatedProducts" label="Сопутствующие товары:" />

	  </React.Fragment>
  );
};

export default ProductDetailsConnectionsForm;

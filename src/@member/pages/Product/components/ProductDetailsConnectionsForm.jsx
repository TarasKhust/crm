import React from "react";
import Select from "components/FormElements/Select";
import MultiSelect from "components/FormElements/MultiSelect";
import ProductDetailsSearch from "pages/Product/containers/ProductDetailsSearch";
import { useQueryCategory } from "api/category-api";
import { useQueryBrand } from "api/brand-api";

const ProductDetailsConnectionsForm = () => {
	const { data: dataQuery, loading: loadingQuery } = useQueryCategory();
	const { data: dataQueryBrand, loading: loadingQueryBrand } = useQueryBrand();

	const items = !loadingQuery ? dataQuery?.categoryFindAll : [];
	const itemsBrand = !loadingQueryBrand ? dataQueryBrand?.getAllBrands : [];

  const options = itemsBrand.map(({ name, id }) => ({ label: name, value: id }));

  const validation = async (rule, val, name) => {
	if (!val || val.length < 1) {
	  return Promise.reject(new Error(`${name} не может быть пустим`));
	}
  };

  return (
	  <React.Fragment>

		<Select name="brand"
			options={options}
			label="Производитель:"
			rules={[{ validator: (rule, val) => validation(rule, val, "Производитель") }]}
			placeholder="Пожалуйста выберите"
		/>

		<MultiSelect name="category" label="Показывать в категориях:" options={items} rules={[{ validator: (rule, val) => validation(rule, val, "Главная категория") }]} placeholder="Пожалуйста выберите" />

		<ProductDetailsSearch name="relatedProducts" label="Сопутствующие товары:" placeholder="Пожалуйста выберите" disabled />

	  </React.Fragment>
  );
};

export default ProductDetailsConnectionsForm;

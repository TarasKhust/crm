import React from "react";
import Select from "components/FormElements/Select";

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

  const options = brends.map((value) => ({ label: value, value: value }));

  return (
	  <React.Fragment>

		<Select name="brand" options={options} label="Производитель:" />

		<Select name="mainCategory" label="Главная категория:" />

		<Select name="showInCategory" label="Показывать в категориях:" />

		<Select name="relatedProducts" label="Сопутствующие товары:" />

	  </React.Fragment>
  );
};

export default ProductDetailsConnectionsForm;

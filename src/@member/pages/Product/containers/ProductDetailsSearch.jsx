import PropTypes from "prop-types";
import React from "react";
import { Spin } from "antd";
import debounce from "lodash/debounce";
import Select from "components/FormElements/Select";

const DebounceSelect = ({ fetchOptions, debounceTimeout, ...props }) => {
  const [fetching, setFetching] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const fetchRef = React.useRef(0);

  const debounceFetcher = React.useMemo(() => {
	const loadOptions = (value) => {
	  fetchRef.current += 1;
	  const fetchId = fetchRef.current;
	  setOptions([]);
	  setFetching(true);

	  fetchOptions(value).then((newOptions) => {
		if (fetchId !== fetchRef.current) {
		  // for fetch callback order
		  return;
		}

		setOptions(newOptions);
		setFetching(false);
	  });
	};

	return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
	  <Select
		  labelInValue
		  filterOption={false}
		  onSearch={debounceFetcher}
		  notFoundContent={fetching ? <Spin size="small" /> : null}
		  {...props}
		  options={options}
	  />
  );
}; // Usage of DebounceSelect

async function fetchUserList(username) {
  console.log("fetching user", username);
  return fetch("https://randomuser.me/api/?results=5")
  .then((response) => response.json())
  .then((body) =>
	  body.results.map((user) => ({
		label: `${user.name.first} ${user.name.last}`,
		value: user.login.username,
	  })),
  );
}

const ProductDetailsSearch = (props) => {
  const { label, name } = props;
  const [value, setValue] = React.useState([]);
  return (
	  <DebounceSelect
		  label={label}
		  name={name}
		  mode="multiple"
		  value={value}
		  placeholder="Select users"
		  fetchOptions={fetchUserList}
		  onChange={(newValue) => {
			setValue(newValue);
		  }}
		  style={{
			width: "100%",
		  }}
	  />
  );
};

export default ProductDetailsSearch;

DebounceSelect.propTypes = {
  debounceTimeout: PropTypes.number,
  fetchOptions: PropTypes.func,
};

DebounceSelect.defaultProps = {
  debounceTimeout: 800,
  fetchOptions: new Function(),
};

ProductDetailsSearch.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

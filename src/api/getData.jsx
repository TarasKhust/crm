import GQL from "../Request/GQL";
import productExchangeRates from "./schema/productExchangeRates.schema";

/**
 * @param props
 * @returns {{getValue: function loading: boolean, data: any, error: string, rest: any}}
 */

export const useProductExchangeRates = (props) => {
	const options = {
		fetchPolicy: "cache-and-network",
		...props,
	};

	const [getValue, { loading, error, data, ...rest }] = GQL.useLazyQuery(productExchangeRates, options);

	return {
		getValue,
		loading,
		error,
		data,
		rest,
	};
};

/**
 * @name useQueryProduct
 * @param props
 * @returns {{loading: boolean, data: any, error: string, rest: any}}
 */
export const useQueryProduct = (props) => {
	const options = {
		fetchPolicy: "cache-and-network",
		...props,
	};

	const { loading, data, error, ...rest } = GQL.useQuery(productExchangeRates, options);

	return {
		loading,
		error,
		data,
		rest,
	};
};

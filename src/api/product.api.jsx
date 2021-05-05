import GQL from "Request/GQL";
import { PRODUCT_MUTATION } from "api/schema/product.schema";

/**
 * @name useCreateCategory
 * @param props
 * @returns {{setValue: function loading: boolean, data: any, error: string, rest: any}}
 */

export const useCreateProduct = (props) => {
	const options = {
		...props,
	};

	const [setValue, { loading, error, data, ...rest }] = GQL.useMutation(PRODUCT_MUTATION, options);

	return {
		setValue,
		loading,
		error,
		data,
		rest,
	};
};

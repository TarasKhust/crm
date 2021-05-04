import GQL from "Request/GQL";
import { CATEGORY_MUTATION, CATEGORY_QUERY } from "api/schema/category.schema";

/**
 * @name useCreateCategory
 * @param props
 * @returns {{setValue: function loading: boolean, data: any, error: string, rest: any}}
 */

export const useCreateCategory = (props) => {
	const options = {
		...props,
	};

	const [setValue, { loading, error, data, ...rest }] = GQL.useMutation(CATEGORY_MUTATION, options);

	return {
		setValue,
		loading,
		error,
		data,
		rest,
	};
};

/**
 * @name useCreateCategory
 * @param props
 * @returns {{loading: boolean, data: any, error: string, rest: any}}
 */

export const useQueryCategory = (props) => {
	const options = {
		...props,
	};

	const { loading, error, data, ...rest } = GQL.useQuery(CATEGORY_QUERY, options);

	return {
		loading,
		error,
		data,
		rest,
	};
};

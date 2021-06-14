import GQL from "Request/GQL";
import { ORDER_QUERY, DELETE_MUTATION } from "api/schema/order.schema";

/**
 * @name useQueryOrder
 * @param props
 * @returns {{loading: boolean, data: any, error: string, rest: any}}
 */

export const useQueryOrder = (props) => {
	const options = {
		...props,
	};

	const { loading, error, data, ...rest } = GQL.useQuery(ORDER_QUERY, options);

	return {
		loading,
		error,
		data,
		rest,
	};
};

/**
 * @name useRemoveOrder
 * @param props
 * @returns {{setValue: function loading: boolean, data: any, error: string, rest: any}}
 */

export const useRemoveOrder = (props) => {
	const options = {
		...props,
	};

	const [setValue, { loading, error, data, ...rest }] = GQL.useMutation(DELETE_MUTATION, options);

	return {
		setValue,
		loading,
		error,
		data,
		rest,
	};
};

import GQL from "Request/GQL";
import { ORDER_QUERY } from "api/schema/order.schema";

/**
 * @name useCreateCategory
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

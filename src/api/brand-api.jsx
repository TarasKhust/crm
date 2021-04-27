import GQL from "../Request/GQL";
import { BRAND_MUTATION, GET_BRANDS } from "api/schema/brand.schema";

/**
 * @name useCreateBrand
 * @param props
 * @returns {{getValue: function loading: boolean, data: any, error: string, rest: any}}
 */

export const useCreateBrand = (props) => {
  const options = {
	...props,
  };

  const [setValue, { loading, error, data, ...rest }] = GQL.useMutation(BRAND_MUTATION, options);

  return {
	setValue,
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
export const useQueryBrand = (props) => {
  const options = {
	fetchPolicy: "cache-and-network",
	...props,
  };

  const { loading, data, error, ...rest } = GQL.useQuery(GET_BRANDS, options);

  return {
	loading,
	error,
	data,
	rest,
  };
};

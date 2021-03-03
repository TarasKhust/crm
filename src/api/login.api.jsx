import { LOGIN_MUTATION } from "./schema/login.schema";
import GQL from "Request/GQL";

/**
 *
 * @param props
 * @return {{login: function, error: boolean, loading: boolean, data: any}}
 */
export const useLogin = (props) => {
  const options = {
	...props,
  };

  const [login, { data, error, loading }] = GQL.useMutation(LOGIN_MUTATION, options);

  return {
	login,
	error,
	loading,
	data,
  };
};

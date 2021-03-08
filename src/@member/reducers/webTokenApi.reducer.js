import { fromJS } from "immutable";
import * as types from "actions/webTokenApi.actions";

/**
 * @namespace webTokenApiState
 */
export const initState = fromJS({

  /**
   * Full list of contacts
   * @type {{}} user
   * @property {string} items.acc_type
   * @property {string} items.state
   */
  user: {
    email: "",
    id: "",
    token: "",
  },

  /**
   * Check is contacts loaded
   * @type {boolean} isLoaded
   */
  isUserValid: false,

});

export default (state = initState, { type, ...props }) => {
  switch (type) {
	case types.SET_USER:
	  return state
	  .set("user", fromJS(props.user))
	  .set("isUserValid", true);

    case types.SET_USER_TOKEN:
	  return state
	  .setIn(["user", "token"], fromJS(props.user))
	  .set("isUserValid", true);

	default:
	  return state;
  }
};

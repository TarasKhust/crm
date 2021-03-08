/**
 * @interface webTokenActions
 */

export const SET_USER = "SET_USER";
export const SET_USER_TOKEN = "SET_USER_TOKEN";

/**
 * @name webTokenActions#setUser
 * @returns {{type: string, contacts: (*|[])}}
 * @param userInfo
 */
export const setUser = (userInfo) => ({
  type: SET_USER,
  user: userInfo instanceof Object ? userInfo : {},
});

/**
 * @name webTokenActions#setUserToken
 * @returns {{type: string, contacts: (*|[])}}
 * @param token
 */
export const setUserToken = (token) => ({
  type: SET_USER_TOKEN,
  user: token,
});

// ================== API ==================

/**
 * @name webTokenActions#getUser
 * @returns {function(*): {message: *, status: *}}
 */
export const getUser = (data) => async (dispatch) => {
	dispatch(setUser(data));
};

/**
 * @name webTokenActions#getUser
 * @returns {function(*): {message: *, status: *}}
 */
export const checkToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch(setUserToken(token));
};

/**
 * @interface webTokenApiSelectors
 */

/**
 * @name webTokenApiSelectors#getState
 * @param state
 * @returns {webTokenApiState}
 */
export const getState = (state) => state.toJS();

/**
 * @name webTokenApiSelectors#getUserInfo
 * @param state
 * @returns {{}}
 */
export const getUserInfo = (state) => getState(state).user;

/**
 * @name webTokenApiSelectors#getUserId
 * @param state
 * @returns {Object}
 */
export const getUserId = (state) => getUserInfo(state).id;

/**
 * @name webTokenApiSelectors#getUserEmail
 * @param state
 * @returns {Object}
 */
export const getUserEmail = (state) => getUserInfo(state).email;

/**
 * @name webTokenApiSelectors#getUserToken
 * @param state
 * @returns {Object}
 */
export const getUserToken = (state) => getUserInfo(state).token;

/**
 * @name webTokenApiSelectors#getUserIsValid
 * @param state
 * @returns {Object}
 */
export const getUserIsValid = (state) => getUserInfo(state).isUserValid;

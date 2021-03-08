/**
 *
 * @param {object} actions
 * @param {function} dispatch
 * @param {object} state
 * @param {function} subscribe
 * @returns {*}
 */
export function bindReactActionCreators(actions, dispatch, state = {}, subscribe = (e) => e) {
	const getState = () => state;
	const useSelector = (selector) => selector(getState());

	return Object.keys(actions).reduce((a, k) => {
		if (typeof actions[k] !== "function") {
			return a;
		}

		a[k] = (...p) => {
			let result = actions[k](...p);

			if (typeof result === "function") {
				result = result(dispatch, getState(), useSelector);
			}

			const modified = subscribe(result, dispatch, getState(), useSelector);

			dispatch(modified);

			return result;
		};

		return a;
	}, {});
}

/**
 *
 * @param selectors
 * @param state
 * @returns {{}}
 */
export function bindReactSelectors(selectors, state) {
	return Object.keys(selectors).reduce((a, k) => {
		if (typeof selectors[k] !== "function") {
			return a;
		}

		a[k] = (...p) => {
			const result = selectors[k](state);

			if (typeof result === "function") {
				return result(...p);
			}

			return result;
		};

		return a;
	}, {});
}

import { compile } from "path-to-regexp";

// for some reason "match" not working

/**
 *
 * @param route
 * @param params
 * @returns {string}
 */
export const insertParams = (route, params = {}) => {
	try {
		params = Object.assign(getParams(route), params);
		return compile(route)(params);
	} catch (e) {
		console.error(`[routerHelpers][insertParams] error. ${e.message}`);
	}
};

/**
 *
 * @param route
 * @param pathname
 * @returns {object}
 */
export const getParams = (route, pathname = window.location.pathname) => {
	try {
		const params = {};
		const split = (e) => e.split("/").filter((e) => e && e.length);
		const _route = split(route);
		const _pathname = split(pathname);

		for (let i = 0; i < _route.length; i++) {
			if (_route[i][0] === ":") {
				params[_route[i].replace(":", "")] = _pathname[i] || _route[i];
			}
		}

		return params;
	} catch (e) {
		console.error(`[routerHelpers][getParams] error. ${e.message}`);
	}
};

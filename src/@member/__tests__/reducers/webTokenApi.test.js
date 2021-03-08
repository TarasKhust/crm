import { store } from "store/index";
import reducer, { initState, key } from "reducers/webTokenApi.reducer";
import * as types from "actions/webTokenApi.actions";

store.injectReducer(key, reducer);

describe("withProductAddons.reducer", () => {
	test("default case", () => {
		store.dispatch({
			type: types.TO_DEFAULT,
		});

		expect(
			store.getState()[key]
		).toStrictEqual(
			initState
		);
	});

	test("SET_IS_COMPLETE", () => {
		const isLoaded = true;

		store.dispatch({
			type: types.SET_USER,
			isLoaded,
		});

		expect(
			store.getState()[key].get("isLoaded")
		).toBe(
			isLoaded
		);
	});
});

import * as selectors from "selectors/webTokenApi.selectors";
import { initState } from "reducers/webTokenApi.reducer";

describe("withProductAddons.selectors", () => {
	const getDefaultState = () => initState;

	test("getIsComplete", () => {
		expect(
			selectors.getIsLoaded(getDefaultState())
		).toBe(
			getDefaultState().get("isLoaded")
		);
	});

	test("getIsLoading", () => {
		expect(
			selectors.getIsLoading(getDefaultState())
		).toBe(
			getDefaultState().get("isLoading")
		);
	});

	test("getErrorText", () => {
		expect(
			selectors.getError(getDefaultState())
		).toBe(
			getDefaultState().get("error")
		);
	});

	test("hasRequestError", () => {
		expect(
			selectors.getIsError(getDefaultState())
		).toBe(
			getDefaultState().get("isError")
		);
	});

	test("getValues", () => {
		expect(
			selectors.getItemsConnected(getDefaultState())
		).toStrictEqual(
			getDefaultState().get("connectedProducts")
		);
	});
});

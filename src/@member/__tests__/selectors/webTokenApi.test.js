import * as selectors from "selectors/webTokenApi.selectors";
import { initState } from "reducers/webTokenApi.reducer";

describe("selectors", () => {
	const getDefaultState = () => initState;

	test("getState", () => {
		expect(
			selectors.getState(getDefaultState())
		).toBe(
			getDefaultState().get()
		);
	});

	test("getIsLoading", () => {
		expect(
			selectors.getUserEmail(getDefaultState())
		).toBe(
			getDefaultState().get("isLoading")
		);
	});

	test("getErrorText", () => {
		expect(
			selectors.getUserId(getDefaultState())
		).toBe(
			getDefaultState().get("error")
		);
	});

	test("hasRequestError", () => {
		expect(
			selectors.getUserInfo(getDefaultState())
		).toBe(
			getDefaultState().get("isError")
		);
	});

	test("getValues", () => {
		expect(
			selectors.getUserToken(getDefaultState())
		).toStrictEqual(
			getDefaultState().get("connectedProducts")
		);
	});
});

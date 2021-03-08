import * as actions from "actions/webTokenApi.actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@members/__mocks__/product/config";

const mockStore = configureMockStore([thunk]);

describe("withProductConnectedDomains.actions", () => {
	test("TO_DEFAULT", () => {
		expect(
			actions.toDefault()
		).toStrictEqual({
			type: actions.TO_DEFAULT,
		});
	});

	test("SET_CONNECTED_DOMAINS_LOADED", () => {
		const isLoaded = true;

		expect(
			actions.setIsComplete(isLoaded)
		).toStrictEqual({
			type: actions.SET_CONNECTED_DOMAINS_LOADED,
			isLoaded,
		});

		expect(
			actions.setIsComplete("")
		).toStrictEqual({
			type: actions.SET_CONNECTED_DOMAINS_LOADED,
			isLoaded: false,
		});

		expect(
			actions.setIsComplete()
		).toStrictEqual({
			type: actions.SET_CONNECTED_DOMAINS_LOADED,
			isLoaded: false,
		});
	});

	test("SET_CONNECTED_DOMAINS_ERROR", () => {
		const error = "some error text";

		expect(
			actions.setConnectedDomainsError(error)
		).toStrictEqual({
			type: actions.SET_CONNECTED_DOMAINS_ERROR,
			error,
			isError: true,
		});

		expect(
			actions.setConnectedDomainsError([])
		).toStrictEqual({
			type: actions.SET_CONNECTED_DOMAINS_ERROR,
			error: "",
			isError: false,
		});

		expect(
			actions.setConnectedDomainsError()
		).toStrictEqual({
			type: actions.SET_CONNECTED_DOMAINS_ERROR,
			error: "",
			isError: false,
		});
	});

	test("SET_CONNECTED_DOMAINS_LOADING", () => {
		const isLoading = true;

		expect(
			actions.setConnectedDomainsIsLoading(isLoading)
		).toStrictEqual({
			type: actions.SET_CONNECTED_DOMAINS_LOADING,
			isLoading,
		});

		expect(
			actions.setConnectedDomainsIsLoading("")
		).toStrictEqual({
			type: actions.SET_CONNECTED_DOMAINS_LOADING,
			isLoading: false,
		});

		expect(
			actions.setConnectedDomainsIsLoading()
		).toStrictEqual({
			type: actions.SET_CONNECTED_DOMAINS_LOADING,
			isLoading: false,
		});
	});

	test("SET_CONNECTED_DOMAINS_LOADING", () => {
		const data = responseConnectedDomains.data;

		expect(
			actions.setConnectedDomains(data)
		).toStrictEqual({
			type: actions.SET_CONNECTED_DOMAINS,
			connectedProducts: data.connected_products,
		});

		expect(
			actions.setConnectedDomains({ connected_products: [] })
		).toStrictEqual({
			type: actions.SET_CONNECTED_DOMAINS,
			connectedProducts: [],
		});
	});
});

describe("withProductConnectedDomains.actions API", () => {
	test("getConnectedDomains", () => {
		const store = mockStore();
		const data = responseConnectedDomains.data;

		expect.assertions(1);

		return expect(
			store
			.dispatch(
				actions.getConnectedDomains("12812771")
			)
			.then(() => store.getActions())
		).resolves.toEqual([
			actions.setConnectedDomainsIsLoading(true),
			actions.setConnectedDomains(data),
			actions.setConnectedDomainsIsLoading(false),
		]);
	});
});

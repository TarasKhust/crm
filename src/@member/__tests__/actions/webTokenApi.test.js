import * as actions from "actions/webTokenApi.actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@members/__mocks__/product/config";

const mockStore = configureMockStore([thunk]);

describe("withProductConnectedDomains.actions", () => {
	test("SET_CONNECTED_DOMAINS_LOADED", () => {
		const isLoaded = true;

		expect(
			actions.setUser({ user: "taras", id: "1231321", token: "dsadasdasdsa" })
		).toStrictEqual({
			type: actions.SET_USER,

		});
	});
});

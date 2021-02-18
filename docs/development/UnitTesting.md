Unit Testing
=====================

```Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended.```

Why?
-----

To ensure that your section of code is working as expected, with all arguments types and will not break down hole application on any error case.

When?
-----

Unit test must be written on any `common` unit, that send/receive/process/mutate application data.
`Common` means that multiple components/containers/compositions have dependency of this application data. It can be application group reducers, actions, selectors, dynamic configurations, helpers, api, classes.

In API case, best testing is to be ensure that your method receive/send data, that match schema and have actual mock data. See [XHR docs](https://bitbucket.au.ds.network/projects/BWS/repos/crazy_client_src/browse/docs/classes/XHR.md?at=refs%2Fheads%2FDSP18-21996-new-domain-flow).

In case of complex component/container/composition can be written `own` unit test to ensure of properly worked business logic.

Where?
-----

For common units test must be placed in directory `tests`, witch can be placed in repository `src`, groups `@master/@members/...` or container `@group/containers/MyContainer`.

Tests should be separated by source code type, for example: actions/selectors/reducers/classes.

Unit test file must have suffix `*.test.js` in name. Otherwise, this file will not be started automatically in deployment process.

All tests that matches pathname `**/tests/**/*.test.js` will be started automatically in deployment process.

Examples
-----

Test descriptions preview
```
SRC file name/type/section
        > method
            > test
            > or individual case
                > test
```

-----

#### Action example:

##### Action creator functions
> Action can have own description block when method has a chance to receive arguments with wrong types, values, or not receive them at all.
>
```javascript
import * as types from "actions/myModule.actions";

describe("someModule actions", () => {

    test("someAction", () => {
        expect(types.toDefault())
            .toStrictEqual({
                type: types.TO_DEFAULT
            });
    });

    // test any possible argument case
    // in any case "items" must be an array
    describe("someAction", () => {
        const result = {
            type: types.PUSH_DATA,
            items: [],
        };

        test("expected", () => {
            expect(types.pushData({
                items: result.items
            }))
                .toStrictEqual(result);
        });

        test("wrong types", () => {
            expect(types.pushData({
                items: ""
            }))
                .toStrictEqual(result);
        });

        test("no args", () => {
            expect(types.pushData())
                .toStrictEqual(result);
        });
    });

});
```
##### Actions call stack and async actions
Example on action with API call.

> API requests must be mocked, before call them in unit test. See [XHR docs](https://bitbucket.au.ds.network/projects/BWS/repos/crazy_client_src/browse/docs/classes/XHR.md?at=refs%2Fheads%2master)
```javascript
import { applyMockConfig } from "helpers/testHelpers";
import someMockConfig from "mocks/someMockConfig";
import anotherMockConfig from "mocks/anotherMockConfig";

const mockAPI = applyMockConfig(someMockConfig, anotherMockConfig);

// ... your code

mockAPI.unset(); // unset mock config data
```

> You will need to configureMockStore to get actions call stack
```javascript
import { mockStore } from "helpers/testHelpers";
import { initState } from "reducers/myOwsomeModule.reducer";

const { dispatch, getActions } = mockStore(initState);
```

> Before testing actions call stack, each action must be tested.
```javascript
import { mockStore } from "helpers/testHelpers";
import { initState } from "reducers/myOwsomeModule.reducer";
import * as types from "actions/myModule.actions";

describe("someModule actions", () => {

    // API GET items array
    test("someAsyncAction", () => {
        const { dispatch, getActions } = mockStore(initState);

        expect.assertions(1); // expect for 1 resolve/reject

        // return expected assertion
        return expect(
            dispatch(types.getItems()) // call action with api request
                .then(() => getActions()) // return actions call stack
        ).resolves.toEqual([
            types.setInProgress(true),
            types.setInProgress(false),
            types.setError(""),
            types.setItems(normalResponse.data.items),
        ]);

    });

});
```
-----

#### Selector example:

> Import test helpers, if they are need
```javascript
import { testSelector, testNestedSelector } from "helpers/testHelpers";
import { section } from "actions/myOwsomeModule.actions";
import { initState } from "reducers/myOwsomeModule.reducer";
import * as myModuleSelectors from "selectors/myOwsomeModule.selectors";

const useSelector = testSelector(section, initState); // redux store.getState
const useNestedSelector = testNestedSelector(section, initState); // reducer key


useSelector(myModuleSelectors.mySelector, {
    // custom state
}); // return result like redux useSelector


```

> Import selectors and write test for each selector
```javascript
import * as myModuleSelectors from "selectors/myModule.selectors";

describe("someModule actions", () => {

    test("getType", () => {
        expect(
            useSelector(myModuleSelectors.getType)
        ).toStrictEqual(
            config.userTypes[0] // check initial state
        );
    });

    test("getItemsFilter", () => {
        const state = {
            items: ["a", "b", "c"]
        };
        const filter = {
            // filter options
        };

        expect(
            useSelector(myModuleSelectors.getItemsFilter, state)(filter)
        ).toStrictEqual(
            ["b"]
        );
    });

});
```

-----

#### Reducer example:

> Import test helpers, if they are need
```javascript
import { testReducerDispatch } from "helpers/testHelpers";
import reducer, { init, initState } from "reducers/myOwsomeModule.reducer";

const dispatchTest = testReducerDispatch(reducer, initState); // call reducer with initial state and convert immutable result toJS


dispatchTest(
    action, // { type: string, ...params }
    state, // custom state to merge to initial state before reducer call
);
```

> Import action types and write test for each case in reducer
```javascript
import * as types from "actions/myOwsomeModule.actions";

const state = initState.toJS();

describe("someModule actions", () => {

    test("default", () => {
        expect(
            dispatchTest()
        ).toStrictEqual(
            state // check initial state
        );
    });

    test(types.ACTION_TYPE, () => {
        const state = {
            items: ["z"],
        };
        const action = {
            type: types.ACTION_TYPE,
            items: ["a", "b", "c"],
        };

        expect(
            dispatchTest(action, state)
        ).toStrictEqual({
            ...state,
            items: state.items.concat(action.items)
        });
    });

});
```

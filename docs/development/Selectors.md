Redux Selectors
================

```
Selector is a function that knows how to extract a specific piece of data from the store.
```

---------

#### Naming

All selectors file names must have suffix __*.selectors.js__.

```
myModule.selectors.js
```

Common unit selectors file can be placed in directory `src/selectors` or group directory `@group/selectors`.

Containers can have own redux store selectors file and it's recommended to place them in container rootDir with name of container `@group/containers/MyContainer/myContainer.selectors.js`

---------

#### Selector function

How to create selector function:

__1.__ Import section name from actions

```javascript
import { section } from "actions/myModule.actions";
```

__2.__ Create and export selector function

> Selector function accept store plain object as parameter.

> Unit (MyModule) state is immutable, selector must return converted state from immutable.

```javascript
export const mySelector = ({ [section]: e }) => e.toJS();
```

----------

#### Use selector

Use selector via react-redux hook in components

> Official react-redux [docs](https://react-redux.js.org/api/hooks)

```javascript
import { useSelector } from "react-redux";
import * as myModuleSelectors from "selectors/myModule.selectors";

// your code

// ... react component

    const mySelectorState = useSelector(myModuleSelectors.mySelector);

// ... react component
```

Use outside component

> getState function can get from redux-thunk arguments or reducer init function

```javascript
import * as myModuleSelectors from "selectors/myModule.selectors";

// some code

const state = getState();

// some code

const mySelectorState = myModuleSelectors.mySelector(state);
```

------------

#### Selectors with additional params

```
Selector can be a function, that returns a function to get state by additional parameters
```

> Selector function always accepts state, second function can accept any parameter you need.

Example:

```javascript
/**
 * Returns item object by type
 * @param {object} e
 * @returns {{
 *     ... item params
 * }}
 */
export const findItemByType = (e) => (type) => {
	return getItems(e).find((item) => item.type === type) || {};
};
```

----------

## Nested selectors

```
It is the same selectors, but accepts main reducer state as argument, not full redux state.
```

---------

#### Naming

All nested reducers file names must have suffix __*.selectors.js__ and starts with __with__.

```
withMyModule.selectors.js
```

Nested reducers can be only a common unit file and placed in directory `src/selectors/nested` or group directory `@group/selectors/nested`.

---------

#### Create nested selector

> __NOTE!!!__ Always describe return parameters with types.

Example:

```javascript
import { section } from "actions/nested/withMyModule.actions";

/**
 * Returns my module state
 * @param e
 * @returns {{
 *     ... state params
 * }}
 */
export const mySelector = (e) => e.get(section).toJS();
```

------------

#### Use nested selector

Import action helpers, if they need.

 ```javascript
import * as selectorHelpers from "helpers/selectorHelpers";

const ns = selectorHelpers.useNestedSelector(section); // nested selector (ns) - pass state by section to nested selector
 ```

Use in other selectors file example:

```javascript
import * as selectorHelpers from "helpers/selectorHelpers";
import * as myModuleSelectors from "selectors/nested/withMyModule.selectors";
import { section } from "actions/awesomeModule.actions";

const ns = useNestedSelector(section);

// some code

/**
 * Returns my module state
 * @param e
 * @returns {{
 *     ... state params
 * }}
 */
export const myModuleState = ns(myModuleSelectors.mySelector);
```

Use in actions file example:

> Selectors must be called via "useNestedSelector" helper directly or via nestedActionCreatorThunk param "useSelector".

```javascript
import * as selectorHelpers from "helpers/selectorHelpers";
import * as myModuleSelectors from "selectors/nested/withMyModule.selectors";

export const section = "awesomeModule";

// some code

const ns = useNestedSelector(section);

const someAction = (params) => (dispatch, getState) => {
    const state = getState();

    // some code

    const myModuleState = ns(myModuleSelectors.mySelector)(state);

    // some code
};
```

, or it can be used with action helpers

```javascript
import * as actionHelpers from "helpers/actionHelpers";

const nestedActionThunk = actionHelpers.nestedActionCreatorThunk(section);

const someNestedAction = nestedActionThunk((params) => (dispatch, getState, dispatchNested, useNestedSelector) => {
    // some code

    const myModuleState = useNestedSelector(myModuleSelectors.mySelector);

    // some code
});
```

, or if you cannot use nestedActionThunk for some reason and section can be passed as parameter

```javascript
const otherNestedAction = (section, params) => (dispatch, getState) => {
    const ns = useNestedSelector(section);
    // some code

    const myModuleState = useNestedSelector(section)(myModuleSelectors.mySelector);

    // some code
};
```

------------

#### Nested selectors with additional params

> Selector function always accepts reducer state, second function can accept any parameter you need.

Example:

```javascript
/**
 * Returns item object by type
 * @param {Immutable.Map} e
 * @returns {{
 *     ... item params
 * }}
 */
export const findItemByType = (e) => (type) => {
	return getItems(e).find((item) => item.type === type) || {};
};
```

---------
## Tests

See [unit testing](https://confluence.ds.network/display/FW/Unit+Testing) docs.

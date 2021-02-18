Redux Reducer
===========

Official redux [docs](https://redux.js.org/basics/reducers):

```
Reducers specify how the application's state changes in response to actions sent to the store.
```

```
Remember that actions only describe what happened, but don't describe how the application's state changes.
```
---------

#### Naming

All reducer file names must have suffix __*.reducer.js__.

```
myModule.reducer.js
```

Common unit reducer file can be placed in directory `src/reducer` or group directory `@group/reducer`.

Containers can have own redux store reducer file and it's recommended to place them in container rootDir with name of container `@group/containers/MyContainer/myContainer.reducer.js`

---------

#### Create reducer

__1.__ Define and export initial state

State name - __initState__

> State must be [immutable](https://immutable-js.github.io/immutable-js/)
>
> Initial state better to describe as plain object and convert it with immutable.fromJS method

```javascript
export const initState = fromJS({

    // state

});
```

__2.__ Import section and action types

> Section name (reducer key) must be defined in actions file

> For more details, read [actions doc](https://confluence.ds.network/display/FW/Redux+Actions)

```javascript
import * as types from "actions/myModule.actions.js";

// types.section
```

__3.__ Create and export as default __reducer__ function

Function name - __reducer__

> Reducer function must accept params __state__ (with default value __initState__) and action object (action creator result with __type__)

```javascript
/**
 * My Module state reducer
 * @param {Immutable.Map} state
 * @param {{type: string, any: any}} action
 * @returns {Immutable.Map}
 */
export default function reducer(state = initState, { type, ...props }) {
    switch (type) {

        // reducer cases by action types

    }
}
```

__4.__ Create and export initial function

Function name - __init__

> Initial function must inject reducer by section to redux store. Return injectReducer result.

> Define reducer injection here, in reducer file, to exclude additional imports for injection

```javascript
import { store } from "store";

/**
 * Inject My Module reducer
 * @returns {store}
 */
export const init = () => {
    // some other code if need

    return store.injectReducer(types.section, reducer);
};
```

--------

## Nested reducer

It's the same reducer function with initial state, but without initial function and reducer will modify state of another reducer.

As example, if list of products have common state, this state management can be moved into __nested reducer function__ to reduce code duplication.

See examples below to understand _why?_ and _how?_.

---------

#### Naming

All nested reducers file names must have suffix __*.reducer.js__ and starts with __with__.

```
withMyModule.reducer.js
```

Nested reducers can be only a common unit file and placed in directory `src/reducers/nested` or group directory `@group/reducers/nested`.

---------

__1.__ Define and export initial state

> Initial state can be wrapped by section name to isolate nested state

```javascript
export const initState = fromJS({
    [types.section]: {

        // nested reducer state

    }
});
```

__2.__ Import nested section and nested action types

> Section name (reducer key) must be defined in actions file

```javascript
import * as types from "actions/nested/myModule.actions.js";

// types.section
```

__3.__ Create __withReducer__ function

Function name - __with{MyModule}Reducer__

> withReducer function must accept __section__ name and __reducer__ function as params, and returns nested reducer function.
>
> Nested reducer function must accept __state__ (with default value __initState__) and action object (action creator result with __type__) as params.

src/reducers/nested/withMyModule.reducer.js
```javascript
import * as actionHelpers from "helpers/actionHelpers";

/**
 * My Module state reducer
 * @param {string} section
 * @param {function} reducer
 * @returns {function(state: Immutable.Map, action: object): Immutable.Map}
 */
const withMyModuleReducer = (section, reducer) => (state = initState, { type, ...props }) => {
    const ws = actionHelpers.useSection(section);

    switch (type) {
        case ws(types.MY_ACTION): // section + MY_MODULE.MY_ACTION
            return state;

        // other cases

        default:
            return typeof reducer === "function"
                ? reducer(state, { type, ...props }) // pass action to other reducer
                : state;
    }
};

export default withMyModuleReducer;
```

__4.__ Extend other reducer

src/reducers/awesome.reducer.js
```javascript
import * as types from "actions/awesome.actions.js";
import withMyModuleReducer, { initState: myModuleState } from "reducers/nested/withMyModule.reducer";

export const initState = fromJS({

    // some state

}).merge(myModuleState);

/**
 * My Module state reducer extended by withMyModule reducer
 * @param {Immutable.Map} state
 * @param {{type: string, any: any}} action
 * @returns {Immutable.Map}
 */
function reducer(state = initState, { type, ...props }) {
    switch (type) {

        // reducer cases by action types

    }
}

export default withMyModuleReducer(types.section, reducer);
```

---------
## Tests

See [unit testing](https://confluence.ds.network/display/FW/Unit+Testing) docs.

Redux Actions
=============

Official redux [docs](https://redux.js.org/basics/actions):

```
Actions are plain objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants.
```
```
Action creators are exactly that—functions that create actions.
```
---------

#### Naming

All actions file names must have suffix __*.actions.js__.

```
myModule.actions.js
```

Common unit actions file can be placed in directory `src/actions` or group directory `@group/actions`.

Containers can have own redux store actions files and it's recommended to place them in container rootDir with name of container `@group/containers/MyContainer/myContainer.actions.js`

---------

#### Action and Action Creator

How to create action and action creator:

__1.__ __Export__ section (unit) name. It will be used in [reducer](https://confluence.ds.network/display/FW/Redux+Reducer) and [selectors](https://confluence.ds.network/display/FW/Redux+Selectors).

> Section name - is a key, with which reducer will be injected to store

Constant must be named as __section__.

 ```javascript
 export const section = "MY_MODULE";
 ```

__2.__ Import action helpers, if they need.

 ```javascript
import * as actionHelpers from "helpers/actionHelpers";

const ws = actionHelpers.useSection(section); // with section (ws) - concat section name and action type.
 ```

__3.__ Add action type constant and export it for further use in reducer cases:
```javascript
export const SET_MY_ITEMS = ws("SET_MY_ITEMS"); // MY_MODULE:SET_MY_ITEMS
```

> #### _Why?_ not Symbol or something else ... string only
> Read [reducing boilerplate](https://redux.js.org/recipes/reducing-boilerplate)

> #### _Why?_ section and helpers
> To make sure, that your action type is unique and will be easy to identify module while debug.
>
> Just "SET_MY_ITEMS" value can be used in any other action, and you will not know it.

__4.__ Add action creator function and export it to be able to dispatch action:
```javascript
/**
 * Store items array from awesome api response
 * @param {array} items
 * @returns {{type: string, items: array}}
 */
export const setMyItems = (items) => ({
	type: SET_MY_ITEMS,
	items: Array.isArray(items)
		? items
		: []
});
```

> #### _Why?_ check argument types
> To make sure, that reducer will set to store "items" with a correct type of Array and not a String or undefined etc.
>
> For more control, you can use [schema validators](https://ajv.js.org/), to strictly validate data types.

-------

### API in Actions

```
Action with API request - a function that call API method and set response data to store by dispatching other actions.
```
> NOTE! Current example use [redux-thunk](https://www.npmjs.com/package/redux-thunk) module.

> What is API and how to create/use it, see [API docs]().

Example:

```javascript
// dispatch this action
// using redux-thunk you are able to get dispatch and getState functions to use other actions
/**
 * Request to update my items list
 * @param {array} items
 * @returns {function(dispatch: function, getState: function): (Promise)}
 */
export const patchMyItems = (items) => (dispatch, getState) => {
    const state = getState();
    const isSending = myModuleSelectors.isSending(state);

    // as example, get current state to check/update something
    if (isSending) {
        return Promise.reject({
            message: "Items already sending"
        });
    }

    // can disptach action before request
    dispatch(setLoading(true));

    return itemsApi
        .patchItems({
            items,
        })
        .then(({ status, message, data }) => {
            // as example, handle failed request
            if (status === false) {
                return Promise.reject({ message });
            }

            dispatch(setRequestError(""));
            dispatch(setMyItems(data.items));
        })
        .catch(({ message }) => {
            // store request error message. can be used in UI or debug
            dispatch(setRequestError(message));
        })
        .finally(() => {
            dispatch(setLoading(false));
        })
};
```

---------

## Nested Actions and Action creators

It`s same action creators, but, with more complex action type.

Main idea is to add one more prefix (section) to action type. For example:

```javascript
const ws = actionHelpers.useSection("MY_MODULE"); // (section) => (type) => section + type
const naFirst = actionHelpers.useNestedAction("FIRST_PRODUCT") // (section) => (action) => section + action.type
const naSecond = actionHelpers.useNestedAction("SECOND_PRODUCT") // (section) => (action) => section + action.type

const MY_ACTION = ws("MY_ACTION"); // MY_MODULE:MY_ACTION

/**
 * My Action do very important things
 * @returns {{type: string}}
 */
const myActionCreator = () => ({
    type: MY_ACTION
});

dispatch(naFirst(myActionCreator)); // FIRST_PRODUCT:MY_MODULE:MY_ACTION
dispatch(naSecond(myActionCreator)); // SECOND_PRODUCT:MY_MODULE:MY_ACTION
```

That`s why this action called "nested". It can be executed in any other section/module/product.

> Nested Actions are need to dispatch [Nested reducer](https://confluence.ds.network/display/FW/Redux+Reducer).

---------

#### Naming

All nested actions file names must have suffix __*.actions.js__ and starts with __with__.

```
withMyModule.actions.js
```

Nested actions can be only a common unit file and placed in directory `src/actions/nested` or group directory `@group/actions/nested`.

---------

#### How to create nested action and nested action creator:


> Same to previous examples... nothing changed.
>
> __!!! But__, all nested action must be executed via "useNestedSelector" helper.


```javascript
import * as actionHelpers from "helpers/actionHelpers";

const na = actionHelpers.useNestedAction(section); // nested action (na)

// some code

export const setAnotherModuleItems = na(setMyItems);

// some code or other file

dispatch(setAnotherModuleItems(items));

```

### API in Nested Actions

> Selectors must be called via "useNestedSelector" helper directly or via nestedActionCreatorThunk param "useSelector".

> Nested actions must be called via "useNestedAction" helper directly or via nestedActionCreatorThunk param "dispatchNested".

##### nestedActionCreatorThunk example:

```javascript
import * as actionHelpers from "helpers/actionHelpers";

const nestedActionThunk = actionHelpers.nestedActionCreatorThunk(section);

/**
 * Request to update my items list
 * @param {array} items
 * @returns {function(dispatch: function, getState: function, dispatchNested: function, useSelector: function): (Promise)}
 */
export const patchMyItems = nestedActionThunk((items) => (dispatch, getState, dispatchNested, useNestedSelector) => {
    const isSending = useNestedSelector(myModuleSelectors.isSending);

    // as example, get current state to check/update something
    if (isSending) {
        return Promise.reject({
            message: "Items already sending"
        });
    }

    // can disptach action before request
    dispatchNested(setLoading(true));

    return itemsApi
        .patchItems({
            items,
        })
        .then(({ status, message, data }) => {
            // as example, handle failed request
            if (status === false) {
                return Promise.reject({ message });
            }

            dispatchNested(setRequestError(""));
            dispatchNested(setMyItems(data.items));
        })
        .catch(({ message }) => {
            // store request error message. can be used in UI or debug
            dispatchNested(setRequestError(message));
        })
        .finally(() => {
            dispatchNested(setLoading(false));
        })
});
```

---------
## Tests

See [unit testing](https://confluence.ds.network/display/FW/Unit+Testing) docs.

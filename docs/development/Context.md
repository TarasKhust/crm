# React Context
--------------

# React Reducer in Context

### actions.js
```javascript
import { useSection } from "helpers/actionHelpers";

const ws = useSection("MY_MODULE");

export const MY_ACTION = ws("MY_ACTION");

export const myAction = (myState) => ({
    type: MY_ACTION,
    myState,
});
```

### reducer.js
```javascript
import { fromJS } from "immutable";
import * as types from "./actions.js";

export const initState = fromJS({

    myState: 1,

});

function myReducer(state = initState, { type, ...props }) {
    switch (type) {
        case types.MY_ACTION:
            return state.set("myState", props.myState);

        default:
            throw `myReducer action "${type}" is not valid.`;
    }
}

export default myReducer;
```

### store.jsx
```javascript
import React, { createContext, useReducer } from "react";
import * as types from "./actions.js";
import myReducer, { initState } from "./reducer.js";

export const MyContext = createContext(initState);

const MyProvider = ({ children }) => {
    const [state, dispatch] = useReducer(myReducer, initState);

    const value = {
        state: state.toJS(),
        actions: types,
        dispatch,
    };

    return (
        <MyContext.Provider value={state}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
```

### MyContainer.jsx
```javascript
import React, { useContext } from "react";
import MyProvider from "./store";
import MyComponent from "./MyComponent";

const MyContainer = () => {
    return (
        <MyProvider>
            <MyComponent />
        </MyProvider>
    );
};

export default MyContainer;
```

### MyComponent.jsx
```javascript
import React, { useContext } from "react";
import { MyContext } from "./store";

const MyComponent = () => {
    const { state, actions, dispatch } = useContext(MyContext);

    const handleClick = () => {
        dispatch(actions.myAction(++state.myState));
    };

    return (
        <div onClick={handleClick}>
            Look Ma, I`ve got a State: {state.myState}
        </div>
    );
};

export default MyComponent;
```

---------

# React state in Context

### store.jsx
```javascript
import React, { createContext, useState } from "react";

export const initState = {
    myState: 1
};

export const MyContext = createContext(initState);

const MyProvider = ({ children }) => {
    const [state, dispatch] = useState(initState);

    const myAction = (myState) => {
        dispatch({
            myState
        });
    };

    const value = {
        state,
        actions: {
            myAction,
        }
    };

    return (
        <MyContext.Provider value={state}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
```

### MyContainer.jsx
```javascript
import React, { useContext } from "react";
import MyProvider from "./store";
import MyComponent from "./MyComponent";

const MyContainer = () => {
    return (
        <MyProvider>
            <MyComponent />
        </MyProvider>
    );
};

export default MyContainer;
```

### MyComponent.jsx
```javascript
import React, { useContext } from "react";
import { MyContext } from "./store";

const MyComponent = () => {
    const { state, actions } = useContext(MyContext);

    const handleClick = () => {
        actions.myAction(++state.myState);
    };

    return (
        <div onClick={handleClick}>
            Look Ma, I`ve got a State: {state.myState}
        </div>
    );
};

export default MyComponent;
```

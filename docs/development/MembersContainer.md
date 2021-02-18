Members Container setup
--------------

## container structure

```
  containers/
      [contaner name]/
          index.js      - main export file
          styles/       - common styles directory
          store/        - context provider/consumer components
          api/          - specific product requests
          schema/       - response validation for specific product requests
          mocks/        - response mock data for specific product requests
          router/       - product react router files
          hooks/        - common product react hooks
          config/       - any product configuration
          components/   - common/specific product components
          contect/      - product pages/tabs/blocks or any other product content
```

## manage product list setup

### 1. Add new product router constants to.
```javascript
export const MY_PRODUCT_LIST = `/members/my-product/`;
```

### 2. Create router files `index.jsx` and `Manage.jsx`
```
  @members/
      containers/
          [product name]
              router/
                  Manage.jsx
                  index.jsx
```
### 3. Add context Providers to `index` router file.

```javascript
import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import * as routes from "@members/constants/routes";
import Manage from "./Manage";

const ManageProductListProvider = lazy(() => import(/* webpackChunkName: "ManageProductListProvider" */ "@members/store/ManageProductList"));
const UserPaymentsProvider = lazy(() => import(/* webpackChunkName: "UserPaymentsProvider" */ "@members/store/UserPayments"));

const router = () => {
  return (
    <Portal node={container}>
      <Suspense fallback={Fallback}>
        <UserPaymentsProvider>
          <ManageProductListProvider>
            <Switch>
              <Route path={routes.MY_PRODUCT_LIST}>
                <Manage />
              </Route>
            </Switch>
          </ManageProductListProvider>
        </UserPaymentsProvider>
      </Suspense>
    </Portal>
  );
};

export default hot(router);
```





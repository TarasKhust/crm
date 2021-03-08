import React, { useReducer, createContext, useMemo } from "react";
import PropTypes from "prop-types";

import webTokenApiReducer, { initState } from "reducers/webTokenApi.reducer";
import * as webTokenApiActions from "actions/webTokenApi.actions";
import * as webTokenSelectors from "selectors/webTokenApi.selectors";
import { bindReactActionCreators, bindReactSelectors } from "helpers/storeHelpers";

const WebTokenApiContext = createContext({});

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const WebTokenApiProvider = (props) => {
  const {
	children,
  } = props;

  const [state, dispatch] = useReducer(webTokenApiReducer, initState);

  /**
   * @type {webTokenApiActions}
   */
  const actions = bindReactActionCreators(webTokenApiActions, dispatch, state);

  /**
   * @type {webTokenSelectors}
   */
  const selectors = bindReactSelectors(webTokenSelectors, state);

  const value = useMemo(() => ({
	actions,
	selectors,
  }), [actions, selectors]);

  return (
	  <WebTokenApiContext.Provider value={value}>
		{children}
	  </WebTokenApiContext.Provider>
  );
};

WebTokenApiProvider.propTypes = {
  children: PropTypes.any.isRequired,
  preFetch: PropTypes.bool,
};

export {
  WebTokenApiContext,
  WebTokenApiProvider,
};

export default WebTokenApiProvider;

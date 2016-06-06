// export syncHistoryWithStore from './sync'

import syncHistoryWithStore from './sync';
exports.syncHistoryWithStore = syncHistoryWithStore;

// export { LOCATION_CHANGE, routerReducer } from './reducer'

import * as reducer from './reducer';
exports.LOCATION_CHANGE = reducer.LOCATION_CHANGE;
exports.routerReducer = reducer.routerReducer;

// export {
//   CALL_HISTORY_METHOD,
//   push, replace, go, goBack, goForward,
//   routerActions
// } from './actions';

import {
  CALL_HISTORY_METHOD,
  push, replace, go, goBack, goForward,
  routerActions
} from './actions';
exports.CALL_HISTORY_METHOD = CALL_HISTORY_METHOD;
exports.push = push;
exports.replace = replace;
exports.go = go;
exports.goBack = goBack;
exports.goForward = goForward;
exports.routerActions = routerActions;

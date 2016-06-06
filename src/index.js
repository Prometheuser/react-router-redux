export syncHistoryWithStore from './sync'

// export { LOCATION_CHANGE, routerReducer } from './reducer'

import { LOCATION_CHANGE, routerReducer } from './reducer';

module.exports = LOCATION_CHANGE;
module.exports = routerReducer;

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


module.exports = CALL_HISTORY_METHOD;
module.exports = push;
module.exports = replace;
module.exports = go;
module.exports = goBack;
module.exports = goForward;
module.exports = routerActions;

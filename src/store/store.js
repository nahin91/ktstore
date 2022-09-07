import { compose, applyMiddleware, legacy_createStore  as createStore } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// library-helper that runs before the action hits the reducer & logs out our state.
const middleWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)
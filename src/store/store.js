import { compose, applyMiddleware, legacy_createStore  as createStore } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";


// this is curryFunction
const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type){
        return next(action)
    }

    console.log('type: ', action.type)
    console.log('payload: ', action.payload)
    console.log('currentState: ', store.getState())

    next(action)

    console.log('next state: ', store.getState())
}

// library-helper that runs before the action hits the reducer & logs out our state.
// const middleWares = [logger]
const middleWares = [loggerMiddleware]

const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)
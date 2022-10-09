import { compose, applyMiddleware, legacy_createStore as createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'
import logger from "redux-logger";
import thunk from 'redux-thunk'

import { rootReducer } from "./root-reducer";
import { myLoggerMiddleware } from "./middleware/logger";


const persistConfig = {
    key: 'root',
    storage, // short-hand code for [storage: storage]
    blackList: ['user'], // to avoid conflicts with local storage 
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// library-helper that runs before the action hits the reducer & logs out our state.
const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean) // this is to indicate that if we are in the development state then use middleware other wise dont use this code for the production. 

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)
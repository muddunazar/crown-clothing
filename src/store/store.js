import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { logger } from "redux-logger";
import { rootReducer } from './root-reducer';
import thunk from 'redux-thunk';
// configuration object tells redux persist what we want
const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ['user'],
    whitelist: ['cart']

}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleWares = [process.env.NODE_ENV !== 'production' && logger, thunk].filter(Boolean);
// const middleWares = [loggerMiddleware];

//for devtool composed enhancer
const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
// const composedEnhancers = compose(applyMiddleware(...middleWares));
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));


// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);


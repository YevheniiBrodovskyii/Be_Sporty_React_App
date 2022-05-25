import {configureStore, combineReducers} from "@reduxjs/toolkit"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userData from "./userData";
import userName from "./userName";
import loadingStatus from "./loadingStatus";
import errorInfo from "./errorInfo";
import statusMessage from "./statusMessage";

const rootReducer = combineReducers({
    data: userData,
    username: userName,
    loaded: loadingStatus,
    error: errorInfo,
    status: statusMessage
});


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['loaded', 'error', 'status']
}


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export const persistor = persistStore(store);
export default store;
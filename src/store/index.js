import {configureStore, combineReducers} from "@reduxjs/toolkit"
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userData from "./userData";
import loadingStatus from "./loadingStatus";

const rootReducer = combineReducers({
    data: userData,
    loaded: loadingStatus
});


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['loaded']
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
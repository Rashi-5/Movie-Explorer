import { combineReducers, configureStore } from '@reduxjs/toolkit';
import favouriteReducer from "./favourites/favouriteSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

  const reducers = combineReducers({favourites: favouriteReducer});

    const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['favourites'], // Array of reducers to persist
    version: 1, 
    stateReconciler: autoMergeLevel2, // Shallow level persisted objects
  };
  
  const persistedReducer = persistReducer(persistConfig, reducers);
  
const store = configureStore({
  reducer:  persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

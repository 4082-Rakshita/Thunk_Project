import RootReducer from "../RootReducer";
import { configureStore,  } from '@reduxjs/toolkit';
import { persistStore, persistReducer, Storage } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { MMKV } from 'react-native-mmkv';
import { createLogger } from 'redux-logger'; 

const logger = createLogger();

const storage = new MMKV();

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve();
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return Promise.resolve(value ? value : null); 
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
  whitelist: ['AuthSlice'], 
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});


export const persistor = persistStore(store);

  
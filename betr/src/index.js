import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import authReducer from './state';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist"
import storage from "redux-persist/lib/storage";
import { PersistGate} from "redux-persist/integration/react";
import { persistReducer } from 'redu';


const persistConfig = { key: "root", storage, version: 1};
const persistReducer = persistReducer(persistConfig, authReducer);
const store = configStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH,REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);


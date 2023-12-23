import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

import authReducer from "../reducers/authReducer";
import userReducer from "../reducers/userReducer";
import raccolteReducer from "../reducers/raccolteReducer";
import materialiReducer from "../reducers/materialiReducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [
    encryptTransform({
      secretKey: import.meta.env.VITE_REACT_APP_PERSIST_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  raccolte: raccolteReducer,
  materiali: materialiReducer,
  user: userReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);

export default store;

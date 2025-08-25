import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import authReducer from "../features/authSlice";
import templateReducer from "../features/uiSlice";

const persistConfig = {
    key: "root",
    storage,
};



const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authReducer),
        ui: persistReducer(persistConfig, templateReducer),
    },
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export default store;

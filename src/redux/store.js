import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slices/authSlice";
import { adminsApiSlice } from "./slices/adminListSlice";
import { apiSlice } from "./slices/apiSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [adminsApiSlice.reducerPath]: adminsApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        apiSlice.middleware, 
        adminsApiSlice.middleware,
    ]),
    devTools: true
});

export default store;
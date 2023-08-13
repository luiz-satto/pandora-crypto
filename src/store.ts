import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./api/crypto-api";
import { cryptoNewsApi } from "./api/crypto-news-api";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(cryptoApi.middleware)
        .concat(cryptoNewsApi.middleware)
});
import { configureStore } from "@reduxjs/toolkit";
import { withBoomApi } from "../services";

export const store = configureStore({
	reducer: {
		[withBoomApi.reducerPath]: withBoomApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(withBoomApi.middleware),
});

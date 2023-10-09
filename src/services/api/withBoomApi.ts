import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const withBoomApi = createApi({
	reducerPath: "withBoomApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: () => ({}),
});

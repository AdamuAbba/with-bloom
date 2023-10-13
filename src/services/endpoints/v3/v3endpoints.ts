import { withBoomApi } from "../../api";
import { ICoinResponse } from "./types";

const v3endpoints = withBoomApi.injectEndpoints({
	endpoints: (build) => ({
		getCoin: build.query<ICoinResponse, void>({
			query: () => `v3/currency/rate`,
		}),
	}),
});

export const { useGetCoinQuery } = v3endpoints;

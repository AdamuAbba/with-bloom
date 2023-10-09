import { withBoomApi } from "../../api";

const v3endpoints = withBoomApi.injectEndpoints({
	endpoints: (build) => ({
		rate: build.query<any, void>({
			query: () => ({
				url: `v3/currency/rate`,
				method: "GET",
			}),
		}),
	}),
});

export const { useRateQuery } = v3endpoints;

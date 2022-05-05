import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { KEY, CRYPTO_NEWS_API_URL, CRYPTO_NEWS_HOST } from "../config";

const headers = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Host": CRYPTO_NEWS_HOST,
  "X-RapidAPI-Key": KEY,
};

const baseUrl = CRYPTO_NEWS_API_URL;

const createRequest = (url) => ({ url, headers });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
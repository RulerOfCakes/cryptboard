import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_CRYPTO_API_KEY,
};

const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => {
    return {
      getCryptos: builder.query({
        query: (count) => {
          return createRequest(`/coins?limit=${count}`);
        },
      }),
      getCryptoDetails: builder.query({
        query: (coinId) => {
          return createRequest(`/coin/${coinId}`);
        },
      }),
      getCryptoHistory: builder.query({
        query: ({ coinId, timePeriod }) => {
          return createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`);
        },
      }),
    };
  },
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

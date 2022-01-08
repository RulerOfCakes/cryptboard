import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_API_KEY,
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
    };
  },
});

export const { useGetCryptosQuery } = cryptoApi;
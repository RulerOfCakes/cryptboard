import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": process.env.REACT_APP_NEWS_API_KEY,
};
const baseUrl = "https://bing-news-search1.p.rapidapi.com/news";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => {
    return {
      getCryptoNews: builder.query({
        query: ({newsCategory, count}) => {
          return createRequest(
            `/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
          );
        },
      }),
    };
  },
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
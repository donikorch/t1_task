import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getProductsById: build.query({
      query: (productId) => `products/${productId}`,
    }),
    getProducts: build.query({
      query: ({ q, limit, skip }: { q: string; limit: string; skip: string }) =>
        `products/search?q=${q}&limit=${limit}&skip=${skip}`,
    }),
  }),
});

export const { useGetProductsByIdQuery, useGetProductsQuery } = productsApi;

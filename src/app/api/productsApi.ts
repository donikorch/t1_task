import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getProductsById: build.query({
      query: ({ productId, token }) => ({
        url: `auth/products/${productId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }),
    }),
    getProducts: build.query({
      query: ({ q, limit, skip, token }) => ({
        url: `auth/products/search?q=${q}&limit=${limit}&skip=${skip}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useGetProductsByIdQuery, useGetProductsQuery } = productsApi;

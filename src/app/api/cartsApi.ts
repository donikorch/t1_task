import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cartsApi = createApi({
  reducerPath: 'cartsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getCartsByUser: build.query({
      query: (userId) => `carts/user/${userId}`,
    }),
  }),
});

export const { useGetCartsByUserQuery } = cartsApi;

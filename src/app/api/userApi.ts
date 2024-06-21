import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ username, password, expiresInMins }) => ({
        url: 'auth/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          username,
          password,
          expiresInMins,
        },
      }),
    }),
    getCartsByUser: builder.query({
      query: ({ userId, token }) => ({
        url: `auth/carts/user/${userId}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }),
    }),
    getUser: builder.query({
      query: (token) => ({
        url: 'auth/me',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    addToCart: builder.mutation({
      query: ({ cartId, products, token }) => ({
        url: `auth/carts/${cartId}`,
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: {
          merge: true,
          products,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetCartsByUserQuery,
  useGetUserQuery,
  useAddToCartMutation,
} = userApi;

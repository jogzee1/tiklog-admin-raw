import { apiSlice } from "./apiSlice";
const API_URL = '/api/v1';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${API_URL}/sign-in-admin`,
                method: 'POST',
                body: data
            }),
        }),
        logout: builder.mutation({
            query: () => ({
              url: `${API_URL}/user/sign-out`,
              method: 'POST',
            }),
          }),

          /*

          register: builder.mutation({
            query: (data) => ({
              url: `${API_URL}/user`,
              method: 'POST',
              body: data,
            }),
          }),
          updateUser: builder.mutation({
            query: (data) => ({
              url: `${API_URL}/profile`,
              method: 'PUT',
              body: data,
            }),
          }),

          */
    })
})

export const { useLoginMutation, useLogoutMutation, } = usersApiSlice;
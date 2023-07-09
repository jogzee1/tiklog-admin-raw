import { apiSlice } from "./apiSlice";
import {
  createSelector,
  createEntityAdapter
} from '@reduxjs/toolkit'
const API_URL = '/api/v1';



export const customerListApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
  
      getCustomers: builder.query({
        query: () => `${API_URL}/users`,
        providesTags: ['Customer'],
      }),
  
      getCustomer: builder.query({
        query: (id) => ({
          url: `${API_URL}/user/${id}`,
          method: 'POST',
          credentials: 'include',
          
        }),
      }),
  
      addNewCustomer: builder.mutation({
        query: (payload) => ({
          url: `${API_URL}/new-customer`,
          method: 'CUSTOMER',
          body: payload,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }),
        invalidatesTags: ['Customer'],
      }),
      updateCustomer: builder.mutation({
        query: (payload) => {
          console.log(payload)
          const { id, ...body } = payload
          return {
            url: `${API_URL}/update-customer/${id}`,
            method: 'PATCH',
            body,
          }
        },
        invalidatesTags: ['Customer'],
      }),
      deleteCustomer: builder.mutation({
        query: (id) => ({
          url: `${API_URL}/delete-customer/${id}`,
          method: 'DELETE',
          credentials: 'include',
        }),
        invalidatesTags: ['Customer'],
      }),
  
    })
  
  })
  
  export const {  useGetCustomersQuery, useGetCustomerQuery,  useAddNewCustomerMutation, useUpdateCustomerMutation, useDeleteCustomerMutation, } = customerListApiSlice;
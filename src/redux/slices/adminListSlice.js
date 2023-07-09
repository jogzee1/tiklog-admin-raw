import { apiSlice } from "./apiSlice";
import {
  createSelector,
  createEntityAdapter
} from '@reduxjs/toolkit'
const API_URL = '/api/v1';

const adminsAdapter = createEntityAdapter({})

const initialState = adminsAdapter.getInitialState()

export const adminsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      getAdmins: builder.query({
          query: () => `${API_URL}/users`,
          validateStatus: (response, result) => {
              return response.status === 200 && !result.isError
          },
          keepUnusedDataFor: 60,
          transformResponse: responseData => {
              const loadedAdmins = responseData.map(user => {
                  user.id = user._id
                  return user
              });
              return adminsAdapter.setAll(initialState, loadedAdmins)
          },
          providesTags: (result, error, arg) => {
              if (result?.ids) {
                  return [
                      { type: 'User', id: 'LIST' },
                      ...result.ids.map(id => ({ type: 'User', id }))
                  ]
              } else return [{ type: 'User', id: 'LIST' }]
          }
      }),
  }),
})

export const {
  useGetAdminsQuery,
} = adminsApiSlice

// returns the query result object
export const selectAdminsResult = adminsApiSlice.endpoints.getAdmins.select()

// creates memoized selector
const selectAdminsData = createSelector(
  selectAdminsResult,
  adminsResult => adminsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllAdmins,
  selectById: selectAdminById,
  selectIds: selectAdminIds
  // Pass in a selector that returns the users slice of state
} = adminsAdapter.getSelectors(state => selectAdminsData(state) ?? initialState)




/*

export const adminListApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        adminList: builder.mutation({
            query: () => ({
                url: `${API_URL}/users`,
                method: 'GET',
                credentials: 'include',
            }),
        }),

        getAdmin: builder.mutation({
            query: (id) => ({
              url: `${API_URL}/user/${id}`,
              method: 'POST',
              credentials: 'include',
              
            }),
          }),
    

          newAdmin: builder.mutation({
            query: (newAdmin) => ({
              url: `${API_URL}/new-admin`,
              method: 'POST',
              credentials: 'include',
              body: newAdmin,
            }),
          }),
          updateAdmin: builder.mutation({
            query: (id, update_admin) => ({
              url: `${API_URL}/update-admin/${id}`,
              method: 'PATCH',
              body: update_admin,
            }),
          }),

          deleteAdmin: builder.mutation({
            query: (id) => ({
              url: `${API_URL}/delete-admin/${id}`,
              method: 'DELETE',
              credentials: 'include',
            }),
          }),
    })
})

export const {  useGetAdminMutation, useAdminListMutation,  useNewAdminMutation, useUpdateAdminMutation, useDeleteAdminMutation, } = adminListApiSlice;

*/

/*


export const adminListApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAdmins: builder.query({
      query: () => `${API_URL}/users`,
      providesTags: ['Admin'],
    }),

    getAdmin: builder.query({
      query: (id) => ({
        url: `${API_URL}/user/${id}`,
        method: 'POST',
        credentials: 'include',
        
      }),
    }),

    addNewAdmin: builder.mutation({
      query: (payload) => ({
        url: `${API_URL}/new-admin`,
        method: 'ADMIN',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Admin'],
    }),
    updateAdmin: builder.mutation({
      query: (payload) => {
        console.log(payload)
        const { id, ...body } = payload
        return {
          url: `${API_URL}/update-admin/${id}`,
          method: 'PATCH',
          body,
        }
      },
      invalidatesTags: ['Admin'],
    }),
    deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `${API_URL}/delete-admin/${id}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['Admin'],
    }),

  })

})

export const {  useGetAdminsQuery, useGetAdminQuery,  useAddNewAdminMutation, useUpdateAdminMutation, useDeleteAdminMutation, } = adminListApiSlice;

*/
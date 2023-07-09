import { apiSlice } from "./apiSlice";
import {
  createSelector,
  createEntityAdapter
} from '@reduxjs/toolkit'
const API_URL = '/api/v1';

const ridersAdapter = createEntityAdapter({})

const initialState = ridersAdapter.getInitialState()

export const ridersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
      getRiders: builder.query({
          query: () => `${API_URL}/riders`,
          validateStatus: (response, result) => {
              return response.status === 200 && !result.isError
          },
          keepUnusedDataFor: 60,
          transformResponse: responseData => {
              const loadedRiders = responseData.map(user => {
                  rider.id = rider._id
                  return rider
              });
              return ridersAdapter.setAll(initialState, loadedRiders)
          },
          providesTags: (result, error, arg) => {
              if (result?.ids) {
                  return [
                      { type: 'Rider', id: 'LIST' },
                      ...result.ids.map(id => ({ type: 'Rider', id }))
                  ]
              } else return [{ type: 'Rider', id: 'LIST' }]
          }
      }),
  }),
})

export const {
  useGetRidersQuery,
} = ridersApiSlice

// returns the query result object
export const selectRidersResult = ridersApiSlice.endpoints.getRiders.select()

// creates memoized selector
const selectRidersData = createSelector(
  selectRidersResult,
  ridersResult => ridersResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllRiders,
  selectById: selectRiderById,
  selectIds: selectRiderIds
  // Pass in a selector that returns the users slice of state
} = ridersAdapter.getSelectors(state => selectRidersData(state) ?? initialState)


/*

export const riderListApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getRiders: builder.query({
      query: () => `${API_URL}/users`,
      providesTags: ['Rider'],
    }),

    getRider: builder.query({
      query: (id) => ({
        url: `${API_URL}/user/${id}`,
        method: 'POST',
        credentials: 'include',
        
      }),
    }),

    addNewRider: builder.mutation({
      query: (payload) => ({
        url: `${API_URL}/new-rider`,
        method: 'RIDER',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['Rider'],
    }),
    updateRider: builder.mutation({
      query: (payload) => {
        console.log(payload)
        const { id, ...body } = payload
        return {
          url: `${API_URL}/update-rider/${id}`,
          method: 'PATCH',
          body,
        }
      },
      invalidatesTags: ['Rider'],
    }),
    deleteRider: builder.mutation({
      query: (id) => ({
        url: `${API_URL}/delete-rider/${id}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['Rider'],
    }),

  })

})

export const {  useGetRidersQuery, useGetRiderQuery,  useAddNewRiderMutation, useUpdateRiderMutation, useDeleteRiderMutation, } = riderListApiSlice;

*/
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const baseQuery = fetchBaseQuery({baseUrl: `${BACKEND_URL}`});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User', 'admins'],
    endpoints: (builder) => ({})

});
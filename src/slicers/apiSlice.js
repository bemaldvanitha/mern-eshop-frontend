import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// createSlice for normal slice no async

import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL
});

export const apiSlice = createApi({
   baseQuery: baseQuery,
    tagTypes: ['Product', 'Order', 'User'],
    endpoints: (builder) => ({

    })
});
import { USERS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            }),
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}`,
                method: 'POST',
                body: data,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            })
        }),
        profile: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: data
            })
        }),
        getUsers: builder.query({
            query: () => ({
                url: USERS_URL,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            }),
            providesTags: ['User'],
            keepUnusedDataFor: 5,
        }),
        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `${USERS_URL}/${userId}`,
                method: 'DELETE',
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            }),
        }),
        getUserDetails: builder.query({
            query: (id) => ({
                url: `${USERS_URL}/${id}`,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            }),
            keepUnusedDataFor: 5,
        }),
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/${data.userId}`,
                method: 'PUT',
                body: data,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            }),
            invalidatesTags: ['User'],
        }),
    })
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation,
    useProfileMutation, useGetUsersQuery, useDeleteUserMutation,
    useUpdateUserMutation, useGetUserDetailsQuery, } = usersApiSlice;
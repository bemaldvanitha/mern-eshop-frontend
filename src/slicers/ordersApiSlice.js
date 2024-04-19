import {apiSlice} from "./apiSlice";
import {ORDERS_URL, PAYPAL_URL} from "../constants";

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: ORDERS_URL,
                method: 'POST',
                body: { ...order },
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            })
        }),
        getOrderDetails: builder.query({
            query: (orderId) => ({
                url: `${ORDERS_URL}/${orderId}`,
                method: 'GET',
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            }),
            keepUnusedDataFor: 5,
        }),
        payOrder: builder.mutation({
            query: ({ orderId, details }) => ({
                url: `${ORDERS_URL}/${orderId}/pay`,
                method: 'PUT',
                body: { ...details },
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            })
        }),
        getPayPalClientId: builder.query({
            query: () => ({
                url: PAYPAL_URL,
            }),
            keepUnusedDataFor: 5,
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        })
    })
});

export const { useCreateOrderMutation, useGetOrderDetailsQuery,
    usePayOrderMutation, useGetPayPalClientIdQuery } = ordersApiSlice;
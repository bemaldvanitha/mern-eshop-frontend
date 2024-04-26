import {PRODUCTS_URL, UPLOAD_URL} from "../constants";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor: 5,
            providesTags: ['Products']
        }),
        getProductDetails: builder.query({
            query: (id) => ({
                url: `${PRODUCTS_URL}/${id}`
            }),
            keepUnusedDataFor: 5
        }),
        createProduct: builder.mutation({
            query: () => ({
                url: PRODUCTS_URL,
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            }),
            invalidatesTags: ['Product']
        }),
        updateProduct: builder.mutation({
            query: (data) => ({
                url: `${PRODUCTS_URL}/${data.productId}`,
                method: 'PUT',
                body: data,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            }),
            invalidatesTags: ['Products'],
        }),
        uploadProductImage: builder.mutation({
            query: (data) => ({
                url: UPLOAD_URL,
                method: 'POST',
                body: data,
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            })
        }),
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,
                method: 'DELETE',
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            }),
            providesTags: ['Product'],
        }),
    })
});

export const { useGetProductsQuery, useGetProductDetailsQuery,
    useCreateProductMutation, useUpdateProductMutation,
    useUploadProductImageMutation, useDeleteProductMutation
    } = productsApiSlice;
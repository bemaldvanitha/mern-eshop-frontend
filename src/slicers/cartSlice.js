import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('cart') ?
    JSON.parse(localStorage.getItem('cart')) : { cartItems: [],
        shippingAddress: {}, paymentMethod: 'PayPal' }

const addDecimals = (number) => {
    return (Math.round(number * 100) / 100).toFixed(2);
}

const cartSlice = createSlice({
   name: 'cart',
   initialState: initialState,
   reducers: {
       addToCart: (state, action) => {
           const item = action.payload;
           const existItem = state.cartItems.find((x) => x._id === item._id);
           if(existItem){
               state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x);
           }else {
               state.cartItems = [...state.cartItems, item]
           }

           state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) =>
               acc + item.price * item.qty, 0));

           state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10);

           state.taxPrice = addDecimals(Number(0.18 * state.itemsPrice).toFixed(2));

           state.totalPrice = (Number(state.itemsPrice) + Number(state.shippingPrice) +
               Number(state.taxPrice)).toFixed(2);

           localStorage.setItem('cart', JSON.stringify(state));
       },
       removeFromCart: (state, action) => {
           state.cartItems = state.cartItems.filter(x => x._id !== action.payload);

           return localStorage.setItem('cart', JSON.stringify(state));
       },
       saveShippingAddress: (state, action) => {
           state.shippingAddress = action.payload;
           return localStorage.setItem('cart', JSON.stringify(state))
       },
       savePayment: (state, action) => {
           state.paymentMethod = action.payload;
           return localStorage.setItem('cart', JSON.stringify(state));
       },
       clearCartItems: (state, action) => {
           state.cartItems = [];
           return localStorage.setItem('cart', JSON.stringify(state));
       }
   }
});

export const { addToCart,
    removeFromCart, saveShippingAddress,
    savePayment, clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;


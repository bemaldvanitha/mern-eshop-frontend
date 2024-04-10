import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./slicers/apiSlice";
import cartSliceReducer from './slicers/cartSlice';
import authSliceReducer from "./slicers/authSlice";

const store = configureStore({
   reducer: {
      [apiSlice.reducerPath] : apiSlice.reducer,
      cart: cartSliceReducer,
      auth: authSliceReducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware()
       .concat(apiSlice.middleware),
   devTools: true
});

export default store;
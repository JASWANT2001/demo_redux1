import { ProductSlice } from "./Reducers/Product-reducers";
import { configureStore } from "@reduxjs/toolkit";

export const Store = configureStore({
  reducer: {
    app: ProductSlice.reducer,
  },
});



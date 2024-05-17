import { configureStore } from "@reduxjs/toolkit";
import xxx from "./slices/cartSlice";

export const store = configureStore({
  reducer: { xxx },
});

console.log(store);

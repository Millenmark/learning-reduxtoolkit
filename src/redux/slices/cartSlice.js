import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { name: "Apple", price: 10 },
    { name: "Orange", price: 14 },
    { name: "Mango", price: 29 },
    { name: "Grapes", price: 56 },
  ],

  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart = [...state.cart, payload];
      state.total = state.total + payload.price;
    },
    removeFromCart: (state, {payload}) => {
      state.cart = state.cart.filter((i, index) => index !== payload.index)
      state.total = state.total - payload.price
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;

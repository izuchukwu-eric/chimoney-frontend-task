import { createSlice } from "@reduxjs/toolkit";
import { cartState } from "../interface";

// state
const initialState: cartState = {
  items: [],
  totalAmount: 0,
  totalCount: 0,
  addSuccess: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartTotal: (state, action) => {
      let { totalAmount, totalCount } = state.items.reduce(
        (cartTotal: any, cartItem: any) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += amount;
          return cartTotal;
        },
        {
          totalAmount: 0,
          totalCount: 0,
        }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalCount = totalCount;
    },

    setCart: (state, action) => {
      state.items = state.items = [...state.items, action.payload];
      state.addSuccess = true;
    },
    remove: (state, action) => {
      state.items = state.items.filter(
        (item: any) => item.id !== action.payload
      );
    },
    increase: (state, action) => {
      state.items = state.items.map((item: any) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.items = state.items
        .map((item: any) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item: any) => item.amount !== 0);
    },
    clearCart: (state, action) => {
      state.items = [];
    },
    getCartItems: (state) => {
      state.items = [];
    },
  },
});

export const {
  getCartTotal,
  remove,
  increase,
  decrease,
  clearCart,
  getCartItems,
  setCart,
} = cartSlice.actions;

export default cartSlice.reducer;

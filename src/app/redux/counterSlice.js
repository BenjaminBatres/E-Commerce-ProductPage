import { createSlice } from "@reduxjs/toolkit";

const initialState = { totalQuantity: 0 };

export const counterSlice = createSlice({
  name: "counter",
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);

      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    updateCartQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existing = state.items.find(i => i.id === id);
      if (existing) {
        existing.quantity = quantity;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    }

  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, updateCartQuantity } =
  counterSlice.actions;

export default counterSlice.reducer;

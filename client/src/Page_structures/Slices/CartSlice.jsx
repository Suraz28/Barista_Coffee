import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
  cartProducts: JSON.parse(localStorage.getItem('cartProducts')) || [],
};

const saveToLocalStorage = (state) => {
  localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    addToCart(state, action) {
      const existingProductIndex = state.cartProducts.findIndex((product) => product.id === action.payload.id);
      if (existingProductIndex !== -1) {
        const updatedCart = state.cartProducts.map((product, index) => {
          if (index === existingProductIndex) {
            return { ...product, count: product.count + 1 };
          }
          return product;
        });
        state.cartProducts = updatedCart;
      } else {
        state.cartProducts.push({ ...action.payload, count: 1 });
      }
      saveToLocalStorage(state);
    },
    increaseQuantity(state, action) {
      state.cartProducts = state.cartProducts.map((product, index) =>
        index === action.payload ? { ...product, count: product.count + 1 } : product
      );
      saveToLocalStorage(state);
    },
    decreaseQuantity(state, action) {
      state.cartProducts = state.cartProducts.map((product, index) =>
        index === action.payload ? { ...product, count: Math.max(1, product.count - 1) } : product
      );
      saveToLocalStorage(state);
    },
    removeFromCart(state, action) {
      state.cartProducts = state.cartProducts.filter((product, index) => index !== action.payload);
      saveToLocalStorage(state);
    },
  },
});

export const { setInputValue, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = productSlice.actions;
export default productSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../Slices/CartSlice";

export default configureStore({
    reducer: {
        products: productsReducer,
    },
});
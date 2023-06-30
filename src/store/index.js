import { configureStore } from "@reduxjs/toolkit";
import productsG from './slices/Products.slice.js';
import cart from './slices/cart.slice'
export default configureStore({
    reducer: {
        productsG,
        cart
    }
})
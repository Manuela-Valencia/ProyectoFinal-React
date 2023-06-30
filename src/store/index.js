import { configureStore } from "@reduxjs/toolkit";
import productsG from './slices/products.slice';
import cart from './slices/cart.slice'
export default configureStore({
    reducer: {
        productsG,
        cart
    }
})
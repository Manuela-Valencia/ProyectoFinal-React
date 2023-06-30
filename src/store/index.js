import { configureStore } from "@reduxjs/toolkit";
import productsG from '../store/slices/Products.slice';
import cart from './slices/cart.slice'
export default configureStore({
    reducer: {
        productsG,
        cart
    }
})
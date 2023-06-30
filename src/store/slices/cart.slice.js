import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../utils/getConfigAuth";


const cart = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        // setter
        setCartG: (state, actions) => actions.payload,

        // agregar producto
        addProductCartG: (state, actions) => [...state, actions.payload],

        // eliminar producto
        removeProductCartG: (state, actions) =>
            state.filter((item) => item.id !== actions.payload),

        // update producto
    },
});

export const { setCartG, addProductCartG, removeProductCartG } = cart.actions;

export default cart.reducer;

const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";

// THUNKS
export const getCartThunk = () => (dispatch) => {
    axios
        .get(baseUrl, getConfigAuth())
        .then((res) => dispatch(setCartG(res.data)))
        .catch((err) => console.log(err));
};

// Agregar product
export const postCartThunk =
    (prod, quantity = 1) =>
    (dispatch) => {
        const data = {
            quantity: quantity,
            productId: prod.id,
        };

        axios
            .post(baseUrl, data, getConfigAuth())
            .then((res) => {
                const obj = {
                    ...res.data,
                    product: prod,
                };
                dispatch(addProductCartG(obj));
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Este producto ya fue agregado",
                });
                console.log(err);
            });
    };

// Delete

export const deleteCartThunk = (id) => (dispatch) => {
    const url = `${baseUrl}/${id}`;

    axios
        .delete(url, getConfigAuth())
        .then((res) => {
            Swal.fire({
                icon: "warning",
                title: "Eliminar producto",
                text: "¿Estás seguro de que deseas eliminar este producto?",
                showCancelButton: true,
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(removeProductCartG(id));
                }
            });
        })
        .catch((err) => console.log(err));
};
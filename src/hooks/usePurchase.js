import axios from "axios"
import getConfigAuth from "../utils/getConfigAuth"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setCartG } from "../store/slices/cart.slice"

const usePurchase = () => {

    const [purchases, setPurchases] = useState()
    const dispatch = useDispatch()
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'

    const getAllPurchases = () => {
        axios.get(url, getConfigAuth())
            .then(res => setPurchases(res.data))
            .catch(err => console.log(err))
    }

    const makePurchase = () => {
        axios.post(url,{},getConfigAuth())
            .then(res => dispatch(setCartG([]))
            )
            .catch(err => console.log(err))
    }

    return { purchases, getAllPurchases, makePurchase }
}

export default usePurchase
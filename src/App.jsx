import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsThunk } from "./store/slices/Products.slice";
import ProductIdPage from "./pages/ProductIdPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/shared/Header";
import CartPage from "./pages/CartPage";
import { getCartThunk } from "./store/slices/cart.slice";
import PurchasePage from "./pages/PurchasePage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import User from "./pages/User";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsThunk());
        dispatch(getCartThunk());
    }, []);

    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<ProductIdPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />

                <Route element={<ProtectedRoutes/>}>
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/purchases' element={<PurchasePage />} />
                    <Route path='/user' element={<User/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
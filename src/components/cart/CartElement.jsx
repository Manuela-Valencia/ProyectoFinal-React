import React from "react";
import { useDispatch } from "react-redux";
import { deleteCartThunk } from "../../store/slices/cart.slice";
import './style/cartElement.css'
import { useNavigate } from "react-router-dom";


const CartElement = ({ prodCart }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteCartThunk(prodCart.id))
    }

    const handleNavigateProduct = () => {
    navigate(`/product/${prodCart.productId}`);
}

    return (
        <article className="cart">
            <header className="cart__img-contenedor">
                <img
                    className="cart__img"
                    src={ prodCart.product.images[0].url }
                    alt={ prodCart.product.brand }
                />
            </header>
            <section className="cart__body">
                <div className="cart__description-contenedor">
                    <h3 className="cart__titulo">{ prodCart.product.title }</h3>
                    <h4 className="cart__brand">{ prodCart.product.brand }</h4>
                    <p className="cart__description">
                        <span>
                            for more information about the product
                        </span>
                        <span onClick={handleNavigateProduct} className="cart__description-icon">
                            <i className="pointer fi fi-rs-arrow-up-right-from-square"></i>
                        </span>
                    
                    </p>
                </div>
                <ul className="cart__datos">
                    <li className="cart__datos-li">
                        <span className="cart__price">Quantity: </span>
                        <span className="cart__quantity-value">{prodCart.quantity}</span>
                    </li>
                    <li className="price">
                        <span className="cart__price">Price: </span> 
                        <span className="cart__price-value">$ {prodCart.product.price}</span>
                    </li>
                    <li className="cart__subTotal">
                        <span className="cart__subTotal-value">$</span>{prodCart.quantity * prodCart.product.price}
                    </li>
                </ul>
            </section>
            <footer className="cart__contenedor-btn">
                <button className="cart__btn" onClick={handleDelete}>
                    <i className="fi fi-rs-cross"></i>
                </button>
            </footer>
        </article>
    );
};

export default CartElement;
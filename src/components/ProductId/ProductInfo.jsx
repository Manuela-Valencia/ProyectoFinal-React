import { useState } from "react";
import './style/productInf.css'
import { useDispatch } from "react-redux";
import { postCartThunk } from "../../store/slices/cart.slice";
import { useNavigate } from "react-router-dom";

const ProductInf = ({ product }) => {

	const navigate = useNavigate()

	// Cantidad De productos Elegidos por el usuario 
	const [quantity, setQuantity] = useState(1)

	const dispatch = useDispatch()

	const handleMinusProduct = () => {
		quantity - 1 >= 1 ? setQuantity(quantity - 1) : quantity
	}
	const handleAddProduct = () => {
		setQuantity(quantity + 1)
	}

	const handleCart = (e) => {
		if (localStorage.getItem('user')) {
			
			dispatch(postCartThunk(product, quantity));
		} else {
			navigate('/login')
		}
    };

    return (
        <article className="productId__contenedor">
            <h3 className="productId__subtitulo">{product?.brand}</h3>
			<h2 className="productId__titulo">{product?.title}</h2>
			<div className="productId__data">
				<p className="productId__descripcion">{product?.description}</p>
				<footer className="productId__footer">
					<ul className="productId__footer--list">
						<li className="productId__contenedor--price">
							<span className="productId__label">Price </span>
							<span className="productId__price">$ {product?.price}</span>
						</li>
						<li>
							<span className="productId__quantity--text productId__label">Quantity </span>
							<div className="productId__quantity--contenedor">
								<div className="productId__btn" onClick={handleMinusProduct}>
									<i className="fi fi-rs-minuss"></i> -
								</div>
								<div className="productId__quantity"> {quantity} </div>
								<div className="productId__btn" onClick={handleAddProduct}> 
								<i className="fi fi-rs-plus"></i> +
								</div>
							</div>
						</li>
					</ul>
					<button onClick={handleCart} className="add-to-card-button">Add to cart <i className='bx bx-cart'></i></button>
				</footer>
			</div>
        </article>
    );
};

export default ProductInf;
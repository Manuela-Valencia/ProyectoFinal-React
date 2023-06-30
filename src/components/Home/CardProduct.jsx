import { useNavigate } from "react-router-dom";
import "./styles/cardproduct.css";
import { postCartThunk } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";
const CardProduct = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigateDetail = () => {
        navigate(`/product/${product.id}`);
    };

    const handleCart = (e) => {
        e.stopPropagation();
        if (localStorage.getItem('user')) {
            dispatch(postCartThunk(product,1,navigate));
        } else {
            navigate('/login')
        }
    };
    return (
        <article className='product slide-top' onClick={handleNavigateDetail}>
            <header className='product__header'>
                <div className='product__img-container'>
                    <img
                        className='product__img '
                        src={product.images[0].url}
                        alt={product.title}
                    />
                </div>
                <div className='product__img-container'>
                    <img
                        className='product__img '
                        src={product.images[1].url}
                        alt={product.title}
                    />
                </div>
            </header>
            <section className='product__body'>
                <header className='product__tittle'>
                    <h3 className='product__brand'>{product.brand}</h3>
                    <h2 className='product__name'>{product.title}</h2>
                </header>
                <div>
                    <span className='product__price'>Price</span>
                    <h3 className='product__price-value'>{`$${product.price}`}</h3>
                </div>
                <button className='product__btn' onClick={handleCart}>
                    <i className="fi fi-rs-shopping-cart"></i> +
                </button>
            </section>
        </article>
    );
};

export default CardProduct;
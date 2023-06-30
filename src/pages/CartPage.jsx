import { useSelector } from "react-redux";
import CartElement from "../components/cart/CartElement";
import "../components/cart/style/contenedorCart.css";
import { Link } from "react-router-dom";
import usePurchase from "../hooks/usePurchase";


const CartPage = () => {
    const cart = useSelector((states) => states.cart);

    const totalPrice = cart.reduce((acc, prod) => {
        const subTotal = prod.quantity * prod.product.price;
        return acc + subTotal;
    }, 0);

    const totalQuantity = cart.reduce((acc, prod) => {
        return acc + prod.quantity;
    }, 0);

    const { makePurchase } = usePurchase();

    const handleCompra = () => {
        makePurchase();
        Swal.fire({
            icon: 'success',
            title: 'Thank you for your purchase!',
            text: "Successful purchase! Enjoy your new product.",
        });
    };

    return (
        <>
            <section className='cart__contenedor'>
                <header className='cart__contenedor-header'>
                    <div className='yourCart'>
                        <h2 className='cart__contenedor-titulo'>Your Cart</h2>
                        <p className='cart__contenedor-total'>
                            <span>{totalQuantity}</span> <span>items</span>
                        </p>
                    </div>
                    <div className='yourCart'>
                        <p className='cart_contenedor-total--titulo'>Total :</p>
                        <strong className='cart__contenedor-total--value'>
                            {" "}
                            <span className='youCart__dolar'>$</span>{" "}
                            {totalPrice}
                        </strong>
                    </div>
                </header>
                <div className='yourCart__body'>
                    {cart.map((prod) => (
                        <CartElement key={prod.id} prodCart={prod} />
                    ))}
                </div>
            </section>
            <footer className='cart__contenedor-footer'>
                <div className='cart__contenedor-footer--home'>
                    <Link className='cursor' to={"/"}>
                        <div className='cart__contenedor-footer--volver'>
                            <i className=' iconFooter fi fi-rs-angle-double-small-left'></i>
                            <p>Continue shopping</p>
                        </div>
                    </Link>
                </div>
                <div className='cart__contenedor-footer--buy'>
                    <button onClick={handleCompra} className='boton__buy'>
                        Proceed to checkout
                    </button>
                </div>
            </footer>
        </>
    );
};

export default CartPage;
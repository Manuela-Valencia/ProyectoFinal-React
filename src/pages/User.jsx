import { Link, useNavigate } from "react-router-dom";
import "../components/User/user.css";

const User = () => {
    const navigate = useNavigate();
    const datosUser = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <>
            <section className='user__contenedor'>
                <div className='user'>
                    <header className='user__logo'>
                        <i className='fi fi-tr-circle-user'></i>
                    </header>
                    <article className='user__name'>
                        <h3>
                            {datosUser.firstName} {datosUser.lastName}
                        </h3>
                    </article>
                    <footer>
                        <button className='user__btn' onClick={logout}>
                            <span>log out</span>
                            <i className='fi fi-rs-exit'></i>
                        </button>
                    </footer>
                </div>
            </section>
                <div className='cart__contenedor-footer--home volverHome'>
                    <Link className='cursor' to={"/"}>
                        <div className='cart__contenedor-footer--volver'>
                            <i className=' iconFooter fi fi-rs-angle-double-small-left'></i>
                            <p>Continue shopping</p>
                        </div>
                    </Link>
                </div>
        </>
    );
};

export default User;
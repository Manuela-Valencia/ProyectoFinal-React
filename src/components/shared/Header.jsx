import { Link } from "react-router-dom";
import './style/header.css'
const Header = () => {
    return (
        <header className="header">
            <h1 className="header__title tracking-in-expand">
                <Link to={'/'} >e-commerce</Link>
            </h1>
            <nav className="header__nav">
                <ul className="header__nav-menu">
                    <li className="header__name-menu--link">
                        {
                            localStorage.getItem('token') 
                            ? (
                                <Link to={'/user'}>
                                    <i className="fi fi-rs-user"></i>
                                </Link>)
                            : (<Link to={'/login'}>
                                <i className="fi fi-rs-user"></i>
                                </Link>
                            )
                        }
                    </li>
                    <li className="header__name-menu--link">
                        <Link to={'/purchases'}>
                            <i className="fi fi-rs-box"></i>
                        </Link>
                    </li>
                    <li className="header__name-menu--link">
                        <Link to={'/cart'}>
                            <i className="fi fi-rs-shopping-cart"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
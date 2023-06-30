import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import '../components/login/style/login.css'
import '../components/Register/register.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const LoginPage = () => {

    const [errorMessage, setErrorMessage] = useState('')

    // capturador de form
    const {register, handleSubmit} = useForm()
    
    const { loginUser } = useAuth()

    const navigate = useNavigate()

    const submit = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        loginUser(url, data)
            .then(res => navigate('/user'))
            .catch(err => setErrorMessage("The email you entered isn’t connected to an account"))
    }

    const handleRegister = () => {
        navigate('/register')
    }

    return (
        <div className="register">
            <form className="register__form" onSubmit={handleSubmit(submit)}>
                <div>
                    <h2 className="login__title">Welcome! Enter Your email and password to continue</h2>
                    <h6 style={{color:'var(--blue-100)'}}>You have to log in to add products to your cart</h6>
                </div>
                <div className="login__test">
                    <h3 className="login__test-titulo">Test data</h3>
                    <ul className="login__test-data">
                        <li className="login__test-value">
                            <i className='bx bx-envelope'></i>
                            <span>erickearl@gmail.com</span>
                        </li>
                        <li className="login__test-value">
                            <i className='bx bx-lock-alt'></i>
                            <span>1234</span>
                        </li>
                    </ul>
                </div>
                <div className="register__form-date">
                    <label htmlFor='email'>Email</label>
                    <input {...register('email')} type='email' id='email' />
                </div>
                <div className="register__form-date">
                    <label className="login__label" htmlFor='password'>Password</label>
                    <input className="login__input" {...register('password')} type='password' id='password' />
                </div>
                <button className="register__btn">Login</button>
                <div className="register__message ">
                    <p className="register__login-message">Don't have an account?
                    <span onClick={handleRegister}> Sign up</span> </p>
                </div>
                    <span style={{color: 'var(--color-red)', fontSize: '10px', marginTop: '-1.2em', fontWeight: 'bold'}}>{errorMessage}</span> 
                
            </form>
        </div>
    );
};

export default LoginPage;
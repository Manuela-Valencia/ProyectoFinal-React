import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import '../components/Register/register.css'
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {

    const navigate = useNavigate()

    const {createUser} = useAuth()

    const {register, handleSubmit, reset} = useForm()
    
    const submit = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        createUser(url, data)
        reset({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: ''
        })
    }

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <div className="register">
            <form className="register__form" onSubmit={handleSubmit(submit)}>
                <h2 className="register__form-titulo">Sign Up</h2>
                <div className="register__form-date">
                    <label htmlFor='email'>Email</label>
                    <input {...register('email')}  type='email' id="email"/>
                </div>
                <div className="register__form-date">
                    <label htmlFor='firstName'>First name</label>
                    <input {...register('firstName')}  type='text' id="firstName"/>
                </div>
                <div className="register__form-date">
                    <label htmlFor='lastName'>LastName</label>
                    <input  {...register('lastName')} type='text' id="lastName"/>
                </div>
                <div className="register__form-date">
                    <label htmlFor='password'>Password</label>
                    <input {...register('password')} type='password' id="password"/>
                </div>
                <div className="register__form-date">
                    <label htmlFor='phone'>Phone <span>( 10 characters )</span></label>
                    <input {...register('phone')} type='text' id="phone"/>
                </div>
                <button className="register__btn">Sign Up</button>

                <div className="register__message ">
                    <p className="register__login-message">Alredy have an account? 
                    <span onClick={handleLogin}> Log in</span> </p> 
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
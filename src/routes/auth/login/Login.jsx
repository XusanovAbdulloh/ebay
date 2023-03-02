import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { auth, provider } from '../../../firebase/firebaseconfig';

const Login = () => {
    const createAccountWithGoogle = () => {
        auth.signInWithPopup(provider)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
    return (
        <div className='login-container'>
            <img width={100} src="https://pngimg.com/uploads/ebay/ebay_PNG22.png" alt="" />
            <div className="login-items">
                <div className="login-wrapper">
                    <h1 className='login__h1'>Hello</h1>
                    <Link to="/auth/create"><p className='login__create-link'>Create account</p></Link>
                    <form className='formmm'>
                        <input className='login-in' type="text" placeholder='   Email or username' required />
                        <p className='login-texxt'>Created your account with a mobile number?</p>
                        <p className='login-text2'>Sign in with mobile</p>
                        <button className='login-sb-btn' type='submit'>Continue</button>
                    </form>
                </div>
                <div className="btns-box">
                    <button onClick={createAccountWithGoogle}  className='login-googleeee'><FcGoogle />  Continue with Google</button>
                    <p className='btns-box__p'><BsFillCheckSquareFill/>  Stay signed in</p>
                    <p className='btns-box__p2'>Using a public or shared device?</p>
                    <p className='btns-box__p3'>Uncheck to protect your account.</p>
                    <a className='btns-box__link' href="/">Learn More</a>
                </div>
            </div>
        </div>
    );
}

export default Login;

import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((e) => alert(e.message));
    }
    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            })
            .catch((e) => alert(e.message));
    }
    return (

        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/1200px-Amazon.com-Logo.svg.png" alt="" className="login__logo" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                    <button onClick={login} className="login__signInButton" type="submit">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, out Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="login_registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

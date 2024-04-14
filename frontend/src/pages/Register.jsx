import React, { useState, useEffect } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../context/authContext/auth';
import { useAuth } from '../context/authContext';
// User will login

const Register = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true)
            await doSignInWithEmailAndPassword(email, password)
        }
    }
    const onGoogleSignIn = (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn()
        }
    }
    
    const handleSubmit = (email, pass) => {
        //reqres registered sample user
        const loginPayload = {
          email: 'eve.holt@reqres.in',
          password: 'cityslicka'
        }

    return (
        <div>
            {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
            <div>
                <h1>Weather IO</h1>
                <p>Login to be able to access the ultimate weather application you have ever used  </p>
            </div>
            <div>
                <form 
                    onSubmit={onSubmit}>
                    <h2>Login</h2>
                    <br/>
                    <label>Username</label>
                    <input></input>
                    <label>Password</label>
                    <input></input>
                    <br/>
                    <button>Sign In</button>
                    <button>Register</button>
                </form>
            </div>

        </div>
    );
};

};



export default Register
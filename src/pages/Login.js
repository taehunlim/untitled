import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import "./login.scss";

const Login = () => {

    const [userInput, setUserInput] = useState({
        email : "",
        password : "",
        emailError : null,
        passwordError: null,
        validationError: null
    });

    const onChange = e => {

    }

    const onsubmit = e => {
        e.preventDefault()
    }

    return (
        <div className="Login">
            <div className="mainRow flexJustifyCenter">
                <div className="login">
                    <div className="loginBox">
                        <h3 className="txtUpper">Sign in to your account</h3>
                        <h5>
                            If you already have a Rimowa account, please sign in. We'll use
                            your existing details for a speedier checkout.
                        </h5>
                        <form
                            className="signInForm flexColumnCenter"
                            onSubmit={onsubmit}
                        >
                            <p className="showError">{userInput.validationError}</p>
                            <div className="inputWrapper">
                                <input
                                    type="email"
                                    placeholder="email address"
                                    name="email"
                                    value={userInput.email}
                                    onChange={onChange}
                                />
                                <p className="showError"> {userInput.emailError} </p>
                            </div>

                            <div className="inputWrapper">
                                <input
                                    type="password"
                                    placeholder="password"
                                    name="password"
                                    value={userInput.password}
                                    onChange={onChange}
                                />
                                <p className="showError"> {userInput.passwordError} </p>
                            </div>

                            <button>
                                Sign In
                            </button>
                        </form>
                        <p className="txtUpper">
                            <Link to="/">
                                Forgot your password
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="signup">
                    <div className="signupBox">
                        <h3 className="txtUpper">Don't have an account?</h3>
                        <h5>Creating a RIMOWA account lets you:</h5>
                        <ul className="pitchLine">
                            <li>ADD ITEMS TO YOUR WISHLIST</li>
                            <li>GET PERSONALISED RECOMMENDATIONS</li>
                            <li>CHECK OUT MORE QUICKLY</li>
                            <li>TRACK YOUR ORDERS</li>
                            <li>REGISTER MY RIMOWA</li>
                        </ul>
                        <form action="" className="signUpBtn">
                            <button>Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

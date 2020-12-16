import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import "./register.scss"

const Register = () => {

    const [userInput, setUserInput] = useState({
        fname: "",
        lname: "",
        email: "",
        password1: "",
        password2: "",
        pwtype: "password",
        visibility: "show",
        personalData: "false",
        privacy: false,
        fnameError: null,
        lnameError: null,
        emailError: null,
        password1Error: null,
        password2Error: null,

        // name: "",
        // email: "",
        // password: "",
        // nameError: null,
        // emailError: null,
        // passwordError: null,
        // validationError: null
    })

    const onChange = text => e => {
        setUserInput({...userInput, [e.target.name]: e.target.value})

        console.log(userInput)
    }

    const onSubmit = e => {
        e.preventDefault()

        console.log(userInput)
    }

    const handlePersonalData = e => {

    }

    const handlePrivacy = e => {

    }

    const handlePassword = () => {
        if( userInput.pwtype === "password") {
            setUserInput({...userInput, pwtype: "text", visibility: "hide"})
        }
        else {
            setUserInput({...userInput, pwtype: "password", visibility: "show"})
        }
    }

    return (
        <div className="Login">
            <div className="mainRow flexJustifyCenter">
                <div className="signup">
                    <h3 className="txtUpper center">Create a Rimowa Account</h3>
                    <form
                        className="signInForm flexColumnCenter"
                        onSubmit={onSubmit}
                    >
                        <div className="inputWrapper flex">
                            <div className="left"></div>
                            <div className="right">
                                <input
                                    type="text"
                                    name="fname"
                                    placeholder="First Name*"
                                    value={userInput.fname}
                                    onChange={onChange(userInput.fname)}
                                />
                                <p className="showError center">{userInput.fnameError}</p>
                            </div>
                        </div>
                        <div className="inputWrapper">
                            <input
                                type="text"
                                name="lname"
                                placeholder="Last Name"
                                value={userInput.lname}
                                onChange={onChange(userInput.lname)}
                            />
                            <p className="showError center">{userInput.lnameError}</p>
                        </div>
                        <div className="inputWrapper">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email Address*"
                                value={userInput.email}
                                onChange={onChange(userInput.email)}
                            />
                            <p className="showError center">{userInput.emailError}</p>
                        </div>
                        <div className="inputWrapper">
                            <input
                                type={userInput.pwtype}
                                name="password1"
                                placeholder="Password*"
                                value={userInput.password1}
                                onChange={onChange(userInput.password1)}
                            />
                            <span className="togglePW" onClick={handlePassword}>
                              {userInput.visibility}
                            </span>
                            <p className="showError center">{userInput.password1Error}</p>
                            <p className="passwordreq center">
                                The password must contain at least 8 characters including 1
                                number, 1 upper and 1 lower case letter
                            </p>
                        </div>
                        <div className="inputWrapper">
                            <input
                                type="password"
                                name="password2"
                                placeholder="Confirm Password*"
                                value={userInput.password2}
                                onChange={onChange(userInput.password2)}
                            />
                            <p className="showError center">{userInput.password2Error}</p>
                        </div>
                        <div className="checkWrapper flex">
                            <div className="left">
                                <input
                                    type="checkbox"
                                    checked={userInput.personalData}
                                    onChange={handlePersonalData}
                                />
                            </div>
                            <div className="right">
                                <p>
                                    I consent to RIMOWA processing my personal data in order to
                                    send personalised marketing material in accordance with the
                                    consent form and the privacy policy.
                                </p>
                            </div>
                        </div>
                        <div className="checkWrapper flex">
                            <div className="left">
                                <input
                                    type="checkbox"
                                    checked={userInput.privacy}
                                    onChange={handlePrivacy}
                                />
                            </div>
                            <div className="right">
                                By clicking "create account", I consent to the privacy policy.
                            </div>
                        </div>
                        <button type="submit">Create Account</button>
                    </form>
                    <div className="caption center">
                        <p>By creating an account, you agree to our:</p>{" "}
                        <p>
                            <Link to="">TERMS OF CONDITIONS</Link> |
                            <Link to="">PRIVACY POLICY</Link>
                        </p>
                    </div>
                    <div className="signin center">
                        <p>
                            <Link to="">ALREADY HAVE AN ACCOUNT?</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;

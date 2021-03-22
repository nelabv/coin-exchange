import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Styled from '../styling/LoginSection.styled';

export default function LoginSection(props) {
    const [errorMsg, setErrorMsg] = useState('');
    const [errorMsg2, setErrorMsg2] = useState('');

    const getUserInput = () => { 
        // Checks if user input is a valid email structure (example@someemail.com)
        var emailCheck= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        var emailInput = document.getElementById('email-input').value;
        var password = document.getElementById('password').value;

        if (emailInput === '') {
            setErrorMsg("Please enter an email.");
        } else { 
            const checkEmailValidity = emailCheck.test(emailInput);
            if (checkEmailValidity === false) {
                setErrorMsg("Please enter a valid email address.")
            } else { 
                setErrorMsg("");
            }
        }
        if (password === '') {
            setErrorMsg2("Please enter your password.");
        } else { 
                setErrorMsg2("");
        }
    }

    return (
        <div>
            <Styled.H1>Welcome back!</Styled.H1>
            <p>Please check that you are visiting the correct URL.</p>
            <input autoFocus id="email-input" type="email" placeholder="Email address" /> <br />
            <p>{errorMsg}</p>
            <input id="password" type="text" placeholder="Password" /> <br />
            <p>{errorMsg2}</p>
            <button onClick={getUserInput}>Login</button>
            <Link to='./signup'>
                <p>Free registration</p>
            </Link>
        </div>
    )
} 
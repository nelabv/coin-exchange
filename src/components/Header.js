import React, { useState } from 'react';
import Styled from '../styling/Header.styled';

export default function HeaderDesign(props) {
    const [errorMsg, setErrorMsg] = useState('');
    
    const getUserInput = () => { 
        // Checks if user input is a valid email structure (example@someemail.com)
        // ADD THIS TO LOGIN/SIGNUP PAGE
        const emailCheck= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        const emailInput = document.getElementById('email-input').value;

        if (emailInput === '') {
            setErrorMsg("Please enter an email.");
        } else { 
            const checkEmailValidity = emailCheck.test(emailInput);
            if (checkEmailValidity === false) { 
                setErrorMsg("Please enter a valid email address.")
            } 
        }
    }

    return (
        <Styled.BackgroundDiv>
            <Styled.TextDiv>
                <Styled.H1>Buy and sell cryptocurrency</Styled.H1>
                <Styled.H2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</Styled.H2>
            </Styled.TextDiv>
        </Styled.BackgroundDiv>
    )
} 
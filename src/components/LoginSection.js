import React, { useState } from 'react';
import Styled from '../styling/LoginSection.styled';
import WarningMsg from './WarningMessage';

export default function LoginSection(props) {
    const [emailErrorMsg, setEmailErrorMsg] = useState('');
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('');

   const getUserInput = () => { 
        // Checks if user input is a valid email structure (example@someemail.com)
        var emailCheck= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        var emailInput = document.getElementById('email-input').value;
        var password = document.getElementById('password').value;

        if (emailInput === '') {
            setEmailErrorMsg("Please enter an email.");
        } else { 
            const checkEmailValidity = emailCheck.test(emailInput);
            if (checkEmailValidity === false) {
                setEmailErrorMsg("Please enter a valid email address.")
            } else { 
                setEmailErrorMsg("");
            }
        }
        if (password === '') {
            setPasswordErrorMsg("Please enter your password.");
        } else { 
            setPasswordErrorMsg("");
        }
    }

    return (
        <Styled.MainContainer>
            <WarningMsg/>

            <Styled.SecondaryContainer>
                <Styled.UserIcon size="80"/>
                <Styled.H1>Welcome back!</Styled.H1>
                <Styled.Subheading>Please check that you are visiting the correct URL.</Styled.Subheading>

                <Styled.Form>
                    <Styled.InputHolder>
                        <Styled.Input autoFocus id="email-input"
                                type="email"
                                placeholder="Email address"
                                required/>
                        <br/>
                        <Styled.ErrorMsg>{emailErrorMsg}</Styled.ErrorMsg>
                    </Styled.InputHolder>
                    <Styled.InputHolder>
                        <Styled.Input id="password"
                                type="password"
                                placeholder="Password"
                                required=""/>
                        <br/>
                        <Styled.ErrorMsg>{passwordErrorMsg}</Styled.ErrorMsg>
                    </Styled.InputHolder>

                    <Styled.ButtonHolder>
                        <Styled.Button type="button" onClick={getUserInput} value="Login"/>

                        <Styled.Links to='./signup'>
                            Free registration
                        </Styled.Links>
                    </Styled.ButtonHolder>
                </Styled.Form>
            </Styled.SecondaryContainer>
        </Styled.MainContainer>
    )
} 
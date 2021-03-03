import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { STYLEGUIDE } from '../StyleGuide';

const AccountDetailsDiv = styled.ul `
    display: flex;
    justify-content: flex-end;
    order: 2;
    width: 50%;
    height: 100%;
`;

const Div = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25%;
`;

const Login = styled.a `
    order: 1;
    &: hover {
        animation: hover-animation 200s infinite alternate ease-in-out;
    }
    @keyframes hover-animation {
        0% {
            border-color: white;
            padding-bottom: 0;
          }
          0.2% {
            border-bottom: 3px solid ${STYLEGUIDE.mainColorViolet};
            padding-bottom: 5px;
          }
    }
`;

const SignUpBtn = styled.button`
    order: 2;
    width: 50%;
    height: 100%;
    font-family: 'Oxygen';
    background-color: white;
    border: 1px solid ${STYLEGUIDE.mainColorViolet};
    &: hover {
        animation: hoverbutton 200s infinite ease-in-out;
    }
    &: focus {
        outline: none !important;
    }
    @keyframes hoverbutton {
        0% {
            background-color: white;
        }
        0.2% {
            background-color: ${STYLEGUIDE.mainColorViolet};
            border: none;
            color: white;
        }
    }
`;

export default function Accounts(props) {
    return (
        <AccountDetailsDiv>
            <Div>
                <Link to='/login'>
                    <Login>Login</Login>
                </Link>

                <SignUpBtn>Sign Up</SignUpBtn>
            </Div>
        </AccountDetailsDiv>
    )
} 
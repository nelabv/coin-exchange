import React from 'react';
import { Link } from 'react-router-dom';
import Styled from '../styling/Accounts.styled';

export default function Accounts(props) {
    return (
        <Styled.Div>
            <Link to='/login' style={{ textDecoration: 'none' }}>
                <Styled.Login>Login</Styled.Login>
            </Link>
            <Link to='/signup' style={{ textDecoration: 'none' }}>
                <Styled.Signup>Sign up</Styled.Signup>
            </Link>
        </Styled.Div>
    )
} 
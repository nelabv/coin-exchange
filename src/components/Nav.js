import React, { useState } from 'react';
import Styled from '../styling/Nav.styled';
import Accounts from './Accounts';
import Logo from '../images/logo-placeholder.png';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    const [isShown, setIsShown] = useState(false);

    const showLoginBar = () => {
        setIsShown(isShown => !isShown);
    }

    return (
        <Styled.MainContainer>
            <Styled.MobileNav>
                <Styled.Logo src={Logo} alt="logo placeholder" />
                <Styled.HamburgerMenu size="30" onClick={ showLoginBar }/>
            </Styled.MobileNav>

            <Styled.Actions>
                <Link to='/'>
                    <Styled.Logo src={Logo} alt="logo placeholder" />
                </Link>

                <Accounts />
            </Styled.Actions>
            
            {isShown ?
                <div>
                    <Link to='/login' style={{ textDecoration: 'none' }} onClick={ showLoginBar }>
                        <p>Login</p>
                    </Link>
                    <Link to='/signup' style={{ textDecoration: 'none' }} onClick={ showLoginBar }>
                        <p>Signup</p>
                    </Link> 
                </div>
                : null
            }
        </Styled.MainContainer>
    )
} 
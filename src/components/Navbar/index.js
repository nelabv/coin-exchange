import React, { useState } from 'react';
import {
  Nav,
  Logo, 
  Wrapper,
  Link
} from './NavElements';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  // eslint-disable-next-line
  const [isShown, setIsShown] = useState(false);
  // eslint-disable-next-line
  const showLoginBar = () => {
    setIsShown(isShown => !isShown);
  }

  return (
    <>
      <Nav>
        <Wrapper>
          <NavLink to="/">
            <Logo size="30" />
          </NavLink>
          
          <Link href="https://github.com/nelabv/coin-exchange" target="_blank">
            Source code
          </Link>
        </Wrapper>
      </Nav>
    </>
  )
};
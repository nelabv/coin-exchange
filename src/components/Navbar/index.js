import React from 'react';
import {
  Nav,
  Logo, 
  Wrapper,
  Link
} from './NavElements';

export default function Navbar(props) {
  return (
    <>
      <Nav>
        <Wrapper>
           <a href="/">
            <Logo size="30" />
          </a>
          
          <Link href="https://github.com/nelabv/coin-exchange" target="_blank">
            Source code
          </Link>
        </Wrapper>
      </Nav>
    </>
  )
};
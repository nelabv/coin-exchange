import React from 'react';
import {
  Nav, 
  Wrapper,
  Link,
  Logo,
  SourceCodeBtn
} from './NavElements';

export default function Navbar(props) {
  return (
    <>
      <Nav>
        <Wrapper>
          <a href="/" style={{ textDecoration: 'none' }}>
            <Logo>CPC</Logo>
          </a>
          
          <Link href="https://github.com/nelabv/coin-exchange" target="_blank" rel="noopener">
            <SourceCodeBtn>SOURCE CODE</SourceCodeBtn>
          </Link>
        </Wrapper>
      </Nav>
    </>
  )
};
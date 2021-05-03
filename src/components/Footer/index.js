import React from 'react';
import {
  Wrapper,
  Logo,
  LogoWrapper,
  Text
} from './FooterElements';

 export default function Footer(props) {
   return (
     <Wrapper>
       <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <LogoWrapper>
          <Logo size="30" />
          <Text>nelabv</Text>
        </LogoWrapper>
       </a>
       
       <Text>2021</Text>
     </Wrapper>
   )
 }
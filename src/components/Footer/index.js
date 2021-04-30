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
       <LogoWrapper>
         <Logo size="30" />
         <Text>nelabv</Text>
       </LogoWrapper>
       
       <Text>2021</Text>
     </Wrapper>
   )
 }
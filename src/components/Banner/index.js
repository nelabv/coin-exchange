import React from 'react';
import { 
  Wrapper,
  H1,
  Img
} from './BannerElements';
import VectorImg from '../../images/banner-1.jpg';

export default function Banner(props) {
  return (
    <Wrapper>
        <H1>Cryptocurrency Price Checker</H1>
        <Img src={VectorImg} alt="Cryptocurrency Price Checker" />
    </Wrapper>
  )
} 
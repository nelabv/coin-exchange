import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import {
  Wrapper,
  Text
} from './LoadingScreenElements';

function LoadingScreen(props) {
  return (
    <Wrapper>
      <FadeLoader size={40} />

      <Text>FETCHING THE LATEST DATA</Text>
    </Wrapper>
  )
}

export default LoadingScreen;
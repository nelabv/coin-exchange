import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import {
  Wrapper
} from './LoadingScreenElements';

function LoadingScreen(props) {
  return (
    <Wrapper>
      <FadeLoader size={40} />

      <p>Fetching the latest data</p>
    </Wrapper>
  )
}

export default LoadingScreen;
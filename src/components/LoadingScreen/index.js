import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";

function LoadingScreen(props) {
  return (
    <div>
      <FadeLoader size={40} />

      <p>Fetching data...</p>
    </div>
  )
}

export default LoadingScreen;
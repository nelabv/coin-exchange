import React from 'react';
import ChildBar from './ChildBar';
import {
  Parent
} from './ProgressBarElements';

export default function ProgressBar(props) {
  const calculatePercentage = (partialValue, totalValue) => {
    const res = (100 * partialValue) / totalValue;
    let percentage = res.toFixed(2);
    return percentage;
   } 

  const formatNumber = (supply) => {
    return supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      <Parent>
        <ChildBar
          percentage={calculatePercentage(props.circulatingSupply, props.totalSupply)}
        />
      </Parent>

      <p>Circulating Supply: {formatNumber(props.circulatingSupply)} {props.ticker}</p>
      <p>Total Supply: {formatNumber(props.totalSupply)} {props.ticker}</p>
    </div>
  );
} 
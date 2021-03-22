import React from 'react';
import Styled from './ParentBar.styled';
import ChildBar from './ChildBar';

export default function ParentBar(props) {
    var percentage = '';

    const formatNumber = (supply) => {
        return supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const calculatePercentage = (partialValue, totalValue) => {
        const res = (100 * partialValue) / totalValue;
        percentage = res.toFixed(2);
        return percentage;
     } 

    return (
        <div>
            <Styled.Parent>
                <ChildBar percentage={calculatePercentage(props.circulatingSupply, props.totalSupply)}/>
            </Styled.Parent>

            <p>Circulating Supply: {formatNumber(props.circulatingSupply)} {props.ticker}</p>
            <p>Total Supply: {formatNumber(props.totalSupply)} {props.ticker}</p>
        </div>
    );
} 
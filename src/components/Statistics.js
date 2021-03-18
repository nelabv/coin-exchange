import React from 'react';
import Styled from '../styling/Statistics.styled';

export default function Statistics(props) {
    const lastUpdate = new Date(props.lastUpdate).toUTCString();

    return (
        <Styled.Div>
            <Styled.StatsDiv>
                <div>
                    <h1>Statistics</h1>
                    <p>Last updated: {lastUpdate}</p>
                </div>

                <div>
                    <p>Price: ${props.price}</p>
                    <p>Market Rank: {props.marketRank}</p>                
                </div>
            </Styled.StatsDiv>

            <Styled.SupplyDiv>
                <p>Circulating supply: {props.circulatingSupply}</p>
                <p>Max supply: {props.maxSupply}</p>
            </Styled.SupplyDiv>
        </Styled.Div>
    );
} 
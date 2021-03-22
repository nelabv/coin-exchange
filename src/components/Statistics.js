import React from 'react';
import ParentBar from './ProgressBar/ParentBar';
import Styled from '../styling/Statistics.styled';

export default function Statistics(props) {
    const lastUpdate = new Date(props.lastUpdate).toUTCString();

    const formatNumber = (supply) => {
        return supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const checkIfNotEmpty = (data) => {
        if (data !== undefined) {
            return formatNumber(data);
        }
    }

    return (
        <Styled.MainContainer>
            <Styled.Container>
                <Styled.Header>
                    <Styled.StatIcon size="40" />

                    <Styled.Section>
                        <Styled.Stat>Statistics</Styled.Stat>
                        <Styled.LastUpdate>Last updated: {lastUpdate}</Styled.LastUpdate>
                    </Styled.Section>
                    
                </Styled.Header>

                    <div>
                        <p>Price: ${props.price}</p>
                        <p>Market Rank: {props.marketRank}</p>         
                    </div>

                    { props.progressBar ? <ParentBar circulatingSupply= {props.circulatingSupply}
                                                    totalSupply= {props.totalSupply}
                                                    ticker= {props.ticker}/>
                        : <p>Circulating Supply: {checkIfNotEmpty(props.circulatingSupply)} {props.ticker}</p> }
            </Styled.Container>
        </Styled.MainContainer>
    );
} 
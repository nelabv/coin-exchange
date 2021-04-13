import React from 'react';
import ParentBar from '../ProgressBar/ParentBar';
import Styled from '../../styling/Statistics.styled';

export default function CoinStatistics(props) {
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
                        <Styled.LastUpdate>Last updated: {props.statistics.last_updated}</Styled.LastUpdate>
                    </Styled.Section>
                    
                </Styled.Header>

                    <div>
                        <p>Price: ${props.statistics?.quotes?.USD?.price}</p>
                        <p>Market Rank: {props.statistics.rank}</p>         
                    </div>

                    { props.progressBar ? <ParentBar circulatingSupply= {props.statistics.circulating_supply}
                                                    totalSupply= {props.statistics.total_supply}
                                                    ticker= {props.statistics.symbol}/>
                        : <p>Circulating Supply: {checkIfNotEmpty(props.statistics.circulating_supply)} {props.statistics.symbol}</p> }
            </Styled.Container>
        </Styled.MainContainer>
    );
} 
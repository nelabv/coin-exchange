import React from 'react';
import {
  Wrapper,
  Header,
  Icon,
  Section,
  Stat,
  LastUpdate
} from './CoinStatisticsElements'
import ProgressBar from '../ProgressBar/ProgressBar';

export default function CoinStatistics(props) {
  const formattedDate = new Date(props.statistics.last_updated).toUTCString();

  const price = props.statistics?.quotes?.USD?.price;
  const formattedPrice = price.toFixed(2);

  const formatNumber = (supply) => {
    return supply.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const checkIfNotEmpty = (data) => {
    if (data !== undefined) {
      return formatNumber(data);
    }
  }

  return (
    <Wrapper>
      <Header>
        <Icon size="40" />

        <Section>
          <Stat>Statistics</Stat>
          <LastUpdate>Last updated: {formattedDate}</LastUpdate>
        </Section>
      </Header>

      <div>
        <p>Price: ${formattedPrice}</p>
        <p>Market Rank: {props.statistics.rank}</p>         
      </div>

      { props.progressBar ?
        <ProgressBar
          circulatingSupply= {props.statistics.circulating_supply}
          totalSupply= {props.statistics.total_supply}
          ticker= {props.statistics.symbol}/>
          :
        <p>Circulating Supply: {checkIfNotEmpty(props.statistics.circulating_supply)} {props.statistics.symbol}
        </p>
      }
    </Wrapper>
  );
} 
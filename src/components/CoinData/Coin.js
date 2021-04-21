import React from 'react';
import PropTypes from 'prop-types';
import { 
  Icon,
  StyledLink,
  DetailsWrapper,
  Ticker
  } from './CoinTableElements';

export default function Coin(props) { 
  const tickerLowerCase = props.ticker.toLowerCase();
  const iconURL= "https://cryptoicon-api.vercel.app/api/icon/"+tickerLowerCase;

  return (
    <tr>
      <td><button onClick={() => {props.addToWatchlist(props.coinId)}}>Add to Watchlist</button></td>
      <td>{props.rank}</td>
      
      <td>
        <DetailsWrapper>
          <StyledLink to={'/currencies/' + props.coinId}>
            <Icon src={iconURL} alt={`${props.name} logo`}/>
          </StyledLink>

          <StyledLink to={'/currencies/' + props.coinId}>
            {props.name}
          </StyledLink>
          <Ticker>{props.ticker}</Ticker>
        </DetailsWrapper>
      </td>
      
      <td>${props.price}</td>
    </tr>
  );
  
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

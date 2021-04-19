import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Coin(props) { 
  const tickerLowerCase = props.ticker.toLowerCase();
  const iconURL= "https://cryptoicon-api.vercel.app/api/icon/"+tickerLowerCase;

  return (
    <tr>
      <td>{props.rank}</td>
      
      <td>
        <Link to={'/currencies/' + props.coinId}>
          <img src={iconURL} alt={`${props.name} logo`}/>
        </Link>
        
      </td>

      <td>
        <Link to={'/currencies/' + props.coinId}>
          {props.name} {props.ticker}
        </Link>
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

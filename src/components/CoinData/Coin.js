import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Coin(props) { 
  const iconURL = ("https://icons.bitbot.tools/api/" + props.ticker + "/32x32");

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

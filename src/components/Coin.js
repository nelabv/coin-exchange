import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../styling/Coin.styled';

import { Link } from 'react-router-dom';

// STYLING ------------------
/* 

const Td = styled.td `
    font-weight: normal;
    margin: 8px;
    padding: 20px 8px 20px 8px;
    text-align: left;
    border-bottom: 1px solid #f2f2f2;
`;

const Rank = styled.td `
    font-size: 12px;
    margin: 8px;
    padding: 20px 8px 20px 8px;
    text-align: left;
    border-bottom: 1px solid #f2f2f2;
`;

const Name = styled.td `
    font-weight: bold;
    color: #333333;
    margin: 8px;
    padding: 20px 8px 20px 8px;
    text-align: left;
    border-bottom: 1px solid #f2f2f2;
`;

const Tr = styled.tr `
        &: hover {
          background-color: #F3F9F9;
          transition: all 0.3s ease 0s;
        }
`; */

export default function Coin(props) { 
  const handleRefreshBtn = (event) => {
    event.preventDefault();
    props.handleRefreshBtn(props.coinId);
  }

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
        <Styled.StyledLink to={'/currencies/' + props.coinId}>
          {props.name}
        </Styled.StyledLink>
      </td>
      
      <Styled.TickerTd> {props.ticker}</Styled.TickerTd>

      { props.isPrivate ? (<td>{props.balance}</td>) : (<td>-</td>)}
      
      <td>${props.price}</td>

      <Styled.ButtonTd>
          <form action="#" method="post">
            <Styled.Button onClick={handleRefreshBtn}>Refresh</Styled.Button>
          </form>
      </Styled.ButtonTd>
    </tr>
  );
  
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

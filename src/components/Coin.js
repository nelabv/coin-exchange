import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { STYLEGUIDE } from '../StyleGuide';
import { Link } from 'react-router-dom';

// STYLING ------------------

const RefreshButton = styled.button `
color: ${STYLEGUIDE.fontColorText};
text-decoration: none;
background-color: ${STYLEGUIDE.mainColorLightGray};
padding: 10px;
border: none;
display: inline-block;
transition: all 0.4s ease 0s;
    &:hover {
      color: white;
      background: ${STYLEGUIDE.mainColorBlue};
      transition: all 0.4s ease 0s;
    }
`;

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
`;

export default function Coin(props) { 
  const handleRefreshBtn = (event) => {
    event.preventDefault();
    props.handleRefreshBtn(props.coinId);
  }

  const iconURL = ("https://icons.bitbot.tools/api/" + props.ticker + "/32x32");

  return (
    <Tr>
      <Rank>{props.rank}</Rank>
      
      <Name>
        <img src={iconURL} alt={`${props.name} logo`}/>
        <Link to={'/currencies/' + props.coinId}>
          {props.name}
        </Link>
      </Name>
      
      <Td> {props.ticker}</Td>

      { props.isPrivate ? (<Td>{props.balance}</Td>) : (<Td>Balance hidden</Td>)}
      
      <Td>${props.price}</Td>

      <Td>
          <form action="#" method="post">
            <RefreshButton onClick={handleRefreshBtn}>Refresh</RefreshButton>
          </form>
      </Td>
    </Tr>
  );
  
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

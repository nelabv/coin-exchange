import React from 'react';
import styled from 'styled-components';
import { STYLEGUIDE } from '../StyleGuide';
import Coin from './Coin';

const TableDiv = styled.section `
    display:flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    padding: 50px 0 70px 0;
    background-color: ${STYLEGUIDE.mainColorLightGray};
`;

const H2 = styled.h2 `
    order: 1;
    width: 40%;
    text-align: left;
    margin: auto;
    font-size: ${STYLEGUIDE.fontSizeMedium2};
`;

const Table = styled.table `
    order: 2;
    background-color: white;
    border: 1px solid #f2f2f2;
    padding: 0 20px 0 20px;
    align: center;
    margin: auto;
    cellspacing="0";
    cellpadding="0";
    border-spacing: 0;
    width: 80%;
    border-radius: 5px;
`;

const Th = styled.th `
    font-size: default;
    padding: 20px 8px 20px 8px;
    color: ${STYLEGUIDE.fontColorText};
    text-align: left;
    border-bottom: 1px solid #f2f2f2;
`;

const TextHolder = styled.div `
    order: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export default function CoinTable(props) {
  return (
      <TableDiv>
        <TextHolder>
          <H2>Top 20 Currencies by Market Cap</H2>
        </TextHolder>


        <Table>
          <colgroup>
              <col style= {{width: '6%'}}/>
              <col style= {{width: '10%'}}/>
              <col style= {{width: '25%'}}/>
          </colgroup>
          <thead>
            <tr>
              <Th>#</Th>
            <Th>Name</Th>
              <Th></Th>
              <Th>Your Balance</Th>
              <Th>Last Price</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>    
            { props.coinData.map( ({key, name, icon, ticker, price, balance, rank}) =>
                <Coin key={key}
                      coinId={key}
                      name={name}
                      icon={icon}
                      ticker={ticker}
                      balance ={balance}
                      price={price}
                      rank={rank}

                      handleRefreshBtn = {props.handleRefreshBtn}
                      isPrivate={props.isPrivate}
                />           
              )}
          </tbody>
        </Table>
      </TableDiv>
  )

} 
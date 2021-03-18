import React from 'react';
import Coin from './Coin';
import Styled from '../styling/CoinTable.styled';
 
export default function CoinTable(props) {
  return (
    <Styled.Div>
      <Styled.ContentDiv>
        <Styled.H2>Top 20 Currencies by Market Cap</Styled.H2>


        <Styled.Table>
          <colgroup>
            <col span='2' style={{ width: '5%'}} />
            <col span='2' style={{ width: '15%'}} />
            <col span='2' style={{ width: '25%'}} />
            <col span='1' style= {{width: '10%'}}/>
          </colgroup>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th></th>
              <th></th>
              <th>Your Balance</th>
              <th>Last Price</th>
              <th></th>
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
        </Styled.Table>
      </Styled.ContentDiv>

      </Styled.Div>
  )

} 
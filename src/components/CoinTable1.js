/* import React from 'react';
import Coin from './Coin';
import Styled from '../styling/CoinTable.styled';
 
export default function CoinTable1(props) {
  return (
    <Styled.Div>

      <Styled.ContentDiv>
      <Styled.Heading2>Top 20 Currencies by Market Cap</Styled.Heading2>
        <Styled.Table>

          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th></th>
              <th>Last Price</th>
              <th>Actions</th>
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

}  */
import React from 'react';
import Coin from './Coin';
import {
  Wrapper,
  Table,
  H2
} from './CoinTableElements';
 
export default function CoinTable(props) {
  return (
    <Wrapper>
      <H2>Today's Prices by Market Cap</H2>
      
      <Table>
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
      </Table>
    </Wrapper>
  )

} 
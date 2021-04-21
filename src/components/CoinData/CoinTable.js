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
            <th>Watchlist</th>
            <th>#</th>
            <th>Name</th>
            <th>Last Price</th>
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
                    isPrivate={props.isPrivate}
                    addToWatchlist={props.addToWatchlist}
              />           
            )}
        </tbody>
      </Table>
    </Wrapper>
  )

} 
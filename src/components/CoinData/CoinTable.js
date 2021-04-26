import React from 'react';
import Coin from './Coin';
import Watchlist from '../Watchlist';
import EmptyWatchlist from '../EmptyWatchlist';
import {
  Wrapper,
  Table,
  H2
} from './CoinTableElements';
 
export default function CoinTable(props) {
  return (
    <Wrapper>
      <H2>Today's Prices by Market Cap</H2>
      <H2>Your Watchlist</H2>
      
      {props.isWatchlistEmpty ? 
        <EmptyWatchlist /> :
        <Watchlist
          removeFromWatchlist={props.removeFromWatchlist}/>
      }
      
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
import React from 'react';
import Coin from './Coin';
import Watchlist from '../Watchlist';
import EmptyWatchlist from '../EmptyWatchlist';
import {
  Wrapper,
  Table,
  H2,
  WatchlistTitle,
  Star,
  Section
} from './CoinTableElements';
 
export default function CoinTable(props) {
  return (
    <Wrapper>
      <H2>Today's Prices by Market Cap</H2>
      <Section>
        <Star size="20" />
        <WatchlistTitle>Your Watchlist</WatchlistTitle>
      </Section>
      
      {props.isWatchlistEmpty ? 
        <EmptyWatchlist /> :
        <Watchlist
          removeFromWatchlist={props.removeFromWatchlist}/>
      }
      
      <Table>
        <colgroup>
          <col span="1" styles="width: 25%;"/>
          <col span="1" styles="width: 50%;"/>
          <col span="1" styles="width: 25%;"/>
        </colgroup>

        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>PRICE</th>
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
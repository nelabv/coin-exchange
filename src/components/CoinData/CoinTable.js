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
  Section,
  Ticker as Subtext
} from './CoinTableElements';
 
function CoinTable(props) {
  return (
    <Wrapper>
      <Section>
        <Star size="20" />
        <WatchlistTitle>Your Watchlist</WatchlistTitle>
      </Section>
      
      {props.isWatchlistEmpty ? 
        <EmptyWatchlist /> :
        <Watchlist
          removeFromWatchlist={props.removeFromWatchlist}/>
      }

      <H2>Top 20 Digital Currencies by Market Cap</H2>
      <Subtext>DATA REFRESHES EVERY 5 MINUTES</Subtext>

      <Table>

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

export default React.memo(CoinTable);
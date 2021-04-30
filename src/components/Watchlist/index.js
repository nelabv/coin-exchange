import React from 'react';
import {
  Table,
  UnwatchBtn,
  Icon,
  StyledLink,
  DetailsWrapper,
  Ticker,
  Rank
} from '../CoinData/CoinTableElements';

export default function Watchlist(props) { 
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const iconURL= "https://cryptoicon-api.vercel.app/api/icon/";

  return (
    <div>
      <Table>
        <thead>
            <tr>
              <th></th>
              <th>NAME</th>
              <th>PRICE</th>
            </tr>
        </thead>


        <tbody>
          {watchlist.map((list, index) => 
            <tr key={list.key}>
              <td style={{width: '30%'}}>
                <UnwatchBtn onClick={() => {props.removeFromWatchlist(list);}}>UNWATCH</UnwatchBtn>
              </td>
              
              <td style={{width: '35%'}}>
                <Rank>{list.rank}</Rank>
                  <DetailsWrapper>
                  <StyledLink to={'/currencies/' + list.key}>
                    <Icon src={iconURL + `${list.ticker}`.toLowerCase()} alt={`${list.name} logo`}/>
                  </StyledLink>

                  <StyledLink to={'/currencies/' + list.key}>
                    {list.name}
                  </StyledLink>
                  <Ticker>{list.ticker}</Ticker>
                </DetailsWrapper>
              </td>

              <td style={{width: '35%'}}>$ {list.price} </td>
            </tr>
          )}
        </tbody>
      </Table>

    </div>
  );
}
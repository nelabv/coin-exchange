import React from 'react';
import {
  Table 
} from '../CoinData/CoinTableElements';

export default function Watchlist(props) { 
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));

  return (
    <div>
      <Table>
        <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Market Rank</th>
              <th>Last Price</th>
            </tr>
          </thead>
          <tbody>
        {watchlist.map((list, index) => 
          <tr key={list.key}>
            <td><button onClick={() => {props.removeFromWatchlist(list);}}>Remove from Watchlist</button></td>
            <td>
              <div>
              {list.name} {list.ticker}
              </div>
            </td>
            <td>{list.rank} </td>
            <td>$ {list.price} </td>
          </tr>
        )}
  </tbody>
      </Table>

    </div>
  );
}
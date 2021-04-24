import React from 'react';

export default function Watchlist(props) { 
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));

  return (
    <div>
      <table>
        <thead>
            <tr>
              <th>Watchlist</th>
              <th>Name</th>
              <th>Market Rank</th>
              <th>Last Price</th>
            </tr>
          </thead>
          <tbody>
        {watchlist.map((list, index) => 
          <tr key={list.key}>
            <td><button onClick={() => {props.removeFromWatchlist(list);}}>Remove from Watchlist</button></td>
            <td>{list.name} </td>
            <td>{list.rank} </td>
            <td>$ {list.price} </td>
          </tr>
        )}
  </tbody>
      </table>

    </div>
  );
}
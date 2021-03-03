import React from 'react';

export default function Statistics(props) {
    const lastUpdate = new Date(props.lastUpdate).toUTCString();

    return (
        <div>
            <h1>Statistics</h1>
            <p>Last updated: {lastUpdate}</p>
            <p>Price: {props.price}</p>
            <p>Market Rank: {props.marketRank}</p>
            <h2>Supply</h2>
            <p>Circulating supply: {props.circulatingSupply}</p>
            <p>Max supply: {props.maxSupply}</p>
        </div>
    );
} 
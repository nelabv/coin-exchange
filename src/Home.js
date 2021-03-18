import React, { useState, useEffect } from 'react';
// import ViewBalance from './components/Balance';
import CoinTable from './components/CoinTable';
import HeaderDesign from './components/Header';
import About from './components/About';

import axios from 'axios';

export default function Home(props) {
  // const [balance, setBalance] = useState(10000);
  // eslint-disable-next-line
  const [isPrivate, setIsPrivate] = useState(false);
  const [coinData, setCoinData] = useState([]);

  const fetchCoinData = async () => {
    const priceInquiry = await axios.get('https://api.coinpaprika.com/v1/tickers');

    let filteredRank = priceInquiry.data.sort(function(a, b)
      { return a.rank - b.rank}).slice(0, 20);

    let newCoinData = filteredRank.map(function(coin){
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(getPrice(coin.id).toFixed(4)),
        rank: coin.rank
      }
    })

    function getPrice(coinId){
      let coinKey = priceInquiry.data.find(x => x.id === coinId).quotes['USD'].price;
        return coinKey;
    }

    setCoinData(newCoinData);
  }

  useEffect(function(){
    if(coinData.length === 0){
      fetchCoinData();
    }
  })

  /*
  const setPrivacy = () => {
    setIsPrivate(oldValue => !oldValue);
  }
  */

  const handleRefreshBtn = async (coinPriceId) => {
  const tickerLink = 'https://api.coinpaprika.com/v1/tickers/';
  const response = await axios.get(tickerLink + coinPriceId);

  const newCoinData = coinData.map(function(values){
    let newData = { ...values };

    if(values.key === coinPriceId){
    newData.price = parseFloat(Number(response.data.quotes.USD.price).toFixed(4));
    }
    return newData;

  })

  setCoinData(newCoinData);
}

  return (
    <div>
    <HeaderDesign />
    <CoinTable    coinData={coinData}
                  isPrivate={isPrivate}
        handleRefreshBtn={handleRefreshBtn} />
    <About/>
    </div> 
  );
} 
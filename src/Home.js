import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinTable from './components/CoinData/CoinTable'
import Banner from './components/Banner';
import LoadingScreen from './components/LoadingScreen';

export default function Home(props) {
  const [isPrivate, setIsPrivate] = useState(false);
  const [coinData, setCoinData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoinData = async () => {
    try {
      setLoading(true);
      function getPrice(coinId){
        let coinKey = priceInquiry.data.find(x => x.id === coinId).quotes['USD'].price;
          return coinKey;
      }
      const priceInquiry = await axios.get('https://api.coinpaprika.com/v1/tickers');

      let filteredRank = priceInquiry.data.sort(function(a, b)
        { return a.rank - b.rank}).slice(0, 20);

      let newCoinData = filteredRank.map(function(coin){
        return {
          key: coin.id,
          name: coin.name,
          ticker: coin.symbol,
          balance: 0,
          price: parseFloat(getPrice(coin.id).toFixed(2)),
          rank: coin.rank
        }
      })
      setCoinData(newCoinData);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(function(){
    if(coinData.length === 0){
      fetchCoinData();
    }
  })

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
    <>

      {loading ? <LoadingScreen /> :
        <>
          <Banner />
          <CoinTable
              coinData={coinData}
              isPrivate={isPrivate}
              handleRefreshBtn={handleRefreshBtn}
          />
        </>
      }
    </> 
  );
} 
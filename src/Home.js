import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CoinTable from './components/CoinData/CoinTable'
import Banner from './components/Banner';
import LoadingScreen from './components/LoadingScreen';

export default function Home(props) {
  const [loading, setLoading] = useState();
  const [isWatchlistEmpty, setIsWatchlistEmpty] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const watchlistLocalStorage = localStorage.getItem("watchlist");
  const parsedWatchlist = JSON.parse(watchlistLocalStorage);

  const getLocalStorage = () => {
    if (parsedWatchlist === null) {
      setIsWatchlistEmpty(true);
    } else {
      setWatchlist(parsedWatchlist);
      localStorage.setItem("watchlist", JSON.stringify(parsedWatchlist));
      setIsWatchlistEmpty(false);
    } 
  }

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
      setInterval(fetchCoinData, 300000);
    }
  })

  useEffect(getLocalStorage, []);

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
  };

  // WATCHLIST-RELATED FUNCTIONS ---------------------------------

  const arrangeIncreasingOrder = (array) => {
    const sortedArray = array.sort(function(a, b)
      { return a.rank - b.rank});
    return sortedArray;
  }

  const checkIfWatchlistStorageIsEmpty = (array) => {
    if (parsedWatchlist.length === 0) {
      localStorage.removeItem("watchlist");
      setWatchlist([]);
      setIsWatchlistEmpty(true);
    } else {
      setWatchlist(array);
      localStorage.setItem("watchlist", JSON.stringify(array));
      setIsWatchlistEmpty(false);
    } 
  }

  const addToWatchlist = (id) => {
    const coinToAdd = coinData.find(coinToAdd => coinToAdd.key === id);
    const checkForCoinDuplicates = watchlist.includes(coinToAdd);

    if (checkForCoinDuplicates === true) {
      alert("Coin already in watchlist!");
    } else {
      const newArray = arrangeIncreasingOrder([...watchlist, coinToAdd]);
      setWatchlist(newArray);
      localStorage.setItem("watchlist", JSON.stringify(newArray));
      setIsWatchlistEmpty(false);
    }
  }; 

  const removeFromWatchlist = (coin) => {
    const updatedArray = parsedWatchlist;
    const index = updatedArray.findIndex(x => x.key === coin.key);
    if (index > -1) {
      updatedArray.splice(index, 1);
    }
    checkIfWatchlistStorageIsEmpty(updatedArray);
  }

  return (
    <>
      <Banner />

      { loading ? <LoadingScreen /> :
        <>
          <CoinTable
              coinData={coinData}
              handleRefreshBtn={handleRefreshBtn}
              addToWatchlist={addToWatchlist}
              isWatchlistEmpty={isWatchlistEmpty}
              watchlist={watchlist}
              removeFromWatchlist={removeFromWatchlist}
          />
        </>
      }
    </> 
  );
} 
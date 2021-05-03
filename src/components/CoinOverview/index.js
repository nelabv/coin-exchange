import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Wrapper } from './CoinOverviewElements';
//import CoinStatistics from '../CoinStatistics';
import CoinBasicInfo from '../CoinBasicInfo'
import LoadingScreen from '../LoadingScreen';
import Footer from '../Footer';

export default function CoinOverview(props) {
    const id = props.match.params.currency;

    const [hasSourceCodeLink, setHasSourceCodeLink] = useState(false);
    const [hasWhitepaper, setHasWhitePaper] = useState(false);
    // const [progressBar, setProgressBar] = useState();

    const [coin, setCoin] = useState({});
    const [statistics, setStatistics] = useState({});

    const [loading, setLoading] = useState(true);

    // UTILITY FUNCTIONS --------------------------

    const dataChecker = (data, setCondition) => {
        // Checks if API has an available whitepaper and source code links for each coins.
        // Does not show corresponding buttons if false, shows if true.
        if (data === null || undefined) {
            setCondition(false);
        } else { 
            setCondition(true);
        }
    }

/*     const calculatePercentage = (partialValue, totalValue) => {
        const res = (100 * partialValue) / totalValue;
        return res.toFixed(0);;
     } */

    // --------------------------------------------

    const fetchBasicData = async () => {
      try {
        // Retrieves a coin's basic information
        const apiCall = await axios.get('https://api.coinpaprika.com/v1/coins/' + id);
        const basicData = await apiCall.data;

        setCoin(basicData);

        dataChecker(basicData.whitepaper.link, setHasWhitePaper);
        dataChecker(basicData.links["source_code"], setHasSourceCodeLink);

        // Retrieves coin statistics ---------------------------------------------
        const fetchedData = await axios.get('https://api.coinpaprika.com/v1/tickers/' + id);
        const coinStats = await fetchedData.data;
        
        setStatistics(coinStats);

        // const percent = calculatePercentage(coinStats.circulating_supply, coinStats.total_supply);

        // Checks if currency has total supply; needs progress bar

        // Condition 1: If circulating and total supply is ~ 100%
/*         if (percent === '100') {
            setProgressBar(false);
        } else {
            setProgressBar(true);
        } */

        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }

    useEffect(function () {
        if (Object.keys(coin).length === 0 && Object.keys(statistics).length === 0) {
            fetchBasicData();
        }
    })

    const checkWhitepaper = () => { 
        const link = coin.whitepaper.link;
        window.open(link.toString());
    }

    const goToSourceCode = () => { 
        const link = coin.links["source_code"];
        const convertedToString = link.toString();

        window.open(convertedToString);
    }

    return (
      <>
        <Wrapper>
          {loading ? <LoadingScreen /> : 
            <>
              <CoinBasicInfo
                  coin={coin}
                  price={statistics.quotes.USD.price}
                  goToSourceCode={goToSourceCode}
                  hasSourceCodeLink={hasSourceCodeLink}
                  hasWhitepaper={hasWhitepaper}
                  checkWhitepaper={checkWhitepaper} />
{/*               <CoinStatistics
                  statistics={statistics}
                  progressBar={progressBar} /> */}
            </>
          }
        </Wrapper>

        <Footer />
    </>
    );
} 
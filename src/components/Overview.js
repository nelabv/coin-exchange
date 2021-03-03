import React, { useState, useEffect } from 'react';
import Statistics from './Statistics';
import BasicData from './BasicData';
import axios from 'axios';

export default function Overview(props) {
    const id = props.match.params.currency;

    const [hasSourceCodeLink, setHasSourceCodeLink] = useState(false);
    const [hasWhitepaper, setHasWhitePaper] = useState(false);
    const [statistics, setStatistics] = useState({});
    const [coin, setCoin] = useState({});

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

    // --------------------------------------------

    const fetchBasicData = async () => {
        // Retrieves a coin's basic information
        const apiCall = await axios.get('https://api.coinpaprika.com/v1/coins/' + id);
        let basicData = await apiCall.data;

        setCoin(basicData);

        dataChecker(basicData.whitepaper.link, setHasWhitePaper);
        dataChecker(basicData.links["source_code"], setHasSourceCodeLink);

        // Retrieves coin statistics
        const fetchedData = await axios.get('https://api.coinpaprika.com/v1/tickers/' + id);
        const coinStats = await fetchedData.data;

        setStatistics(coinStats);
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
        <div>
            <BasicData
                coin={coin}
                name={coin.name}
                ticker={coin.symbol}
                rank={coin.rank}
                description={coin.description}

                goToSourceCode={goToSourceCode}
                hasSourceCodeLink={hasSourceCodeLink}
                hasWhitepaper={hasWhitepaper}
                checkWhitepaper={checkWhitepaper} />
            <Statistics
                statistics={statistics}
                lastUpdate={statistics.last_updated}
                price={statistics?.quotes?.USD?.price}
                marketRank={statistics.rank}
                circulatingSupply
                maxSupply/>
        </div>
    );
} 
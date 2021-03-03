import React from 'react';

export default function BasicData(props) {
    const fetchData = () => { 
        props.checkWhitepaper();
    }

    const handleSourceCode = () => {
        props.goToSourceCode();
    }

    const iconURL = 'https://icons.bitbot.tools/api/' + props.ticker + '/128x128';

    return (
        <div>
                <img src={iconURL} alt={`${props.name} logo`} />
                <h1>{props.name}</h1>
                <h2>{props.ticker}</h2>
                <p>Rank {props.rank}</p>
                <p>{props.description}</p>

                { props.hasWhitepaper
                    ? <button onClick={fetchData}>Whitepaper</button>
                    : null}
                
                { props.hasSourceCodeLink
                    ? <button onClick={handleSourceCode}>Source Code</button>
                    : null}
        </div>
    );
}
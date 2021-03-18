import React from 'react';
import Styled from '../styling/BasicData.styled';

export default function BasicData(props) {
    const fetchData = () => { 
        props.checkWhitepaper();
    }

    const handleSourceCode = () => {
        props.goToSourceCode();
    }

    const iconURL = 'https://icons.bitbot.tools/api/' + props.ticker + '/128x128';

    return (
        <Styled.Div>
            <Styled.Icon src={iconURL} alt={`${props.name} logo`} />
            
            <Styled.Div3>
                <Styled.Section>
                    <Styled.H1>{props.name}</Styled.H1>
                    <Styled.H2>{props.ticker}</Styled.H2>
                    <Styled.P>Rank {props.rank}</Styled.P>
                </Styled.Section>
                
                <Styled.Description>{props.description}</Styled.Description>

                <Styled.ButtonsDiv>
                    { props.hasWhitepaper
                    ? <Styled.Button onClick={fetchData}>Whitepaper</Styled.Button>
                    : null}

                    { props.hasSourceCodeLink
                    ? <Styled.Button onClick={handleSourceCode}>Source Code</Styled.Button>
                    : null}
                </Styled.ButtonsDiv>
            </Styled.Div3>
        </Styled.Div>
    );
}
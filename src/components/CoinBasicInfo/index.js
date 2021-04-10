import React from 'react';
import { Link } from 'react-router-dom';
import Styled from '../../styling/BasicData.styled';

export default function CoinBasicInfo(props) {
    const fetchData = () => { 
        props.checkWhitepaper();
    }

    const handleSourceCode = () => {
        props.goToSourceCode();
    }

    const iconURL = 'https://icons.bitbot.tools/api/' + props.ticker + '/128x128';

    return (
        <Styled.MainContainer>

            <Styled.MobileActions>
                <Link to='/'>
                    <Styled.Back size="30"/>
                </Link>

                {/* <Styled.HamburgerMenu size="30"/> */}
            </Styled.MobileActions>

            <Styled.Info>
                <Styled.Icon src={iconURL} alt={`${props.coin.name} logo`} />

                <Styled.Section>
                    <Styled.H1>{props.coin.name}</Styled.H1>
                    <Styled.H2>{props.coin.symbol}</Styled.H2>
                </Styled.Section>
            </Styled.Info>
                
            <Styled.MoreInfo>
                <Styled.DetailsContainer>
                    <Styled.RankBox>
                        <Styled.StarIcon size="20"/>
                        <Styled.Rank>Rank {props.coin.rank}</Styled.Rank>
                    </Styled.RankBox>
                    
                    <Styled.Description>{props.coin.description}</Styled.Description>

                    <Styled.ButtonsDiv>
                        { props.hasWhitepaper
                            ? <Styled.Button onClick={fetchData}>Whitepaper</Styled.Button>
                            : null}

                        { props.hasSourceCodeLink
                            ? <Styled.Button onClick={handleSourceCode}>Source Code</Styled.Button>
                                : null}
                    </Styled.ButtonsDiv>
                </Styled.DetailsContainer>
            </Styled.MoreInfo>
        </Styled.MainContainer>
    );
}
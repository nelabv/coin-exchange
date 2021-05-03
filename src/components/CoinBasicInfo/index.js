import React from 'react';
import {
  Header,
  Icon,
  Section,
  CoinName, 
  Ticker, 
  PriceTag,
  Price,
  Info, 
  Rank,
  Description, 
  ButtonHolder,
  WhitepaperBtn,
  SourceCodeBtn,
  PriceWrapper
} from './CoinBasicInfoElements';

export default function CoinBasicInfo(props) {
    const fetchData = () => { 
        props.checkWhitepaper();
    }

    const handleSourceCode = () => {
        props.goToSourceCode();
    }
    const tickerLowerCase = props.coin.symbol.toLowerCase();
    const iconURL= "https://cryptoicon-api.vercel.app/api/icon/"+tickerLowerCase;

    return (
      <>
        <Header>
            <Icon src={iconURL} alt={`${props.coin.name} logo`} />

            <Section>
                <CoinName>{props.coin.name}</CoinName>
                <Ticker>{props.coin.symbol}</Ticker>
            </Section>
        </Header>

        <PriceWrapper>
          <PriceTag>LAST PRICE</PriceTag>
          <Price>${props.price}</Price>
        </PriceWrapper>
              
        <Info>
          <Rank>Rank {props.coin.rank}</Rank>
          
          <Description>{props.coin.description}</Description>
          
          <ButtonHolder>
            { props.hasWhitepaper
                ? <WhitepaperBtn onClick={fetchData}>WHITEPAPER</WhitepaperBtn>
                : null}

            { props.hasSourceCodeLink
                ? <SourceCodeBtn onClick={handleSourceCode}>SOURCE CODE</SourceCodeBtn>
                    : null}
          </ButtonHolder>
        </Info>
      </>
    );
}
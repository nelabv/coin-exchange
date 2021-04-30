import styled from 'styled-components';
import { WatchBtn as Btn } from '../CoinData/CoinTableElements'

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15vh;
  padding-bottom: 10px;
  margin: auto;
`;

export const Icon = styled.img`
  order: 1;
  max-width: 40px;
  max-height: 40px;
`;

export const Section = styled.section`
  order: 2;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

export const CoinName = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${props => props.theme.colors.deepblack};
`;

export const Ticker = styled.p`
  color: ${props => props.theme.colors.deepblack};
  font-size: 1.25rem;
`;

export const PriceTag = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  line-spacing: 2px;
  color: ${props => props.theme.colors.disabled};
  margin-top: 20px;
`;
export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 30px;
`;

export const Rank = styled.p`
    margin: 20px 0;
    font-weight: 600;
    color: ${props => props.theme.colors.deepblack};
`;

export const Description = styled.p`
  padding-bottom: 20px;
`;

export const ButtonHolder = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const WhitepaperBtn = styled(Btn)`
  width: 120px;
  margin: 10px 0;
  margin-right: 20px;
  background-color: ${props => props.theme.colors.lightgreen};
  color: white;
`;

export const SourceCodeBtn = styled(WhitepaperBtn)`
  background-color: white;
  color:  ${props => props.theme.colors.lightgreen};
  border: 1px solid ${props => props.theme.colors.lightgreen};
`;
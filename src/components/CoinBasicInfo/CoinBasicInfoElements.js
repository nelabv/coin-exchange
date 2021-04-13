import styled from 'styled-components';
import { Button as Btn } from '../../styling/StandardElements';

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 20vh 5vh 10vh ;
  margin: auto;
  background-color: ${props => props.theme.colors.peach};
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
  font-size: 1.5em;
  font-weight: 700;
  color: ${props => props.theme.colors.deepblack};
  padding: 0;
  margin: 0;
`;

export const Ticker = styled.p`
  color: ${props => props.theme.colors.orangegray};
  font-weight: 200;
  padding: 0;
  margin: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 5vh;
  background-color: ${props => props.theme.colors.deepblack};

  @media only screen and (${props => props.theme.breakpoint.tabletMin}) {
    padding: 5vh;
  }
`;

export const Rank = styled.p`
    margin: 0;
    padding: 0;
    font-weight: 400;
    color: ${props => props.theme.colors.gray};
`;

export const Text = styled.p`
  order: 2;
  color: white;
  line-height: 32px;
`;

export const ButtonsDiv = styled.div`
  order: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 20px 0;
  height: 150px;

  @media only screen and (${props => props.theme.breakpoint.tabletMin}) {
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    align-items: space-between;
  }
`;

export const Button = styled(Btn)`
  width: 100%;

  @media only screen and (${props => props.theme.breakpoint.tabletMin}) {
    width: 150px;
    margin-right: 20px;
  }
`;
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 10vh;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.pastelblue};

  @media only screen and (${props => props.theme.breakpoint.laptop}) {
    flex-direction: row;
    padding: 0 40vh;
  }
`;

export const H1 = styled.h1`
  order: 1;
  font-size: 2.5rem;
  line-height: 1.3;
  text-align: center;
  padding: 50px;
  color: ${props => props.theme.colors.lightgreen};

  @media only screen and (${props => props.theme.breakpoint.tabletMin}) {
    font-size: 3rem;
  }

  @media only screen and (${props => props.theme.breakpoint.laptop}) {
    text-align: left;
    padding: 0;
  }
`;

export const Img = styled.img`
  order: 2;
  max-width: 300px;
  max-height: 300px;
  mix-blend-mode: multiply;

  @media only screen and (${props => props.theme.breakpoint.tabletMin}) {
    max-width: 400px;
    max-height: 400px;
    padding-top: 100px;
    padding-bottom: 20px;
  }

  @media only screen and (${props => props.theme.breakpoint.laptop}) {
    max-width: 500px;
    max-height: 500px;
    padding-top: 100px;
    padding-bottom: 20px;
  }
`;

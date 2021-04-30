import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 5vw;
  width: 100%;
  height: 80vh;

  @media only screen and (${props => props.theme.breakpoint.tabletMin}) {
    width: 80%;
    margin: auto;  
  }
`;
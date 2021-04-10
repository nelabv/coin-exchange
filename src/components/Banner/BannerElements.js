import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.red};
  height: 60vh;
  padding: 15vh 5vw;
`;

export const H1 = styled.h1`
  padding: 0;
  margin: 0;
  color: white;
  font-size: 2.5rem;
`;

export const Subheading = styled.p`
  font-size: 1.25rem;
  color: white;
`;
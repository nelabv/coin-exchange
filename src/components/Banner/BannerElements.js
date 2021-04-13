import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.peach};
  padding: 15vh 5vh 5vh;
`;

export const H1 = styled.h1`
  padding: 0;
  margin: 0;
  color: ${props => props.theme.colors.deepblack};
  font-size: 2.5rem;
`;

export const Subheading = styled.p`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.orangegray};
`;
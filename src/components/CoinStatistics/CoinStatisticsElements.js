import styled from 'styled-components';
import { Stats } from '@styled-icons/boxicons-regular/Stats';

export const Wrapper = styled.div`
  background: white;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (${props => props.theme.breakpoint.tabletMin}) {
    padding: 5vh;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled(Stats)`
  color: ${props => props.theme.colors.peach};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 10px;
`;

export const Stat = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.25em;
  font-weight: 700;
  color: ${props => props.theme.colors.charcoalblack};
`;

export const LastUpdate = styled.p`
  padding: 5px 0;
  margin: 0;
  font-size: 0.75em;
  color: ${props => props.theme.textColor.gray};
`;

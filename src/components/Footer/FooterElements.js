import styled from 'styled-components';
import { Github } from '@styled-icons/bootstrap/Github';

export const Wrapper = styled.div`
  padding: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.charcoalblack};
  width: 100%;
  height: 100px;
`;

export const LogoWrapper = styled(Wrapper)`
  padding: 0;
  order: 1;
  justify-content: flex-start;
`;

export const Logo = styled(Github)`
  color: white;
  margin-right: 20px;
`;

export const Text = styled.p`
  order: 2;
  color: white;
`;

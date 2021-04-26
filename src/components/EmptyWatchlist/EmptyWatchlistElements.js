import styled from 'styled-components';
import { Star as Icon } from '@styled-icons/fa-regular/Star';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin: 20px 0;
  padding: 30px 0;
`;

export const Star = styled(Icon)`
  color: #F2F2F2;
`;

export const Heading = styled.p`
  margin: 20px 0;
  font-size: 14px;
`;
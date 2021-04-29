import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 100px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const H1 = styled.h1`
  order: 1;
  font-size: 2.5rem;
  line-height: 1.3;
  text-align: center;
  color: ${props => props.theme.colors.lightgreen};
`;

export const Img = styled.img`
  order: 2;
  width: 100%;
  height: 100%;
`;

import styled from 'styled-components';
import Background from '../../images/banner-1.jpg';

export const Wrapper = styled.div`
  padding-top: 150px;
  padding-bottom: 20px;
  height: 100vh;
  background-image: url(${Background});
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: 50% 70%;
`;

export const H1 = styled.h1`
  padding: 0;
  margin: 0 30px;
  color: ${props => props.theme.colors.lightgreen};
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
`;

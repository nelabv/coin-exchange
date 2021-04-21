import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 5vh;
  background-color: ${props => props.theme.colors.pastelblue};
`;

export const Table = styled.table`
  text-align: left;
  background-color: white;
  align: center;
  margin: auto;
  width: 100%;
  cellspacing="0";
  cellpadding="0";
  border-spacing: 0;

  & th {
    padding: 30px 10px;
    font-weight: 400;
    color: ${props => props.theme.textColor.gray};
    font-size: 1em;
    background-color: ${props => props.theme.colors.gray};
  }

  & td {
    padding: 20px 10px;
  }
`;

export const H2 = styled.h2`
  color: ${props => props.theme.colors.charcoalblack};
  font-size: 1.5em;
  line-height: 36pt;
  text-align: left;
`;

export const Button = styled.button`
  color: ${props => props.theme.colors.charcoalblack};
  text-decoration: none;
  background-color: ${props => props.theme.colors.peach};
  padding: 10px 12px;
  font-family: 'PT Sans', sans-serif;
  font-size: 0.75em;
  border: none;
  border-radius: 10px;
  transition: all 0.4s ease 0s;

  &:hover {
      color: ${props => props.theme.textColor.gray};
      border: 0.1px solid ${props => props.theme.colors.peach};
      background: white;
  }

  &:focus {
      outline: none;
      box-shadow: none;
  }
`;

export const Form = styled.form`
  text-align: center;
`;
export const Icon = styled.img`
  max-height: 30px;
  max-width: 30px;
  padding: 0;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #333333;
  font-weight: 600;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Ticker = styled.p`
  color: ${props => props.theme.textColor.gray};
  margin: 0;
`;
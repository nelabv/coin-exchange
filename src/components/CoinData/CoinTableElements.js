import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Star as StarIcon } from '@styled-icons/boxicons-solid/Star';

export const Wrapper = styled.div`
`;

export const Table = styled.table`
  text-align: left;
  background-color: white;
  align: center;
  width: 100%;
  cellspacing="0";
  cellpadding="0";
  border-spacing: 0;
  margin: 5px 0;
  border-radius: 10px;

  & th {
    padding: 20px 0;
    font-weight: 400;
    opacity: 0.75;
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 1px;
    background-color: ${props => props.theme.colors.gray};
  }

  & td {
    padding: 20px 0;
    border-bottom: 1px solid ${props => props.theme.colors.gray};
  }
`;

export const H2 = styled.h2`
  text-align: left;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
`;

export const WatchlistTitle = styled.h3`
  margin: 0 5px;
  font-size: 1.25rem;
`;

export const Star = styled(StarIcon)`
  color: #FFE439;
`;

export const Button = styled.button`
  text-decoration: none;
  background-color: ${props => props.theme.colors.peach};
  padding: 10px 12px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 0.5rem;
  border: none;
  border-radius: 10px;
  transition: all 0.4s ease 0s;

  &:hover {
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
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Ticker = styled.p`
  color: ${props => props.theme.textColor.gray};
  margin: 0;
  font-size: 0.75rem;
`;

export const Rank = styled(Ticker) `
  margin: 10px 0;
  font-weight: 600;
`;

export const WatchBtn = styled.button`
  text-decoration: none;
  table-layout:fixed;
  background-color: white;
  padding: 10px 12px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12px;
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 10px;
  transition: all 0.4s ease 0s;
  margin-left: 20px;
  line-spacing: 1px;

  &:hover, &:focus {
      color: ${props => props.theme.textColor.gray};
      border: 0.1px solid ${props => props.theme.colors.charcoalblack};
      background: white;
  }

  &:focus {
    outline: none !important;
    border: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
  }
`;

export const UnwatchBtn = styled(WatchBtn)`
  background-color: ${props => props.theme.colors.gray};
  border: none;
`;
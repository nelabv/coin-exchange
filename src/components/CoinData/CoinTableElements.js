import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 5vh;
`;

export const Table = styled.table`
  text-align: left;
  align: center;
  margin: auto;
  width: 100%;
  cellspacing="0";
  cellpadding="0";
  border-spacing: 0;

  & th {
    padding: 15px 0;
    font-weight: 400;
    color: ${props => props.theme.textColor.gray};
    font-size: 1em;
  }

  & td {
    padding: 20px 0;
    border-bottom: 1px solid #F3F3F3;
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
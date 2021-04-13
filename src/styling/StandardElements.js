import styled from 'styled-components';

export const Button = styled.button `
  padding: 15px 30px;
  width: max-content;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  background-color: ${props => props.theme.colors.peach};
  color: ${props => props.theme.colors.charcoalblack};
  font-size: 0.75em;
    transition: all 0.4s ease 0s;
    
    &:hover {
        color: ${props => props.theme.textColor.gray};
        border: 0.1px solid ${props => props.theme.colors.orange};
        background: white;
    }

    &:focus {
        outline: none;
    }
`;
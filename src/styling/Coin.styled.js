import styled from 'styled-components';
import Elements from './Elements';
import { Link } from 'react-router-dom';

const FixedTd = styled.td`
    position: sticky;
`;
const Button = styled(Elements.Button)``;

const ButtonTd = styled.td`
    text-align: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.textColor.black};

    &:hover {
        color: ${props => props.theme.textColor.gray};
    }
`;

const TickerTd = styled.p`
    color: ${props => props.theme.textColor.gray};
    padding: 0;
    margin: 0;
`;

const Styled = {
    FixedTd,
    Button,
    ButtonTd,
    StyledLink,
    TickerTd
}

export default Styled;
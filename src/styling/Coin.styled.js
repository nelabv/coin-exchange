import styled from 'styled-components';
import Elements from './Elements';
import GeneralStyling from './GeneralStyling';
import { Link } from 'react-router-dom';

const Button = styled(Elements.Button)``;

const ButtonTd = styled.td`
    text-align: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${GeneralStyling.textColor.black};

    &:hover {
        color: ${GeneralStyling.textColor.gray};
    }
`;

const TickerTd = styled.td`
    color: ${GeneralStyling.textColor.gray};
`;

const Styled = {
    Button,
    ButtonTd,
    StyledLink,
    TickerTd
}

export default Styled;
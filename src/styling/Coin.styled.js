import styled from 'styled-components';
import Elements from './Elements';
import GeneralStyling from './GeneralStyling';
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
    color: ${GeneralStyling.textColor.black};

    &:hover {
        color: ${GeneralStyling.textColor.gray};
    }
`;

const TickerTd = styled.p`
    color: ${GeneralStyling.textColor.gray};
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
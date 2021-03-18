import styled from 'styled-components';
import Breakpoints from './Breakpoints';
import { Menu } from '@styled-icons/boxicons-regular/Menu';

const HamburgerMenu = styled(Menu)`
    color: gray;

    @media only screen and (${Breakpoints.tabletMin}) and (${Breakpoints.tabletMax}) {
        height: 30px;
    }

    @media only screen and (${Breakpoints.laptop}) {
        display: none;
    }
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 80vw;
    margin: auto;
    border-bottom: 1px solid #F3F3F3;
`;

const Logo = styled.img`
    max-width: 30%;
    max-height: 30%;
    padding: 10px 0 0 0;
`;

const Styled = {
    Div,
    Logo,
    HamburgerMenu
}

export default Styled;
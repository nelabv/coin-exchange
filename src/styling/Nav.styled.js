/* import styled from 'styled-components';
import { Menu } from '@styled-icons/boxicons-regular/Menu';

const MainContainer = styled.div`
    background-color: white;
`;

const MobileNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    height: 50px;
    margin: auto;
    padding: 20px 0 20px 0;

    @media only screen and (${props => props.theme.breakpoint.tabletMin}) {
        display: none;
    }
`;

const HamburgerMenu = styled(Menu)`
    color: ${props => props.theme.textColor.gray};
`;

const Actions = styled.div`
    display: none;

    @media only screen and (${props => props.theme.breakpoint.tabletMin}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 10vh;
        width: 80vw;
        margin: auto;
        border-bottom: 1px solid #F3F3F3;
    }
`;

const Logo = styled.img`
    max-width: 30%;
    max-height: 30%;
    padding: 10px 0 0 0;
`;

const Styled = {
    MainContainer,
    MobileNav,
    HamburgerMenu,
    Actions,
    Logo,
}

export default Styled; */
import styled from 'styled-components';
import Breakpoints from './Breakpoints';
import Elements from './Elements';
import GeneralStyling from './GeneralStyling';
import BannerImg from '../images/coindata-img-banner.jpg';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import { Star } from '@styled-icons/boxicons-solid/Star';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';

const MainContainer = styled.div`
    padding: 30px 0 0 0;
    background-image: url(${BannerImg});
    background-size: cover;
`;

// ACTIONS FOR MOBILE VIEW -----------------

const MobileActions = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: transparent;
    width: 80vw;
    margin: auto;

    @media only screen and (${Breakpoints.tabletMin}) {
        display: none;
    }
`;

const Back = styled(ArrowBack)`
    color: ${GeneralStyling.palette.offwhite};

    @media only screen and (${Breakpoints.tabletMin}) and (${Breakpoints.tabletMax}) {
        height: 30px;
    }

    @media only screen and (${Breakpoints.laptop}) {
        display: none;
    }
`;

const HamburgerMenu = styled(Menu)`
    color: ${GeneralStyling.palette.offwhite};

    @media only screen and (${Breakpoints.tabletMin}) and (${Breakpoints.tabletMax}) {
        height: 30px;
    }

    @media only screen and (${Breakpoints.laptop}) {
        display: none;
    }
`;

// NAME, ICON, AND TICKER -----------------

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 80vw;
    padding: 50px 0 100px 0;
    margin: auto;
`;

const Icon = styled.img`
    order: 1;
    max-width: 40px;
    max-height: 40px;
`;

const Section = styled.section`
    order: 2;
    display: flex;
    flex-direction: column;
    padding: 0 0 0 20px;
`;

const H1 = styled(Elements.H1)`
    font-size: 20px;
    font-weight: 400;
    color: white;
    padding: 0;
    margin: 0;
`;

const H2 = styled(Elements.H2)`
    font-size: 18px;
    color: white;
    font-weight: 200;
    padding: 0;
    margin: 0;
`;

// MORE DETAILS SECTION -----------------


const MoreInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: white;
    border-top-left-radius: 45px;
    border-top-right-radius: 45px;
    margin: -60px 0 0 0;

    @media only screen and (${Breakpoints.tabletMin}) {
        border-radius: 0;
    }
`;

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px 0 40px 0;
    margin: auto;
    width: 80vw;
`;

const RankBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    width: 120px;
    border-radius: 15px;
    background-color: ${GeneralStyling.textColor.disabled};
`;

const StarIcon = styled(Star)`
    color: yellow;
`;

const Rank = styled.p`
    margin: 0;
    padding: 0;
    font-size: 20px;
    font-weight: 400;
    color: ${GeneralStyling.textColor.gray};
`;

const Description = styled.p`
    order: 2;
    font-size: 16px;
    line-height: 24px;
`;

const ButtonsDiv = styled.div`
    order: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0 20px 0;
    height: 100px;

    @media only screen and (${Breakpoints.tabletMin}) {
        flex-direction: row;
        align-items: center;
        padding: 0;
        width: 250px;
    }
`;

const Button = styled(Elements.Button)`
`;

const Styled = {
    MainContainer,

    MobileActions,
    HamburgerMenu,
    Back,

    Info,
    Icon,
    Section,
    H1,
    H2,

    MoreInfo,
    DetailsContainer,
    RankBox,
    StarIcon,
    Rank,
    Description,
    ButtonsDiv,
    Button,
}

export default Styled;
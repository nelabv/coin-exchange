import styled from 'styled-components';
import GeneralStyling from './GeneralStyling';
import { Stats } from '@styled-icons/boxicons-regular/Stats';

const MainContainer = styled.div`
    padding: 10px 0 90px 0;
    background: linear-gradient(0deg, ${GeneralStyling.palette.red} 0%, ${GeneralStyling.palette.orange} 100%);
`;

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    width: 80vw;
    margin: auto;
`;

const Header = styled.div`
    display: flex;
    padding: 20px 0 20px 0 ;
    align-items: center;
`;

const StatIcon = styled(Stats)`
    padding: 0 10px 0 0;
    color: white;
`;


const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Stat = styled.p`
    padding: 0;
    margin: 0;
    font-size: 20px;
    color: white;
`;

const LastUpdate = styled.p`
    padding: 5px 0 5px 0;
    margin: 0;
    font-size: 12px;
    color: white;
`;

const P = styled.p`
    font-size: 14px;
    color: white;
`;

const Styled = {
    MainContainer,
    Container,

    Header,
    Section,
    LastUpdate,
    StatIcon,
    Stat,
    P
}

export default Styled;
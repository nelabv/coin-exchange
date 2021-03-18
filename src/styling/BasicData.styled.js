import styled from 'styled-components';
import Breakpoints from './Breakpoints';
import Elements from './Elements';
import GeneralStyling from './GeneralStyling';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${GeneralStyling.palette.offwhite};
    padding: 40px 0 20px 20px;

    @media only screen and (${Breakpoints.XSdevice}){
        background-color:pink;
    }
`;

const Icon = styled.img`
    order: 1;
    max-width: 20%;
    max-height: 20%;
`;

const H1 = styled(Elements.H1)`
    font-size: 32px;
    padding: 30px 0 10px 0;
    margin: 0;
`;

const H2 = styled(Elements.H2)`
    font-size: 24px;
    color: ${GeneralStyling.textColor.gray};
    font-weight: 400;
    padding: 0;
    margin: 0;
`;

const P = styled.p`
    font-size: 12px;
`;

const Description = styled.p`
    font-size: 16px;
    line-height: 24px;
`;

/* const Div2 = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 80vw;
    margin: auto;
    padding: 60px 50px 60px 50px;
    border-radius: 15px;
`; */

const Div3 = styled.div`
    order: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: auto;
`;

const ButtonsDiv = styled.div`
    display: flex;
    padding: 20px 0 20px 0;
    justify-content: space-between;
    width: 70%;
`;

const Button = styled(Elements.Button)`
`;

const Section = styled.section`
    display: flex;
    align-items: baseline;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid #A8A8A8;
`;

const Styled = {
    Div,
    Div3,
    ButtonsDiv,
    P,
    Description,
    Section,
    Button,
    H1,
    H2,
    Icon
}

export default Styled;
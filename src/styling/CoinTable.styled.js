import styled from 'styled-components';
import GeneralStyling from './GeneralStyling';
import Breakpoints from './Breakpoints';
import Elements from './Elements';

const Div = styled.div`
    justify-content: space-evenly;
    width: 100%;
    background-color: ${GeneralStyling.palette.offwhite};
    padding: 30px 0 30px 0;

    @media only screen and (${Breakpoints.smartphone}) {
        background-color: white;
        padding: 0;
    }
`;

const ContentDiv = styled.div`
    padding: 0 10px 0 10px;
    width: 80vw;
    margin: auto;
    overflow-x:auto;
    border-radius: 15px;
    background-color: white;
`;

const H2 = styled(Elements.H2)`
    color: ${GeneralStyling.palette.red};
    padding: 0 0 20px 0;
`;

const Table = styled.table `
    text-align: left;
    align: center;
    margin: auto;
    width: 100%;
    padding: 0 10px 0 10px;
    cellspacing="0";
    cellpadding="0";
    border-spacing: 0;

    & th {
        padding: 15px 0 15px 0;
        font-weight: 400;
        color: ${GeneralStyling.textColor.gray};
        font-size: ${GeneralStyling.fontSizes.small};
    }

    & td {
        padding: 20px 0 20px 0;
        border-bottom: 1px solid #F3F3F3;
    }

    @media only screen and (${Breakpoints.tabletMax}){
        & tr:nth-child(even) {
            background-color: #FCFBF8;
    }
`;

const Styled = {
    Div,
    ContentDiv,
    H2,
    Table
}

export default Styled;
import styled from 'styled-components';
import {
        FlexCenter,
        H2
    } from './StyledElements/index';
import Elements from './Elements';

const Div = styled(FlexCenter)`
    background-color: pink;
    padding: 30px 0 50px 0;
`;

const ContentDiv = styled(FlexCenter)`
    width: 85vw;
    margin: auto;
    overflow-x:auto;
    overflow: auto;
    border-radius: 15px;
    background-color: yellow;
`;

const Heading2 = styled(H2)`
    color: ${props => props.theme.colors.red};
    line-height: 36pt;
    text-align: left;
    background-color: blue;
`;

const Table = styled.table `
    text-align: left;
    align: center;
    margin: auto;
    width: 100%;
    cellspacing="0";
    cellpadding="0";
    border-spacing: 0;

    & th {
        padding: 15px 0 15px 0;
        font-weight: 400;
        color: ${props => props.theme.textColor.gray};
        font-size: 12px;
    }

    & td {
        padding: 20px 0 20px 0;
        border-bottom: 1px solid #F3F3F3;
    }

    @media only screen and (${props => props.theme.breakpoint.tabletMin}){
        & tr:nth-child(even) {
            background-color: #FCFBF8;
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
            color: ${props => props.theme.textColor.gray};
            }

        & td {
            padding: 20px 0 20px 0;
            border-bottom: 1px solid #F3F3F3;
            }
    }
`;

const Styled = {
    Div,
    ContentDiv,
    Heading2,
    Table
}

export default Styled;
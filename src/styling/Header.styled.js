import styled from 'styled-components';
import Background from '../images/header-background-img.jpg';
import { FlexCenter,
            H1,
            Subheading
        } from './StyledElements/index';

const MainContainer = styled(FlexCenter)`
    width: 100%;
    padding: 100px 0 30px 0;
    background-color: yellow;
    background: url(${Background}); 
    background-size: cover;
`;

const HeadingContainer = styled(FlexCenter)`
    align-items: flex-start;
    width: 85%;
`;

const Heading = styled(H1)`
    font-size: ${props => props.theme.fontSize.large};
    line-height: 48pt;
    padding: 50px 0 0 0;
    color: white;

    @media only screen and (${props => props.theme.breakpoint.laptop}) {
        font-size: 2.5em;
        padding: 50px 0 0 0;
    }
`;

const SubText = styled(Subheading)`
    font-size: 1em;
    text-align: left;
    color: white;
    padding: 10px 0 50px 0;

    @media only screen and (${props => props.theme.breakpoint.laptop}) {
        font-size: 1.5em;
        line-height: 48pt;
        padding: 30px 0 20px 0;
    }
`;

export {
    MainContainer,
    HeadingContainer,
    Heading,
    SubText
}
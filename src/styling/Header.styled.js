import styled from 'styled-components';
import Breakpoints from './Breakpoints';
import Elements from './Elements';

const BackgroundDiv = styled.div`
    align-items: center;
    width: 100%;
    background-color: black;
`;

const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 8vw 9vw 8vw 9vw;
`;

const H1 = styled(Elements.H1)`
    color: white;
    font-size: 2em;
    order: 1;
    margin: 0;
    padding: 25px 0 25px 0;

    @media only screen and (${Breakpoints.laptop}) {
        font-size: 3em;
    }
`;

const H2 = styled(Elements.H2)`
    color: white;
    font-weight: 200;
    line-height: 24pt;
    order: 2;
    font-size: 1em;

    @media only screen and (${Breakpoints.laptop}) {
        font-size: 2em;
        line-height: 48pt;
    }
`;

const Styled = {
    BackgroundDiv,
    TextDiv,
    H1,
    H2
}

export default Styled;
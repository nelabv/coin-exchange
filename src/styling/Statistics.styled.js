import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 80vw;
    margin: auto;
    background-color: pink;
`;

const StatsDiv = styled.div`
    order: 1;
    width: 65%;
    background-color: yellow;
`;

const SupplyDiv = styled.div`
    order: 2;
    width: 25%;
    background-color: yellow;
`;

const Styled = {
    Div,
    StatsDiv,
    SupplyDiv
}

export default Styled;
import React from 'react';
import styled from 'styled-components';
import { Construction } from '@styled-icons/material/Construction';

const MainContainer = styled.div `
    background-color: #eb4d4b;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`;

const Heading = styled.p`
    font-size: 20px;
    font-weight: 600;
    line-height: 30pt;
    color: white;
    text-align: center;
`; 

const SubText = styled(Heading)`
    font-size: 16px;
    font-weight: 400;
    padding: 0;
    margin: 0;
`;

const ConstructionIcon = styled(Construction)`
    color: white;
`;

export default function WarningMsg(props) {

    return (
        <MainContainer>
            <ConstructionIcon size="40"/>
            <Heading>This section is under development!</Heading>
            <SubText>Some functionalities may not work as intended.</SubText>
        </MainContainer>
    )
} 
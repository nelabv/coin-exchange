import React from 'react';
import styled from 'styled-components';
import GeneralStyling from '../../styling/GeneralStyling';
import { QuestionMarkCircle } from '@styled-icons/heroicons-solid/QuestionMarkCircle';

const Child = styled.div`
    display: flex;
    align-items: center;
    background-color: ${GeneralStyling.palette.orange};
    width: ${props => props.width ? props.width : "100%"};
    height: 100%;
    border-radius: 15px;
`;

const PercentHoverIcon = styled(QuestionMarkCircle)`
    color: white;
    opacity: 50%;
    padding: 0 0 0 10px;
`;

// width: ${props => props.width ? props.width : "100%"};

export default function ChildBar(props) {
    const width = (props.percentage + "%");

    return (
        <Child width = {width}>
            <PercentHoverIcon size="20"/>
        </Child>

    );
} 
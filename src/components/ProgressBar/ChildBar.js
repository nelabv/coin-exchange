import React from 'react';
import styled from 'styled-components';

const Child = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.peach};
  width: ${props => props.width ? props.width : "100%"};
  height: 100%;
  border-radius: 15px;
`;

export default function ChildBar(props) {
  const width = (props.percentage + "%");

  return (
    <Child
      width = {width}>
    </Child>
);
} 
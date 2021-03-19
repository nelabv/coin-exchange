import styled from 'styled-components';
import Elements from './Elements';

const Div = styled.div `
    order: 2;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 150px;
`;

const Login = styled(Elements.HoverableText) `
    order: 1;
`; 

const Signup = styled(Elements.HoverableText) `
    order: 2;
`

const Styled = {
    Div,
    Login,
    Signup
}

export default Styled;
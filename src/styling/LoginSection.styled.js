import styled from 'styled-components';
import Elements from './Elements';
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle';
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
    background-color: white;
`;

const SecondaryContainer = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`;

const UserIcon = styled(UserCircle)`
    color: #ebebeb;
    padding: 10px 0 15px 0;
`;

const H1 = styled(Elements.H1)`
    padding: 0;
    margin: 0;
    font-weight: 600;
`;

const Subheading = styled.p`
    font-size: 14px;
    line-height: 21pt;
    color: ${props => props.theme.textColor.gray};
    text-align: center;
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

// FORM STYLING -------------------------------------------------

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    padding: 20px 0 20px 0;
`;

const InputHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

const Input = styled(Elements.Input)`
    width: 85%;
`;

const ErrorMsg = styled(Elements.ErrorMsgSpan)`
`;

const ButtonHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const Button = styled.input `
    color: white;
    text-decoration: none;
    background-color: ${props => props.theme.colors.orange};
    padding: 10px;
    width: 85%;
    font-family: "Inter", sans-serif;
    font-size: 12px;
    border: none;
    border-radius: 10px;
    transition: all 0.4s ease 0s;
    
    &:hover {
        color: ${props => props.theme.textColor.gray};
        border: 0.1px solid ${props => props.theme.colors.orange};
        background: white;
    }

    &:focus {
        outline: none;
    }
`;

const Links = styled(Link)`
    text-decoration: none;
    padding: 20px 0 20px 0;
    font-size: 14px;
`;

const Styled = {
    UserIcon,
    H1,
    Subheading,
    MainContainer,
    SecondaryContainer,
    InputContainer,

    Form,
    InputHolder,
    Input,
    ErrorMsg,
    Button,
    Links,
    ButtonHolder
}

export default Styled;
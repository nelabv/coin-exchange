import styled from 'styled-components';

// CONTAINERS --------------------------

export const FlexCenter = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const FlexRow = styled(FlexCenter)`
    flex-direction: row;
    justify-content: space-between;
`;

// TEXTS -------------------------------

export const H1 = styled.h1`
    font-size: 36px;
    padding: 0;
    margin: 0;
`;

export const H2 = styled.h2`
    padding: 0;
    margin: 0;
    color: ${props => props.theme.colors.red};
`;

export const Subheading = styled.p`
    line-height: 21pt;
    padding: 0;
    margin: 0;
    color: ${props => props.theme.textColor.gray};
`;

export const HoverableText = styled.p `
    color: ${props => props.theme.textColor.black};

    &: hover {
        animation: hover-animation 200s infinite alternate ease-in-out;
    }
    @keyframes hover-animation {
        0% {
            border-color: white;
            padding-bottom: 0;
          }
          0.2% {
            border-bottom: 3px solid ${props => props.theme.colors.orange};
            padding-bottom: 5px;
          }
    }
`;

export const ErrorMsgSpan = styled.span`
    color: #eb4d4b;
    font-size: 12px;
    padding: 10px 0 10px 0;
`;

// BUTTONS ----------------------------

export const StandardBtn = styled.button `
    color: white;
    text-decoration: none;
    background-color: ${props => props.theme.colors.orange};
    padding: 15px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
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

// INPUT FIELD ------------------------

export const Input = styled.input`
    padding: 10px;
    height: 20px;
    font-family: ${props => props.theme.fontFamily.standard};
    font-size: 14px;
    color: #333333;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.offwhite};
    transition: border .3s ease;
    &:focus {
        outline: none;
        border-color: ${props => props.theme.colors.violet};
    }
`;
import GeneralStyling from './GeneralStyling';
import styled from 'styled-components';

const HoverableText = styled.p `
    color: ${GeneralStyling.textColor.black};
    order: 1;
    &: hover {
        animation: hover-animation 200s infinite alternate ease-in-out;
    }
    @keyframes hover-animation {
        0% {
            border-color: white;
            padding-bottom: 0;
          }
          0.2% {
            border-bottom: 3px solid ${GeneralStyling.palette.orange};
            padding-bottom: 5px;
          }
    }
`;

const H1 = styled.h1`
    color: ${GeneralStyling.textColor.black};
    font-size: ${GeneralStyling.fontSizes.large1};
`;

const H2 = styled.h2`
    color: ${GeneralStyling.textColor.black};
    font-size: ${GeneralStyling.fontSizes.medium0};
`;

const Button = styled.button `
    color: white;
    text-decoration: none;
    background-color: ${GeneralStyling.palette.orange};
    padding: 10px;
    font-family: "Inter", sans-serif;
    font-size: ${GeneralStyling.fontSizes.small};
    border: none;
    transition: all 0.4s ease 0s;
    
    &:hover {
        color: ${GeneralStyling.textColor.gray};
        border: 0.1px solid ${GeneralStyling.palette.orange};
        background: white;
    }

    &:focus {
        outline: none;
}
`;

/* const Button = styled.button`
    background-color: ${palette.violet};
    color: white;
    border: none;
    width: 30%;
    transition: all 0.3s ease;
        &:hover {
        color: #ffffff !important;
        background-color: ${palette.blue};
        transition: all 0.4s ease 0s;
        }
        &:focus {
            outline: none;
        }
`;

/* const Input = styled.input`
    font-family: 'Oxygen', Sans-Serif;
    width: 60%;
    padding: 16px 18px;
    font-size: ${STYLEGUIDE.fontSizeSmall};
    color: #333333;
    border: 1px solid #cccccc;
    transition: border .3s ease;
    &:focus {
        outline: none;
        border-color: ${STYLEGUIDE.mainColorViolet};
    }
`;

 */







/* const Header = styled.section`
    background-color: white;
    height: 720px;
`;

const Banner = styled.div`
    display: flex;
    align-items:center;
    height: 500px;
    width: 80%;
    margin: auto;
    justify-content: space-between;
`;

const H1Holder = styled.div`
    order: 1;
    display:flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 50%;
    height: 80%;
`;

const Subheading = styled.p`
    order: 2;
    font-size: ${STYLEGUIDE.fontSizeMedium2};
    line-height: 2rem;
    color: #333333;
    margin: 0;
    padding: 0;
`;

const InputHolder = styled.div`
    order: 3;
    display: flex;
    justify-content: space-between;
    width: 85%;
`;

const VectorHolder = styled.div`
    order: 2;
    width: 45%;
    height: 100%;
`; */

const Elements = {
    HoverableText,
    H1,
    H2,
    Button
}

export default Elements;
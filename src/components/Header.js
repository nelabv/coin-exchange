import React, { useState } from 'react';
import styled from 'styled-components';
import BannerVectorIllustration from '../images/banner-illustration.png';
import { STYLEGUIDE } from '../StyleGuide';
import { Link } from 'react-router-dom';

const Header = styled.section`
    background-color: white;
    height: 720px;
`;

const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto
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

const H1 = styled.h1`
    color: ${STYLEGUIDE.mainColorViolet};
    font-size: ${STYLEGUIDE.fontSizeLargest};
    line-height: 4.5rem;
    order: 1;
    margin: 0;
    padding: 0;
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

const Input = styled.input`
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
const VectorHolder = styled.div`
    order: 2;
    width: 45%;
    height: 100%;
`;

const GetStartedBtn = styled.button`
    background-color: ${STYLEGUIDE.mainColorViolet};
    color: white;
    Font-Family: 'Oxygen';
    border: none;
    width: 30%;
    transition: all 0.3s ease;
        &:hover {
        color: #ffffff !important;
        background-color: ${STYLEGUIDE.mainColorBlue};
        transition: all 0.4s ease 0s;
        }
        &:focus {
            outline: none;
        }
`;

export default function HeaderDesign(props) {
    const [errorMsg, setErrorMsg] = useState('');
    
    const getUserInput = () => { 
        // Checks if user input is a valid email structure (example@someemail.com)
        const emailCheck= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        const emailInput = document.getElementById('email-input').value;

        if (emailInput === '') {
            setErrorMsg("Please enter an email.");
        } else { 
            const checkEmailValidity = emailCheck.test(emailInput);
            if (checkEmailValidity === false) { 
                setErrorMsg("Please enter a valid email address.")
            } 
        }
    }

    return (
        <Header>
            <Banner>
                <H1Holder>
                    <H1>Buy and sell cryptocurrency</H1>
                    <Subheading>The easiest place to trade now in the palm of your hands.</Subheading>
                </H1Holder>
                <VectorHolder>
                    <Img src={BannerVectorIllustration} alt="Cryptocurrency trading" />
                </VectorHolder>
            </Banner>
        </Header>
    )
} 
import React from 'react';
import styled from 'styled-components';
import Accounts from './Accounts';
import Logo from '../images/logo-placeholder.png';
import { Link } from 'react-router-dom';

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding-top: 50px;
    height: 50px;
    width: 80%;
    margin: auto;
`;

const LogoHolder = styled.div`
    display: flex;
    align-items: center;
    order: 1;
    width: 10%;
    height: 40%;
`;

const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto
`;

export default function HeaderDesign(props) {
    return (
        <NavBar>
            <Link to='/'>
                <LogoHolder>
                    <Img src={Logo} alt="logo placeholder" />
                </LogoHolder>
            </Link>

            <Accounts />
        </NavBar>
    )
} 
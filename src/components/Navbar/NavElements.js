import styled from 'styled-components';
import {CoinStack} from '@styled-icons/boxicons-solid/CoinStack';

export const Nav = styled.nav`
	background-color: white;
	display: flex;
	align-items: center;
	width: 100vw;
	height: 70px;
	position: fixed;
	z-index: 100;
`;

export const Wrapper = styled.div`
	width: 90%;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;    
`;

export const Logo = styled(CoinStack)`
	color:  ${props => props.theme.colors.deepblack};
`;

export const Link = styled.a`
	text-decoration: none;
	color: #333333;
`;
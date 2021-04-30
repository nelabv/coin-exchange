import styled from 'styled-components';

export const Nav = styled.nav`
	background-color: white;
	display: flex;
	align-items: center;
	width: 100vw;
	height: 70px;
	position: fixed;
	z-index: 100;
  box-shadow: 0 2px 2px -2px #DEDEDE;
`;

export const Wrapper = styled.div`
	width: 90%;
  margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between; 
  
  @media only screen and (${props => props.theme.breakpoint.tabletMin}) {
    width: 70%;
  }   
`;

export const Link = styled.a`
	text-decoration: none;
	color: #333333;
`;

export const Logo = styled.p`
  font-family: 'Share Tech Mono', monospace;
  font-weight: 600;
  color: ${props => props.theme.colors.deepblack};
  padding: 0;
  margin: 0;
`;

export const SourceCodeBtn = styled.button`
  padding: 10px 15px;
  background-color: ${props => props.theme.colors.lightgreen};
  border-radius: 10px;
  transition: all 0.4s ease 0s;
  font-family: 'Noto Sans', sans-serif;
  line-spacing: 1px;
  color: white;
  outline: none;
  border: 1px solid  ${props => props.theme.colors.lightgreen};

  &:hover {
    background-color: white;
    color:  ${props => props.theme.colors.lightgreen};
  }
`;
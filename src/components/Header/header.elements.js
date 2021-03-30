import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

export const Nav = styled.nav`
	background: ${({ navbar }) => (navbar !== "/" ? "#141414" : "transparent")};
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 0.5rem calc((100vw - 1300px) / 2);
	z-index: 100;
	position: relative;
`;

export const NavLink = styled(Link)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	& svg {
		margin-right: 15px;
	}
`;

export const Bars = styled(FaBars)`
	display: none;
	color: #fff;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: 40px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtn = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

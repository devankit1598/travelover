import React, { useEffect, useState } from "react";
import { FaWpexplorer } from 'react-icons/fa';
import { menuData } from "../../data/MenuData";
import { Button } from "../Button";
import { Bars, Nav, NavBtn, NavLink, NavMenu } from "./header.elements";

const Header = ({ toggle }) => {
	const [navbar, setNavbar] = useState(false);

	useEffect(() => {
		if (window.location.pathname) {
			setNavbar(window.location.pathname);
		}
	}, []);

	return (
		<Nav navbar={navbar}>
			<NavLink to='/'>
				<FaWpexplorer size={50} />
				TRAVELOVER
			</NavLink>
			<Bars onClick={toggle} />
			<NavMenu>
				{menuData.map((item, index) => (
					<NavLink to={item.link} key={index}>
						{item.title}
					</NavLink>
				))}
			</NavMenu>
			<NavBtn>
				<Button primary='true' round='true' to='/trips'>
					Book a Flight
				</Button>
			</NavBtn>
		</Nav>
	);
};

export default Header;

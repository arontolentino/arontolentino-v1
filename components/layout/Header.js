import React, { useState } from 'react';
import Link from 'next/link';
import HamburgerMenu from 'react-hamburger-menu';
import styled from 'styled-components';
import SectionTitle from '../layout/SectionTitle';

const Section = styled('header')`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 3rem 0;
	position: sticky;
	top: 0;
	background: #fff;
	z-index: 2;
`;

const Hamburger = styled(HamburgerMenu)`
	@media (min-width: 900px) {
		display: none;
	}
`;

const Nav = styled('nav')`
	display: flex;
	width: ${({ mobileMenu }) => (mobileMenu === true ? '100%' : 'auto')};
	background: #fff;
	transition: 0.6s opacity;

	@media (max-width: 900px) {
		position: absolute;
		top: 6rem;
		justify-content: center;
		text-align: center;
		border: 1rem solid #fff;
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.1);
		margin-top: 2rem;
		z-index: 2;
		opacity: ${({ mobileMenu }) => (mobileMenu === true ? '1' : '0')};
		visibility: ${({ mobileMenu }) =>
			mobileMenu === true ? 'visibile' : 'hidden'};
	}
`;

const NavList = styled('ul')`
	display: flex;
	list-style: none;

	a {
		font-size: 1.8rem;
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		margin-left: 3rem;
		text-transform: uppercase;

		@media (max-width: 900px) {
			flex-direction: column;
			padding: 1.5rem 0;
			margin: 0;
		}
	}

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<Section>
			<SectionTitle>
				<h2>Aron Tolentino</h2>
			</SectionTitle>

			<Hamburger
				isOpen={mobileMenu}
				menuClicked={() => {
					setMobileMenu(!mobileMenu);
				}}
				width={25}
				height={18}
				strokeWidth={1.5}
				rotate={0}
				color="black"
				borderRadius={0}
				animationDuration={0.5}
			/>

			<Nav mobileMenu={mobileMenu}>
				<NavList>
					<Link href="/">
						<a>About</a>
					</Link>
					<Link href="/resume">
						<a>Work</a>
					</Link>
					<Link href="/projects">
						<a>Blog</a>
					</Link>
					<Link href="contact">
						<a>Contact</a>
					</Link>
				</NavList>
			</Nav>
		</Section>
	);
};

export default Header;
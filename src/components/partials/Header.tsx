'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LogoNavBar from '@image/logos/hosting.svg';
import NavLink from '@component/navbar/NavLink';
import Link from 'next/link';

import Image from 'next/image';
import appRoutes from '@config/appRoutes.config';
import LanguageSelector from '@component/shared/LanguageSelector';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	const [windowWidth, setWindowWidth] = useState<number | null>(null);
	windowWidth;
	useEffect(() => {
		setWindowWidth(window.innerWidth);

		const links = document.querySelectorAll('li');
		links.forEach(link => {
			link.addEventListener('click', e => {
				e;
				setMenuIsOpen(false);
			});
		});

		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			setMenuIsOpen(false);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<StyledComponent className='wrapper'>
			<div className='container'>
				<div className='logo'>
					<Image src={LogoNavBar} alt='Logo Hosting' />
				</div>
				<button onClick={() => setMenuIsOpen(!menuIsOpen)} className='hamburger'>
					<RxHamburgerMenu />
				</button>
				{menuIsOpen && (
					<nav className='mobile-menu'>
						<ul>
							<li>
								<NavLink href={appRoutes.home}>General</NavLink>
							</li>
							<li>
								<NavLink href={appRoutes.cloudVPS}>Cloud VPS</NavLink>
							</li>
							<li>
								<NavLink href={appRoutes.gameHost}>Game Hosting</NavLink>
							</li>
							<li>
								<NavLink href={appRoutes.cpanel}>Cpanel</NavLink>
							</li>
							<li>
								<NavLink href={appRoutes.blog}>Blog</NavLink>
							</li>
						</ul>
						<ul>
							<ul>
								<li>
									<Link href={appRoutes.signIn}>Sign In</Link>
								</li>
								<li>
									<Link href={appRoutes.signUp}>Sign Up</Link>
								</li>
								<li>
									<Link href=''>FAQ</Link>
								</li>
							</ul>
						</ul>
					</nav>
				)}
				<nav className='desk-menu'>
					<ul>
						<li>
							<NavLink href={appRoutes.home}>General</NavLink>
						</li>
						<li>
							<NavLink href={appRoutes.cloudVPS}>Cloud VPS</NavLink>
						</li>
						<li>
							<NavLink href={appRoutes.gameHost}>Game Hosting</NavLink>
						</li>
						<li>
							<NavLink href={appRoutes.cpanel}>Cpanel</NavLink>
						</li>
						<li>
							<NavLink href={appRoutes.blog}>Blog</NavLink>
						</li>
					</ul>
				</nav>
				<div className='actions'>
					<div className='account-sign'>
						<Link href={appRoutes.signIn}>Sign In</Link>
						<Link href={appRoutes.signUp}>Sign Up</Link>
					</div>
					<LanguageSelector />
				</div>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.header`
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 0;
		.logo {
			flex-shrink: 0;
			z-index: 5;
		}
		/* position: relative; */

		button.hamburger {
			display: none;
			z-index: 5;
			background: transparent;
			border: none;
			padding: 10px;
			svg {
				color: var(--green-color);
				font-size: 2rem;
			}
			@media (max-width: 950px) {
				display: block;
			}
		}
		nav.mobile-menu {
			width: 100%;
			z-index: 4;
			right: 0;
			left: 0;
			padding: 120px 40px 50px;
			position: absolute;
			top: 0px;
			border-radius: 0px 0px 30px 30px;
			background: #0c1a11;
			flex-direction: column;
			display: flex;
			gap: 25px;
			ul {
				flex-direction: column;
				display: flex;
				gap: 15px;
				li {
					a {
						display: block;
						color: #ffffff8b;
						font-size: 1.1rem;
						&:hover {
							color: var(--green-color);
						}
						&.active {
							color: var(--green-color);
						}
					}
				}
				&:last-child li:not(:last-child) a {
					color: var(--green-color);
				}
			}
		}

		nav.desk-menu {
			display: flex;
			align-items: center;
			gap: 100px;
			@media (max-width: 950px) {
				display: none;
			}
			ul {
				display: flex;
				gap: 30px;
				li {
					a {
						white-space: nowrap;
						display: block;
						color: #ffffff8b;
						font-size: 0.9rem;
						&:hover {
							color: var(--green-color);
						}
						&.active {
							color: var(--green-color);
						}
					}
				}
			}
		}

		.actions {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 10px;
			@media (max-width: 950px) {
				display: none;
			}
			.account-sign {
				display: flex;
				gap: 20px;
				a {
					display: block;
					border: 1px solid #00ff19;
					border-radius: 50px;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 8px 30px;
					font-weight: 800;
					font-size: 12px;
					&:nth-child(2) {
						background: #00ff19;
						color: #0f4a00;
					}
				}
			}

			.language-selector {
				@media (max-width: 1050px) {
					display: none;
				}
			}
		}
	}
`;
export default Header;

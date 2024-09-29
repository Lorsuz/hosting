'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@image/logos/hosting.svg';

const Footer = () => {
	return (
		<StyledComponent className='wrapper'>
			<div className='container wrapper'>
				<div className='message'>
					<div className='img'>
						<Image src={Logo} alt='Logo host' />
					</div>
					<p>
						Lorem ipsum dolor sit amet. Ex numquam expedita id architecto Ex numquam expedita id architecto esse non explicabo quia non enim voluptas qui optio odio qui optio ipsa.
						Lorem ipsum dolor sit amet.
					</p>
				</div>
				<div className='menu'>
					<div>
						<span>Lorem Ipsum</span>
						<ul>
							<Link href='/'>Lorem ipsum</Link>
							<Link href='/'>Lorem ipsum</Link>
							<Link href='/'>Lorem ipsum</Link>
							<Link href='/'>Lorem ipsum</Link>
						</ul>
					</div>
					<div>
						<span>Lorem Ipsum</span>
						<ul>
							<Link href='/'>Lorem ipsum</Link>
							<Link href='/'>Lorem ipsum</Link>
							<Link href='/'>Lorem ipsum</Link>
							<Link href='/'>Lorem ipsum</Link>
						</ul>
					</div>
					<div>
						<span>Lorem Ipsum</span>
						<ul>
							<Link href='/'>Lorem ipsum</Link>
							<Link href='/'>Lorem ipsum</Link>
							<Link href='/'>Lorem ipsum</Link>
							<Link href='/'>Lorem ipsum</Link>
						</ul>
					</div>
				</div>
				<div className='links'>
					<Link href='/copyright' className='company'>
						Company name
					</Link>
					<p>All rights reserved.</p>
					<Link href='/privacy'>Privacy</Link>
					<Link href='/terms-and-security'>Terms and Security</Link>
				</div>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.footer`
	.container {
		gap: 30px;
		.message {
			grid-column: 1/6;
			.img {
				margin-bottom: 20px;
			}

			p {
				color: #fff;
				text-align: justify;
				font-size: 12px;
				font-weight: 300;
				opacity: 20%;
			}
		}

		.menu {
			display: flex;
			gap: 5vw;
			justify-content: end;
			opacity: 20%;
			backdrop-filter: blur(10px);
			grid-column: 6/13;

			span {
				margin-bottom: 10px;
				font-size: 0.71925rem;
				font-weight: 700;
			}

			ul {
				display: flex;
				flex-wrap: wrap;
				flex-direction: column;
				gap: 0.35rem;
				color: #fff;
				font-size: 0.71925rem;
				font-weight: 300;
			}
		}

		.links {
			display: flex;
			flex-wrap: wrap;

			grid-column: 1/13;
			text-align: center;
			gap: 2rem;
			font-size: 0.71925rem;
			justify-content: center;
			padding: 3rem 0 1.5rem 0;
			.company {
				color: var(--green-color);
			}
		}
		@media (max-width: 830px) {
			.message,
			.menu {
				grid-column: 1/13;
				.img {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				p {
					text-align: center;
				}
			}
			.menu {
				justify-content: center;
			}
		}
	}
`;
export default Footer;

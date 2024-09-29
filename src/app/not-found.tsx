'use client';
import Link from 'next/link';
import Header from '@partial/Header';
import Footer from '@partial/Footer';
import styled from 'styled-components';
import Image from 'next/image';
import ImageCat from '@image/site/cpanel-cat.png';

export default function NotFound() {
	return (
		<>
			<Header />
			<main>
				<StyledComponent className='wrapper'>
					<div className='container'>
						<h1>404</h1>
						<h2>Oops! Page Not Found</h2>
						<p>We couldn't find the page you were looking for.</p>
						<div className='img'>
							<Image src={ImageCat} alt=''></Image>
						</div>
						<Link href='/'>Return Home</Link>
					</div>
				</StyledComponent>
			</main>
			<Footer />
		</>
	);
}

const StyledComponent = styled.section`
	padding: 100px 0;

	.container {
		grid-column: 2/12;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	h1 {
		font-size: 7rem;
		font-weight: 100;
		text-align: center;
		font-family: serif;
	}
	h2 {
		font-size: 2rem;
		margin-bottom: 10px;
		text-align: center;

		color: var(--green-color);
	}

	p {
		font-size: 1.2rem;
		margin-bottom: 10px;
		color: #a7a7a7;
		text-align: center;
	}
	.img {
		max-width: 800px;
		img {
			width: 100%;
			height: 100%;
			object-fit: scale-down;
		}
	}

	a {
		font-size: 1.2rem;
		color: var(--green-color);
		border: none;
		border-radius: 15px 0;
		padding: 10px 50px;
		text-decoration: none;
		transition: background-color 0.3s ease;
		display: block;
		border: 1px solid var(--green-color);

		&:hover {
			color: var(--white-color);
			background-color: var(--dark-green-color);
		}
	}
`;

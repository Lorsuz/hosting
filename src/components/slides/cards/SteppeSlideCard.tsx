import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Card } from '@class/card';
import Image from 'next/image';

const SlideCard = () => {
	useEffect(() => {
		const swiper: any = document.querySelector('#swiper');

		let cardCount = 0;

		const urls = [
			'https://source.unsplash.com/random/1000x1000/?sky',
			'https://source.unsplash.com/random/1000x1000/?landscape',
			'https://source.unsplash.com/random/1000x1000/?ocean',
			'https://source.unsplash.com/random/1000x1000/?moutain',
			'https://source.unsplash.com/random/1000x1000/?forest'
		];

		function appendNewCard() {
			const card = new Card({
				imageUrl: urls[cardCount % 5],
				onDismiss: appendNewCard
			});
			swiper.append(card.element);
			cardCount++;

			const cards = swiper.querySelectorAll('.card:not(.dismissing)');
			cards.forEach((card: any, index: any) => {
				card.style.setProperty('--i', index);
			});
		}

		for (let i = 0; i < 2; i++) {
			appendNewCard();
		}
	}, []);

	return (
		<StyledComponent className='wrapper'>
			<div id='swiper'></div>
		</StyledComponent>
	);
};
const StyledComponent = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;

	body {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	#swiper {
		width: 300px;
		aspect-ratio: 2 / 3;
		perspective: 1000px;
		perspective-origin: center 50%;
		transform-style: preserve-3d;
		position: relative;
	}

	.card {
		width: 100%;
		height: 100%;
		position: absolute;
		border-radius: 20px;
		overflow: hidden;
		transform: translateZ(calc(-30px * var(--i))) translateY(calc(-20px * var(--i))) rotate(calc(-4deg * var(--i)));
		filter: drop-shadow(2px 2px 20px rgba(0, 0, 0, 0.5));
		backdrop-filter: blur(10px);
		cursor: pointer;
		user-select: none;
		transition: transform 0.5s;
		padding: 30px;
		border: 1px solid #454545c0;
		z-index: 5;

		h3 {
			color: #00ff19;
			font-family: Inter;
			font-size: 20px;
			font-weight: 700;
			margin-bottom: 15px;
		}
		p {
			color: rgba(255, 255, 255, 0.5);
			text-align: justify;
			font-family: Inter;
			font-size: 16px;
			font-weight: 400;
			margin-bottom: 20px;
		}
		ul {
			li {
				color: rgba(255, 255, 255, 0.5);
				text-align: justify;
				font-family: Inter;
				font-size: 16px;
				font-weight: 400;
				list-style: circle;
				list-style-type: disc;
				list-style-position: inside;
				margin: 20px 0;
			}
		}
	}
	// .card img {
	// 	width: 100%;
	// 	height: 100%;
	// 	object-fit: cover;
	// 	object-position: 50% 50%;
	// }

	@keyframes animation1 {
		0%,
		100% {
			opacity: 0.2;
		}

		50% {
			opacity: 1;
		}
	}

	@keyframes animation2 {
		0%,
		100% {
			opacity: 0.2;
		}

		50% {
			opacity: 1;
		}
	}
`;
export default SlideCard;

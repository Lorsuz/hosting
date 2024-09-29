import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import SteppeSlideCard from '@component/slides/cards/SteppeSlideCard';
import Saturn from '@image/site/saturn.png';
import Image from 'next/image';
import ButtonMainTheme from '@component/buttons/ButtonMainTheme';

const SteppeSlideSection = ({ title, text, link }: { title: string; text: string; link: string }) => {
	return (
		<StyledComponent className='wrapper'>
			<div className='container wrapper'>
				<div className='slide'>
					<SteppeSlideCard></SteppeSlideCard>
					{/* <div className="img">
						<Image src={Saturn} alt='' />
					</div> */}
				</div>
				<div className='text'>
					<h1>{title}</h1>
					<p>{text}</p>
					<ButtonMainTheme href={link}></ButtonMainTheme>
				</div>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.section`
	.container {
		gap: 150px 20px;
		.slide {
			grid-column: 1/7;
			background: url(${Saturn.src}) no-repeat;
			background-position: center;
			background-size: contain;
			display: flex;
			align-items: center;
			justify-content: center;
			.img {
				position: relative;
				display: flex;
				align-items: center;
				max-height: 600px;
				justify-self: center;
				img {
					width: 130%;
					height: 100%;
					object-fit: scale-down;
				}
			}
		}
		.text {
			grid-column: 7/13;

			display: flex;
			flex-direction: column;
			grid-row: 1 / 2;
			justify-content: center;
			z-index: 3;
			align-items: end;
			h1 {
				color: #00ff19;
				margin-bottom: 20px;
				font-family: Inter;
				font-size: 32px;
				font-weight: 800;
			}
			p {
				color: rgba(255, 255, 255, 0.75);
				font-family: Inter;
				margin-bottom: 30px;
				text-align: right;
				font-size: 16px;
				font-weight: 400;
				line-height: 130%; /* 18.2px */
			}
			a {
				border-radius: 59.719px;
				border: 0.701px solid #00ff1a;
				background: rgba(38, 64, 47, 0.25);
				backdrop-filter: blur(2.4684054851531982px);
				color: #00ff38;
				text-align: center;
				padding: 10px 50px;
				font-family: Inter;
				font-size: 14px;
				font-weight: 500;
			}
		}

		@media (max-width: 800px) {
			.slide,
			.text {
				grid-column: 1/13;
			}
		}
	}
`;
export default SteppeSlideSection;

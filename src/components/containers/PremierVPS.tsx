import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import ButtonMainTheme from '@component/buttons/ButtonMainTheme';

const ImageContainer = (image: any) => (
	<div className='img'>
		<div className='img'>
			<Image src={image} alt='' />
			<div className='gradient'></div>
		</div>
	</div>
);
const PremierVPS = ({
	subTitle = '',
	title = '',
	text,
	link,
	image,
	side = 'default',
	button = true
}: {
	subTitle?: string;
	title?: string;
	text: string;
	link?: string;
	image: any;
	side?: 'default' | 'inverted';
	button?: boolean;
}) => {
	const [hasTitle] = useState(title !== '');
	return (
		<StyledComponent $side={side} $hasTitle={hasTitle} className='wrapper'>
			<div className='container wrapper'>
				{side === 'default' && ImageContainer(image)}
				<div className='text'>
					<h2>{subTitle}</h2>
					<h1>{title}</h1>
					<p>{text}</p>
					{button && <ButtonMainTheme href={link} />}
				</div>
				{side === 'inverted' && ImageContainer(image)}
			</div>
		</StyledComponent>
	);
};

const StyledComponent = styled.section<{ $side: 'default' | 'inverted'; $hasTitle: boolean }>`
	.container {
		gap: 50px 5px;

		.text {
			display: flex;
			flex-direction: column;
			grid-row: 1 / 2;
			justify-content: center;
			z-index: 3;
			@media (max-width: 1115px) {
				grid-column: 1 / 13;
				h2,
				h1,
				p {
					text-align: center;
				}
			}
			h2 {
				font-family: Inter;
				font-size: 24px;
				font-weight: 700;

				color: ${({ $hasTitle }) => ($hasTitle ? '#fff' : '#00ff19')};
			}
			h1 {
				color: #00ff19;
				margin-bottom: 20px;
				font-family: Inter;
				font-size: 48px;
				font-weight: 800;
				text-transform: uppercase;
				@media (max-width: 1350px) {
					font-size: 40px;
				}
				@media (max-width: 1115px) {
					font-size: 40px;
				}
			}
			p {
				color: rgba(255, 255, 255, 0.75);
				font-family: Inter;
				margin-bottom: 30px;
				font-size: 16px;
				font-weight: 400;
				@media (max-width: 1115px) {
					margin-bottom: 50px;
				}
			}
		}
		.img {
			/* overflow: hidden; */
			position: relative;
			display: flex;
			align-items: center;
			max-height: 600px;
			justify-self: center;

			img {
				width: 120%;
				height: 100%;
				object-fit: scale-down;
			}
			.gradient {
				background: linear-gradient(180deg, #01090100, #010901);
				height: 100%;
				position: absolute;
				bottom: 0;
				left: 0;
				z-index: 2;
				width: 120%;
			}
			@media (max-width: 1115px) {
				grid-column: 1 / 13;
				max-width: 700px;
				img,
				.gradient {
					width: 100%;
				}
			}
		}
		@media (min-width: 1115px) {
			font-size: 40px;
			${({ $side }) =>
				$side === 'default'
					? `
							.img {
								grid-column: 7 / 13;
							}
							.text {
								grid-column: 1 / 7;
								align-items: start;

							}
						`
					: `
							.img {
								grid-column: 1 / 7;
							}
							.text {
								grid-column: 7 / 13;
								align-items: end;
								p{
									text-align: right;
								}
							}
						`}
		}
	}
`;

export default PremierVPS;

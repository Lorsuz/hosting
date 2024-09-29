import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Star from '@image/site/Star.png';
import GameCastel from '@image/site/game-castle-logo.png';
import { useTranslation } from 'react-i18next';

const Item = ({ title, text }: { title: string; text: string }) => {
	return (
		<li>
			<div className='img'>
				<Image src={Star} alt=''></Image>
			</div>
			<div className='text'>
				<h2>{title}</h2>
				<p>{text}</p>
			</div>
		</li>
	);
};

const CustomHosting = () => {
	const { t } = useTranslation();
	return (
		<StyledComponent className='wrapper'>
			<div className='container wrapper'>
				<div className='text'>
					<h1>{t('customHosting.title')}</h1>
					<p>{t('customHosting.paragraph')}</p>
				</div>
				<div className='img'>
					<Image src={GameCastel} alt=''></Image>
				</div>
				<ul>
					{Array.from({ length: 3 }).map((_, i) => {
						return <Item key={i} title={t(`customHosting.cards.${i}.title`)} 
						text={t(`customHosting.cards.${i}.paragraph`)}></Item>;
					})}
				</ul>
			</div>
		</StyledComponent>
	);
};

const StyledComponent = styled.section`
	.container {
		gap: 20px;
		/* background: #fff; */

		> .text {
			grid-column: 1/6;
			@media (max-width: 1190px) {
				grid-column: 1/13;
				h1,
				p {
					text-align: center;
				}
			}

			h1 {
				color: #edeff2;
				font-family: Inter;
				font-size: 42px;
				font-weight: 600;
				line-height: 130%; /* 33.357px */
				margin-bottom: 20px;
				@media (max-width: 500px) {
					font-size: 32px;
				}
			}
			p {
				color: rgba(243, 246, 244, 0.55);
				font-family: Inter;
				font-size: 16px;
				font-weight: 400;
				line-height: 130%; /* 15.636px */
			}
		}
		> .img {
			grid-column: 6/13;
			@media (max-width: 1190px) {
				grid-column: 1/13;
			}
			img {
				object-fit: scale-down;
				width: 100%;
				height: 100%;
			}
		}
		ul {
			grid-column: 1/13;
			display: grid;
			justify-content: center;
			justify-items: center;
			align-content: center;
			align-items: center;
			gap: 20px;
			grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));

			li {
				display: flex;
				justify-content: center;
				align-items: center;

				gap: 10px;
				width: 100%;

				.img {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 100%;
					@media (max-width: 420px) {
						display: none;
					}
					img {
						object-fit: scale-down;
						height: 100%;
					}
				}
				.text {
					height: 100%;
					display: flex;
					justify-content: center;
					flex-direction: column;
					h2 {
						color: #f3f6f4;
						font-family: Inter;
						font-size: 20px;
						font-weight: 700;
						line-height: 130%; /* 16.678px */
						margin-bottom: 10px;
					}
					p {
						color: rgba(243, 246, 244, 0.55);
						font-family: Inter;
						font-size: 16px;
						font-weight: 400;
						line-height: 130%; /* 12.509px */
					}
				}
			}
		}
	}
`;

export default CustomHosting;

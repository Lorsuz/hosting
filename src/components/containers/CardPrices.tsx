import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Corrigindo a importação do CSS
import 'swiper/css/navigation'; // Importando o CSS de navegação
import 'swiper/css/pagination'; // Importando o CSS de paginação
import { Navigation, Pagination } from 'swiper/modules';

const Cards = ({ title, text, image, price, link }: { title: string; text: string; image: any; price: number; link: string }) => {
	return (
		<>
			{link == '' ? (
				<li>
					<h2>{title}</h2>
					<p>{text}</p>
					<div className='img'>
						<Image src={image} alt=''></Image>
					</div>
					<button>
						<span className='price'>{price}</span>
						<span className='per'>/month</span>
						<div className='icon'>
							<FaPlus></FaPlus>
						</div>
					</button>
				</li>
			) : (
				<Link href={link}>
					<h2>{title}</h2>
					<p>{text}</p>
					<div className='img'>
						<Image src={image} alt=''></Image>
					</div>
					<button>
						<span className='price'>{price}</span>
						<span className='per'>/month</span>
						<div className='icon'>
							<FaPlus></FaPlus>
						</div>
					</button>
				</Link>
			)}
		</>
	);
};

const CardPrices = ({ title, text, cards, link = '' }: { title: any; text: any; cards: any; link?: string }) => {
	return (
		<StyledComponent className='wrapper'>
			<div className='container'>
				<h1>{title}</h1>
				<p>{text}</p>
				<Swiper
					// centeredSlides={true}

					spaceBetween={0}
					slidesPerView={1}
					// loop={true}
					breakpoints={{
						740: {
							slidesPerView: 2,
							spaceBetween: 30
						},
						1210: {
							slidesPerView: 3,
							spaceBetween: 50
						},
						1500: {
							slidesPerView: 4,
							spaceBetween: 50
						}
					}}
				>
					{cards.map((card: any, index: number) => (
						<SwiperSlide key={index}>
							<Cards title={card.title} text={card.text} image={card.image} price={card.price} link={card.link}></Cards>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.section`
	> .container {
		/* display: flex; */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		> h1 {
			color: #00ff19;
			text-align: center;
			text-shadow: 0px 0px 11.8px rgba(0, 255, 25, 0.05);
			font-family: Inter;
			font-size: 32px;
			font-weight: 700;
			line-height: 130%; /* 26px */
			margin-bottom: 20px;
		}
		> p {
			color: rgba(255, 255, 255, 0.75);
			font-family: Inter;
			font-size: 16px;
			font-weight: 400;
			line-height: 130%; /* 15.6px */
			text-align: center;
			margin-bottom: 40px;
		}
		.swiper {
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
			/* gap: 25px; */
			/* flex-wrap: wrap; */
			.swiper-slide {
				display: flex;
				align-items: center;
				justify-content: center;
			}
			li,
			a {
				width: 250px;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				border: 1px solid #575757;
				background: rgb(255, 255, 255, 0.12);
				border-radius: 20px;
				padding: 25px;
				box-sizing: content-box;
				border-radius: 15.845px;
				border: 0.836px solid rgba(255, 255, 255, 0.12);
				background: linear-gradient(0deg, rgba(12, 26, 17, 0.25) 0%, rgba(12, 26, 17, 0.25) 100%),
					linear-gradient(154deg, rgba(255, 255, 255, 0) -42.77%, rgba(255, 255, 255, 0.01) 47.06%);
				backdrop-filter: blur(8.350000381469727px);
				&:hover {
					border-color: #00ff19;
				}
				h2 {
					color: #00ff19;
					text-shadow: 0px 0px 6.014px rgba(0, 255, 56, 0.5);
					font-family: Inter;
					font-size: 18px;
					font-weight: 700;
					height: 2lh;
					text-align: center;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom: 15px;
				}
				p {
					color: #6a6a6a;
					text-align: center;
					font-family: Inter;
					font-size: 14px;
					font-weight: 500;
					margin-bottom: 10px;
					height: 2lh;
				}
				.img {
					width: 100%;
					height: 150px;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 20px;
					img {
						width: 100%;
						height: 100%;
						object-fit: scale-down;
					}
				}
				button {
					margin: 0 auto;
					border: 1px solid #00ff1a;
					border-radius: 100px;
					padding-left: 40px;
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 10px;
					.price {
						color: #f6f6f6;
						font-family: Inter;
						font-size: 16px;
						font-weight: 700;
					}
					.per {
						color: #c2c2c2;
						font-family: Inter;
						font-size: 10px;
						font-weight: 400;
					}
					.icon {
						width: 40px;
						aspect-ratio: 1;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 50%;
						background: #00ff1a;
						font-size: 1.1rem;
						path {
							color: #000000;
						}
					}
				}
			}
		}
	}
`;
export default CardPrices;

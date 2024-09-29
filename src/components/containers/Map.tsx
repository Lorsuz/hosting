import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import brazil from '@image/site/Brazil.png';
import ukraine from '@image/site/ukraine.png';
import germany from '@image/site/germany.png';
import malaysia from '@image/site/malaysia.png';
import MapChart from '@component/maps/MapChart';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/autoplay'; 
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const Map = () => {
	const { t } = useTranslation();
	return (
		<StyledComponent className='wrapper'>
			<div className='container'>
				<h1 dangerouslySetInnerHTML={{ __html: t('map.title') }} />
				<p>{t('map.paragraph')}</p>
				<div className='img'>
					{/* <Image src={map} alt=''></Image> */}
					<MapChart></MapChart>
				</div>
				<Swiper
					

					spaceBetween={0}
					slidesPerView={2}
					loop={true}
					autoplay={{delay: 1000}}
					breakpoints={{
						600: {
							slidesPerView: 3,
							spaceBetween: 0
						},
						750: {
							slidesPerView: 4,
							spaceBetween: 50
						}
					}}
				>
					<SwiperSlide>
						<div className='img'>
							<Image src={germany} alt=''></Image>
						</div>
						<span>{t('dictionary.germany')}</span>
						<div className='dot'></div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='img'>
							<Image src={brazil} alt=''></Image>
						</div>
						<span>{t('dictionary.brazil')}</span>
						<div className='dot'></div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='img'>
							<Image src={malaysia} alt=''></Image>
						</div>
						<span>{t('dictionary.malaysia')}</span>
						<div className='dot'></div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='img'>
							<Image src={ukraine} alt=''></Image>
						</div>
						<span>{t('dictionary.ukraine')}</span>
						<div className='dot'></div>
					</SwiperSlide>
					</Swiper>

			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.section`
	.container {
		h1 {
			color: #fff;
			text-align: center;
			font-family: Inter;
			font-size: 24px;
			font-weight: 400;
			line-height: 130%; /* 26px */
			margin-bottom: 20px;
			span {
				color: #00ff38;
			}
		}
		p {
			text-align: center;
			color: rgba(255, 255, 255, 0.75);
			font-family: Inter;
			font-size: 14px;
			font-weight: 400;
			line-height: 130%; /* 15.6px */
		}
		> .img {
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				width: 100%;
				height: 100%;
				filter: drop-shadow(0px 0px 3px rgb(0, 255, 55));
			}
		}

		.swiper {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 50px;
			/* flex-wrap: wrap; */
			/* margin-top: -7vw; */
			.swiper-slide {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 10px;
				border-radius: 7px;
				border: 1px solid rgba(0, 255, 26, 0.04);
				background: rgba(36, 37, 43, 0.2);
				padding: 8px 20px;
				.img {
					img {
					}
				}
				span {
				}
				.dot {
					width: 8px;
					background: rgb(0, 255, 56);
					aspect-ratio: 1;
					border-radius: 50%;
				}
			}
		}
	}
`;
export default Map;

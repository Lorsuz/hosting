'use client';
import React from 'react';
import styled from 'styled-components';

import Cover from '@container/Cover';
import CardPrices from '@container/CardPrices';
import PremierVPS from '@container/PremierVPS';
import SteppeSlideSection from '@container/SteppeSlideSection';
//
import Map from '@container/Map';
import MostPopularBlogPosts from '@component/containers/MostPopularBlogPosts';
import Faq from '@container/Faq';
import CustomPlans from '@container/CustomPlans';
import { cardsPricesCpuCloudVPS, premierVPSSections } from '@constant/data/generalPageData';
import PremierVPSImage from '@image/site/server-vps-hosting.png';

import CoverImage from '@image/site/cpu-cloud-vps.png';
import Clock from '@image/site/clock.png';

const CloudVPS = () => {
	return (
		<StyledComponent>
			<Cover
				title={'Cloud <span>VPS</span>'}
				text='Discover the ultimate VPS hosting solution for your online ventures! Our feature-rich VPS services guarantee unparalleled performance, rock-solid security, and seamless scalability.'
				image={CoverImage}
			/>

			<CardPrices
				title='With our Cloud VPS, enjoy superior performance and security'
				text='Learn about our top-notch Cloud VPS options. incredibly quick, safe, and adaptable to your specific hosting requirements.'
				cards={cardsPricesCpuCloudVPS}
			></CardPrices>

			<PremierVPS
				subTitle={'Our server, your business'}
				text={
					'With our premium Cloud VPS services, you may grow your company to new heights. Gain unparalleled scalability and lightning-fast performance to support your expansion. With our strong safeguards, you can be sure that your data is secure.'
				}
				image={PremierVPSImage}
				side='default'
			></PremierVPS>

			<SteppeSlideSection
				title='Why [Name]&#39;s VPS?'
				text='Choosing our VPS means getting exceptional performance, flexibility, and security. It is the perfect hosting solution for you, with lightning-fast speeds, effortless scalability, and unrivaled data security. Make the wise option today!'
				link=''
			></SteppeSlideSection>
			<PremierVPS
				title={'Start in minutes'}
				text={
					'In minutes, you will be immersed in the world of gaming. Using our Game Hosting service, you can quickly and easily deploy your game server. Enjoy lightning-fast setup, secure hosting, and completely configurable options in only a few minutes of getting started. Dive right into your favorite games and enjoy the thrill of immediate deployment.'
				}
				image={Clock}
				side='default'
				button={false}
			></PremierVPS>

			<Map></Map>
			<CustomPlans></CustomPlans>
			<MostPopularBlogPosts></MostPopularBlogPosts>
			<Faq></Faq>
		</StyledComponent>
	);
};
const StyledComponent = styled.main``;
export default CloudVPS;

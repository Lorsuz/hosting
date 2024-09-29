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
import { cardsPricesCastelGameHosting, premierVPSSections } from '@constant/data/generalPageData';

import CoverImage from '@image/site/castle-game-hosting.png';
import PremierVPSImage from '@image/site/character2-game-host.png';
import Clock from '@image/site/clock.png';

const GameHost = () => {
	return (
		<StyledComponent>
			<Cover
				title={'GAME <span>HOST</span>'}
				text='Your doorway to unmatched scalability and performance in the online world. Our Cloud VPS provides dependable and adaptable support for your digital adventure, with lightning-fast speeds and unwavering security.'
				image={CoverImage}
			/>
			<CardPrices
				title='Browse Our Elite Game Hosting Solutions'
				text='Examine our top-notch game hosting offering incredibly quick, safe, and completely adaptable to your gameplay requirements.'
				cards={cardsPricesCastelGameHosting}
			></CardPrices>

			<PremierVPS
				subTitle={'Best lag-free & reliable servers'}
				text={
					'Level up your gaming experience with our premium game hosting service! Enjoy lag-free performance, unparalleled reliability, and 24/7 support. Dominate the competition with our powerful servers tailored for gamers. Join the ranks of satisfied gamers and start your adventure today!'
				}
				image={PremierVPSImage}
				side='default'
			></PremierVPS>
			<SteppeSlideSection
				title='Why [Name]&#39;s Game Hosting?'
				text='It is the ideal option for hosting your gaming servers because of its great data protection, smooth scalability, and lightning-fast speeds. Join us today to enhance your gaming experience!'
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
export default GameHost;

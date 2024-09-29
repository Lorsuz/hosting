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
import { cardsPricesCpanelHost, premierVPSSections } from '@constant/data/generalPageData';
import PremierVPSImage from '@image/site/cpanel-cat.png';
import Clock from '@image/site/clock.png';

import CoverImage from '@image/site/cpanel-host-outside.png';

const Cpanel = () => {
	return (
		<StyledComponent>
			<Cover
				title={'CPANEL <span>HOSTING</span>'}
				text='Using our cPanel Hosting, administer websites more easily. Take advantage of simple controls over your internet visibility, strong security, and round-the-clock assistance.'
				image={CoverImage}
			/>

			<CardPrices
				title='Experience hassle-free website administration with our cPanel Hosting'
				text='Examine our top-notch cPanel hosting offering. incredibly quick, safe, and completely adaptable to your website is requirements. Boost your internet visibility right now.'
				cards={cardsPricesCpanelHost}
			></CardPrices>
			<PremierVPS
				subTitle={'Unleash your website is potential'}
				text={
					'Simplify website management with our top-notch cPanel hosting service! Enjoy intuitive control, seamless performance, and round-the-clock support. Take charge of your online presence with cPanel is powerful features. Start managing your website effortlessly today!'
				}
				image={PremierVPSImage}
				side='default'
			></PremierVPS>
			<SteppeSlideSection
				title='Why [Name]&#39;s cPanel?'
				text='Unmatched dependability, security, and ease of use characterize our cPanel service. It is the ideal option for easily maintaining your website because of its user-friendly controls, dependable stability, and strong security measures. Take use of our cPanel service now to see the difference!'
				link=''
			></SteppeSlideSection>
			<PremierVPS
				title={'Start in minutes'}
				text='In minutes, you will be immersed in the world of gaming. Using our Game Hosting service, you can quickly and easily deploy your game server. Enjoy lightning-fast setup, secure hosting, and completely configurable options in only a few minutes of getting started. Dive right into your favorite games and enjoy the thrill of immediate deployment.'
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
export default Cpanel;

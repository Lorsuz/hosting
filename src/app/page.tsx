'use client';
import MostPopularBlogPosts from '@component/containers/MostPopularBlogPosts';
import CardPrices from '@container/CardPrices';
import Cover from '@container/Cover';
import CustomHosting from '@container/CustomHosting';
import CustomPlans from '@container/CustomPlans';
import Faq from '@container/Faq';
import Footer from '@partial/Footer';
import Header from '@partial/Header';
import Map from '@container/Map';
import PremierVPS from '@container/PremierVPS';
import styled from 'styled-components';
import { cardsPrices, premierVPSSections } from '@constant/data/generalPageData';
import CoverImage from '@image/site/astronaut-cat-1.png';

import { useTranslation } from 'react-i18next';

export default function Home() {
	const { t } = useTranslation();

	return (
		<>
			<Header></Header>
			<StyledComponent>
				<Cover title={t('cover.title')} text={t('cover.paragraph')} image={CoverImage}></Cover>
				<CustomPlans></CustomPlans>
				<CardPrices title={t('dictionary.joinNow')} text={t('cardPrices.paragraph')} cards={cardsPrices}></CardPrices>
				<Map></Map>
				<CustomHosting></CustomHosting>
				<MostPopularBlogPosts></MostPopularBlogPosts>
				{premierVPSSections.map((section: any, index: number) => (
					<PremierVPS
						key={index}
						title={section.title}
						subTitle={t(`premierVPS.${index}.subtitle`)}
						text={t(`premierVPS.${index}.paragraph`)}
						image={section.image}
						side={section.side}
						link={section.link}
					></PremierVPS>
				))}
				<Faq></Faq>
			</StyledComponent>
			<Footer></Footer>
		</>
	);
}
const StyledComponent = styled.main``;

'use client';
import React from 'react';
import styled from 'styled-components';
import Featured from '@container/Featured';
import Latest from '@container/Latest';
import Faq from '@container/Faq';
import CardPrices from '@container/CardPrices';

import { cardsPrices } from '@constant/data/generalPageData';

const Blog = () => {
	return (
		<StyledComponent>
			<Featured></Featured>
			<Latest></Latest>
			<CardPrices title='Join now' text='Unlock unparalleled control and flexibility with our VPS hosting solutions' cards={cardsPrices}></CardPrices>
			<Faq></Faq>
		</StyledComponent>
	);
};
const StyledComponent = styled.main``;
export default Blog;

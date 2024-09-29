'use client';
import React from 'react';
import styled from 'styled-components';
import Faq from '@container/Faq';
import CardPrices from '@container/CardPrices';
import MostPopularBlogPosts from '@container/MostPopularBlogPosts';
import BlogPostArticle from '@container/BlogPostArticle';

import { cardsPrices } from '@constant/data/generalPageData';

const BlogPost = () => {
	return (
		<StyledComponent>
			<BlogPostArticle />
			<MostPopularBlogPosts></MostPopularBlogPosts>
			<CardPrices title='Join now' text='Unlock unparalleled control and flexibility with our VPS hosting solutions' cards={cardsPrices}></CardPrices>
			<Faq></Faq>
		</StyledComponent>
	);
};
const StyledComponent = styled.main``;
export default BlogPost;

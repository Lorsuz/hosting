import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import blog1 from '@image/site/Rectangle-blog-1.png';
import blog2 from '@image/site/Rectangle-blog-2.png';
import BlogMainPost from '@component/blog/BlogMainPost';
import HrBlog from '@component/hr/HrBlog';
import { useTranslation } from 'react-i18next';
const MostPopularBlogPosts = () => {
	const { t } = useTranslation();
	return (
		<StyledComponent className='wrapper'>
			<span>Blog</span>
			<HrBlog text='' align='start'></HrBlog>
			<div className='container wrapper'>
				<div className='blog-main-post'>
					<BlogMainPost></BlogMainPost>
				</div>
				<div className='other-post'>
					<Link href='./blog-post'>
						<Image src={blog1} alt=''></Image>
						<h2>Hardware performance</h2>
					</Link>
				</div>
				<div className='other-post'>
					<Link href='./blog-post'>
						<Image src={blog2} alt=''></Image>
						<h2>Work with space</h2>
					</Link>
				</div>
			</div>
			<HrBlog text={t('dictionary.viewMore')} align='end' link='/blog'></HrBlog>
		</StyledComponent>
	);
};

const StyledComponent = styled.section`
	> span {
		color: #fff;
		font-size: 20px;
		font-weight: 400;
		grid-column: 2/12;
	}
	.container {
		grid-template-rows: 1fr 1fr;
		gap: 40px;

		.blog-main-post {
			display: flex;
			justify-content: center;
			align-items: center;
			grid-column: 1/9;
			grid-row: 1/3;
		}
		.other-post {
			border-radius: 20px;
			grid-column: 9/13;
			display: flex;
			overflow: hidden;
			a {
				width: 100%;
				display: block;
				height: 100%;
				position: relative;
			}
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
			}
			h2 {
				position: absolute;
				bottom: 30px;
				left: 30px;
				width: 150px;
			}
		}

		@media (max-width: 850px) {
			.blog-main-post {
				grid-column: 1/13;
			}
			.other-post {
				grid-row: 3/4;

				&:nth-child(2) {
					grid-column: 1/7;
				}
				&:nth-child(3) {
					grid-column: 7/13;
				}
			}
		}
		@media (max-width: 550px) {
			.blog-main-post {
				grid-column: 2/12;
			}
			.other-post {
				grid-row: auto;
				/* grid-column: 1/13; */

				&:nth-child(2) {
					grid-column: 2/12;
				}
				&:nth-child(3) {
					grid-column: 2/12;
				}
			}
		}
	}
`;

export default MostPopularBlogPosts;

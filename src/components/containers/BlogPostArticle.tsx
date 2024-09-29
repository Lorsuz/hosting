import React from 'react';
import styled from 'styled-components';
import MostVisited from '@component/blog/MostVisited';
import HrBlog from '@component/hr/HrBlog';
import Image from 'next/image';
import BlogPostArticleImage from '@image/site/post-blog.png';
import { FaArrowCircleLeft } from 'react-icons/fa';
import Link from 'next/link';
interface BlogPostArticleProps {}

const BlogPostArticle: React.FC<BlogPostArticleProps> = () => {
	return (
		<StyledComponent className='wrapper'>
			<div className='container wrapper'>
				<div className='back'>
					<Link href='./blog'>
						<div className='icon'>
							<FaArrowCircleLeft></FaArrowCircleLeft>
						</div>
						<span>Blog</span>
					</Link>
				</div>
				<HrBlog grid='1/13'></HrBlog>
				<article>
					<h1>
						Binance''s Proof-of-Reserves System: <br /> A Year of Upgrading User Assets Transparency
					</h1>
					<span className='date'>April 14, 2024</span>
					<p>
						A year ago, amid a crisis that saw public trust in crypto take a series of severe blows, Binance sought to support an industry-wide effort to recover it. We set out to
						show, rather than tell, that maturity and reliability are the real defining features of the digital asset ecosystem - contrary to the narratives that seemed ubiquitous
						back then and are still strong today. We <a href=''>articulated a six-prong framework</a> for all centralized crypto exchanges to adopt to join forces in winning back
						people's trust. Two key principles formed the foundation of this approach: the sanctity of user funds and transparency. Our{' '}
						<a href=''>proof-of-reserves (POR) system</a>, which went live in November 2022, was designed to show both of these principles at work. We'd already had the most
						important part covered: responsible user funds management. The culture of being risk-averse with the assets people entrusted us with, of always maintaining sufficient
						reserves to cover any amount of withdrawals, and being security-minded has been ingrained in Binance since our early days. The challenge was now to find a way to make
						it more visible.
					</p>
					<p>
						A year ago, amid a crisis that saw public trust in crypto take a series of severe blows, Binance sought to support an industry-wide effort to recover it. We set out to
						show, rather than tell, that maturity and reliability are the real defining features of the digital asset ecosystem - contrary to the narratives that seemed ubiquitous
						back then and are still strong today. <a href=''>We articulated a six-prong framework</a> for all centralized crypto exchanges to adopt to join forces in winning back
						people's trust. Two key principles formed the foundation of this approach: the sanctity of user funds and transparency. Our{' '}
						<a href=''>proof-of-reserves (POR) system</a>, which went live in November 2022, was designed to show both of these principles at work. We'd already had the most
						important part covered: responsible user funds management. The culture of being risk-averse with the assets people entrusted us with, of always maintaining sufficient
						reserves to cover any amount of withdrawals, and being security-minded has been ingrained in Binance since our early days. The challenge was now to find a way to make
						it more visible.
					</p>
				</article>
				<aside>
					<div className='most-visited'>
						<MostVisited></MostVisited>
					</div>
					<div className='img'>
						<Image src={BlogPostArticleImage} alt=''></Image>
					</div>
				</aside>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.section`
	.container {
		gap: 10px;
		align-items: start;
		.back {
			grid-column: 1/13;
			display: flex;
			a {
				border-radius: 50px;
				background: #00ff38;
				display: flex;
				align-items: center;
				padding: 5px 45px;
				background: var(--green-color);
				gap: 10px;
				.icon {
					display: flex;
					align-items: center;
					justify-content: center;
					svg {
						font-size: 16px;
						fill: black;
					}
				}
				span {
					font-size: 16px;
					color: #041007;
					text-align: center;
					font-family: Inter;
					font-weight: 500;
					line-height: 121.935%; /* 13.169px */
				}
			}
		}
		article {
			grid-column: 1/7;
			h1 {
				color: #fff;
				font-family: Inter;
				font-size: 31px;
				font-weight: 600;
				line-height: 121.935%; /* 37.8px */
			}
			span {
				color: rgba(255, 255, 255, 0.4);
				font-family: Inter;
				font-size: 10px;
				font-weight: 500;
				line-height: 121.935%; /* 12.193px */
				margin: 10px 0 20px;
				display: block;
			}
			p {
				color: #bababa;
				font-family: Inter;
				font-size: 14.682px;
				font-weight: 500;
				line-height: 187%; /* 27.455px */
				margin-bottom: 20px;
				a {
					color: #bababa;
					text-decoration: underline;
				}
			}
		}
		aside {
			grid-column: 8/13;
			.most-visited {
				margin-bottom: 30px;
			}
			.img {
				border-radius: 20px;
				overflow: hidden;
				display: flex;
				justify-content: center;
				align-items: center;
				aspect-ratio: 5/3;
				width: 100%;
				img {
					width: 100%;
					object-fit: container;
					height: 100%;
				}
			}
		}
		@media (max-width: 900px) {
			article,
			aside {
				grid-column: 1/13;
			}
		}
		@media (max-width: 600px) {
			article h1{
				font-size: 24px;
			}
		}
		@media (max-width: 400px) {
			article h1{
				font-size: 20px;
			}
		}
	}
`;
export default BlogPostArticle;

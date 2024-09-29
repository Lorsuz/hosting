import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import blogMain from '@image/site/Rectangle-blog-main.png';

const BlogMainPost = () => {
	return (
		<StyledComponent className='main-post'>
			<Image src={blogMain} alt=''></Image>
			<div className='gradient'></div>
			<div className='text'>
				<h1>Flexibility and control</h1>
				<p>Have complete control over your hosting environment with dedicated resources and configuration flexibility.</p>
				<Link href='/blog-post'>Leia agora</Link>
			</div>
		</StyledComponent>
	);
};

const StyledComponent = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	border-radius: 20px;

	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.gradient {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		height: 100%;
		background: linear-gradient(180deg, #010901ab, #010901);
		mix-blend-mode: hard-light;
	}
	.text {
		position: absolute;
		top: 18%;
		max-width: 350px;
		left: 10%;
		@media (max-width: 550px) {
			top: 10%;
		}
		h1 {
			color: #f3f6f4;
			font-family: Inter;
			font-size: 32px;
			font-weight: 700;
			line-height: 130%; /* 33.638px */
			margin-bottom: 20px;
			@media (max-width: 550px) {
				font-size: 24px;
			}
		}
		p {
			color: #f3f6f4;
			font-family: Inter;
			font-size: 16px;
			font-weight: 400;
			line-height: 130%; /* 16.819px */
			margin-bottom: 20px;
			@media (max-width: 550px) {
				line-height: 100%;
			}
		}
		a {
			color: #00ff38;
			text-align: center;
			font-family: Inter;
			font-size: 14px;
			font-weight: 500;
			border-radius: 59.103px;
			border: 0.693px solid #00ff1a;
			background: rgba(38, 64, 47, 0.25);
			backdrop-filter: blur(2.442922592163086px);
			padding: 5px 35px;
		}
	}
`;
export default BlogMainPost;

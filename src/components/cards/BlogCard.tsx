import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ image = '' }: { image: string }) => {
	return (
		<StyledComponent>
			<Link href='./blog-post'>
				<div className='img'>
					<Image src={image} alt='' width={1000} height={1000}></Image>
				</div>
				<div className='text'>
					<h3>Lorem Ipsum Dolor</h3>
					<p>Join on a virtual journey around the globe and discover our extensive network of locations with just a click</p>
					<ul>
						<li>AI</li>
						<li>Technology</li>
					</ul>
				</div>
			</Link>
		</StyledComponent>
	);
};
const StyledComponent = styled.li`
	flex: 1 1 250px;
	a {
		padding: 20px;
		display: block;
		background: #071209;
		border-radius: 10px;

		.img {
			border-radius: 7.579px;
			background: #0c1a11;
			overflow: hidden;
			width: 100%;
			margin-bottom: 15px;
			aspect-ratio: 2/1;
			display: flex;
			align-items: center;
			justify-content: center;
			img {
				width: 100%;
				object-fit: contain;
				/* filter: grayscale(); */
				/* height: 100px; */
			}
		}
		.text {
			h3 {
				color: #d3d3d3;
				font-family: Inter;
				font-size: 16px;
				font-weight: 600;
				margin-bottom: 10px;
			}
			p {
				margin-bottom: 20px;
				color: rgba(255, 255, 255, 0.75);
				font-family: Inter;
				font-size: 12px;
				font-weight: 400;
			}
			> ul {
				display: flex;
				gap: 10px;
				li {
					border-radius: 42.829px;
					background: #010901;
					color: #fff;
					font-family: Inter;
					font-size: 8.352px;
					font-weight: 600;
					padding: 5px 15px;
					opacity: 0.42;
				}
			}
		}
		&:hover {
			.img img {
				/* scale:1.01; */
				/* filter: none; */
			}
		}
	}
`;
export default BlogCard;

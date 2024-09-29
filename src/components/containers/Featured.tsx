import React from 'react';
import styled from 'styled-components';
import BlogMainPost from '@component/blog/BlogMainPost';
import MostVisited from '@component/blog/MostVisited';

const Featured = () => {
	return (
		<StyledComponent className='wrapper'>
			<div className='container wrapper'>
				<h1>Featured</h1>
				<div className='blog-main-post'>
					<BlogMainPost></BlogMainPost>
				</div>
				<div className='most-visited'>
					<MostVisited></MostVisited>
				</div>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.section`
	.container {
		grid-column: 2/12;
		gap: 30px 40px;
		/* gap: 40px; */
		> h1 {
			grid-column: 1/13;
			color: #00ff19;
			font-size: 30px;
			font-weight: 600;
		}
		.blog-main-post {
			grid-column: 1/8;
		}
		.most-visited {
			grid-column: 8/13;
		}
		@media (max-width: 1000px) {
			.blog-main-post,
			.most-visited {
				grid-column: 1/13;
			}
		}
	}
`;
export default Featured;

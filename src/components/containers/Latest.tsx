import { unstable_noStore as noStore } from 'next/cache';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import BlogCard from '@component/cards/BlogCard';
import HrBlog from '../hr/HrBlog';

const Latest = () => {
	noStore();
	const randomImages = [
		'https://source.unsplash.com/random/1000x1000/?sky',
		'https://source.unsplash.com/random/1000x1000/?landscape',
		'https://source.unsplash.com/random/1000x1000/?ocean',
		'https://source.unsplash.com/random/1000x1000/?moutain',
		'https://source.unsplash.com/random/1000x1000/?forest'
	];
	return (
		<StyledComponent className='wrapper'>
			<div className='container'>
				<h1>Latest</h1>
				<nav>
					<ul>
						<li>
							<div className='dot'></div>
							<span>VPS</span>
						</li>
						<li>
							<span>Game</span>
						</li>
						<li>
							<span>Cpanel</span>
						</li>
						<li>
							<span>Panel</span>
						</li>
						<li>
							<span>High demand</span>
						</li>
					</ul>
					<form action=''>
						<input type='text' placeholder='Search' />
						<button>
							<FaSearch></FaSearch>
						</button>
					</form>
				</nav>
				<ul>
					{Array.from({ length: 8 }).map((_, index) => (
						<BlogCard image={randomImages[index % randomImages.length]}></BlogCard>
					))}
				</ul>
				<HrBlog text='Load more' align='end' width='90'></HrBlog>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.section`
	.container {
		h1 {
			color: #00ff19;
			font-size: 30px;
			font-weight: 600;
			margin-bottom: 20px;
		}
		nav {
			display: flex;
			flex-wrap: wrap;
			gap: 20px;
			margin-bottom: 40px;
			ul {
				display: flex;
				gap: 20px;
				flex-grow: 1;
				overflow: hidden;
				li {
					border-radius: 38px;
					background: #0c1a11;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 10px 20px;
					/* border: 1px solid #2f2f2f; */
					flex-grow: 1;
					/* min-width: 200px; */
					span {
						color: #fff;
						text-align: center;
						font-size: 14px;
						white-space: nowrap;
						color: #fff;
						font-weight: 500;
						opacity: 0.3;
					}
				}
			}
			form {
				flex-grow: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 38.168px;
				background: #0c1a11;
				border: 1px solid #2f2f2f;
				margin: 0 auto;

				padding: 10px 20px;
				gap: 10px;
				input {
					flex-grow: 1;
				}
				button {
					font-size: 1.1rem;
				}
			}
		}
		> ul {
			display: flex;
			flex-wrap: wrap;
			gap: 30px;
		}
	}
`;
export default Latest;

import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import ReqResFAQ from '@component/shared/ReqResFAQ';
import { useTranslation } from 'react-i18next';

const Fap = () => {
	const { t } = useTranslation();
	return (
		<StyledComponent className='wrapper'>
			<div className='container'>
				<h1>Company Name FAQ</h1>
				<p>{t('faq.paragraph')}</p>
				<nav>
					<ul>
						<li>
							<div className='dot'></div>
							<span>Topic</span>
						</li>
						<li>
							<div className='dot'></div>
							<span>Topic</span>
						</li>
						<li>
							<div className='dot'></div>
							<span>Topic</span>
						</li>
					</ul>
					<form action=''>
						<input type='text' placeholder='Search for your question...' />
						<button>
							<FaSearch></FaSearch>
						</button>
					</form>
				</nav>
				<ul>
					<ReqResFAQ></ReqResFAQ>
					<ReqResFAQ></ReqResFAQ>
					<ReqResFAQ></ReqResFAQ>
					<ReqResFAQ></ReqResFAQ>
					<ReqResFAQ></ReqResFAQ>
				</ul>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.section`
	.container {
		h1 {
			color: #edeff2;
			font-family: Inter;
			font-size: 29.044px;
			font-weight: 600;
			line-height: 130%; /* 37.757px */
			text-align: center;
			margin-bottom: 10px;
		}
		> p {
			text-align: center;
			color: #00ff1a;
			font-size: 14.062px;
			margin-bottom: 30px;
			font-weight: 300;
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
					position: relative;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 10px 40px;
					/* border: 1px solid #2f2f2f; */
					flex-grow: 1;
					min-width: 200px;
					.dot {
						position: absolute;
						width: 10px;
						left: 20px;
						background: #fff;
						aspect-ratio: 1;
						border-radius: 50%;
					}
					span {
						color: #fff;
						text-align: center;
						font-family: Inter;
						font-size: 14px;
						font-weight: 600;
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
					-moz-appearance: none;
				}
				button {
					font-size: 1.1rem;
				}
			}
		}
	}
`;
export default Fap;

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import CoverForm from '@component/forms/CoverForm';
const Cover = ({ title, text, image }: { title: any; text: any; image: any }) => {
	return (
		<StyledComponent className='wrapper'>
			<div className='container wrapper'>
				<div className='left'>
					<div className='img'>
						<Image src={image} alt=''></Image>
					</div>
					<div className='gradient'></div>
				</div>
				<div className='right'>
					<h1 dangerouslySetInnerHTML={{ __html: title }} />
					<p>{text}</p>
					<CoverForm></CoverForm>
				</div>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.section`
	padding-top: 150px;

	.container {
		gap: 20px;

		.left {
			grid-column: 1 / 7;
			position: relative;
			.img {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				overflow: hidden;
				height: 100%;
				img {
					width: 100%;
					height: 100%;
					object-fit: scale-down;
				}
			}
			.gradient {
				background: linear-gradient(180deg, #01090100, #010901);
				height: 70%;
				position: absolute;
				bottom: 0;
				left: 0;
				z-index: 2;
				width: 100%;
			}
		}
		.right {
			grid-column: 7 / 13;
			z-index: 3;

			h1 {
				color: #f3f6f4;
				font-family: Inter;
				font-size: 52px;
				font-weight: 700;
				line-height: 130%; /* 57.487px */
				@media (max-width: 1140px) {
					font-size: 40px;
				}
				@media (max-width: 880px) {
					font-size: 32px;
				}
				span {
					color: #00ff1a;
					font-family: Inter;
					font-weight: 700;
					line-height: 130%;
				}
			}
			p {
				color: rgba(243, 246, 244, 0.8);
				font-family: Inter;
				font-size: 16px;
				font-weight: 400;
				margin: 20px 0 40px;
			}
		}
		@media (max-width: 800px) {
			.left {
				display: none;
				grid-column: 1 / 13;
			}
			.right {
				grid-column: 1 / 13;
				h1{
					font-size: 50px;
				}
				p{
					font-size: 18px;

				}
			}
		}
		@media (max-width: 480px) {
			.right {
				grid-column: 1 / 13;
				h1{
					font-size: 32px;
				}
				p{
					font-size: 14px;

				}
			}
		}
	}
`;
export default Cover;

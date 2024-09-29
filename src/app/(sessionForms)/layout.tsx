'use client';
import styled from 'styled-components';
import Link from 'next/link';
// import ImgCatHead from '@image/site/astronaut-cat-1.png';
import ImgCatHead from '@image/site/img-cat-head.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<StyledComponent>
			<section className='wrapper'>
				<div className='container'>
					<Link href='/'>&lt; Return to the home page</Link>
					{children}
				</div>
			</section>
			<motion.div className='galactic-cat' initial={{ right: -250, opacity: 0 }} animate={{ right: 0, opacity: 1 }} transition={{ ease: 'easeOut', duration: 0.5 }}>
				<Image src={ImgCatHead} alt=''></Image>
				<div className='gradient'></div>
			</motion.div>
		</StyledComponent>
	);
}
const StyledComponent = styled.main`
	position: relative;

	.galactic-cat {
		position: fixed;
		bottom: 0;
		right: 0;
		width: 700px;
		height: min-content;

		@media (max-width: 1000px) {
			display: none;
		}
		img {
			bottom: 0;
			right: 0;
			width: 700px;
			height: min-content;
		}
		.gradient {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			flex-shrink: 0;
			background: linear-gradient(#01090100, #010901);
		}
	}

	section {
		.container {
			min-height: 100dvh;

			grid-column: 1/13;
			> a {
				color: #949494;
				display: block;
				font-size: 1rem;
				font-weight: 400;
				margin-bottom: 30px;
				margin-left: 10%;
			}
			form {
				border-radius: 19px;
				box-shadow: 0px 4px 63px 0px rgba(0, 0, 0, 0.04);
				flex-shrink: 0;
				margin: 0 auto;
				padding: 70px;
				width: 460px;
				box-sizing: content-box;
				border: 1px solid rgba(255, 255, 255, 0.12);
				backdrop-filter: blur(9px);
				z-index: 1;
				position: relative;

				@media (max-width: 700px) {
					border: none;
					box-sizing: border-box;
					padding: 50px 0px;
					box-shadow: none;
					width: 90%;
				}

				h1 {
					text-align: center;
					font-family: Inter;
					font-size: 31px;
					font-weight: 700;
					line-height: 117%;
					margin-bottom: 20px;
				}
				p {
					margin: 0 auto;
					flex-shrink: 0;
					color: #949494;
					text-align: center;
					font-family: Inter;
					font-size: 16px;
					font-weight: 400;
					margin-bottom: 30px;
				}
				.forgot-password {
					color: #949494;
					text-align: end;
					display: block;
					font-family: Inter;
					font-size: 12px;
					font-weight: 400;
					margin: 20px 0;
					span {
						color: #00ff19;
						font-size: 11px;
						font-weight: 600;
					}
				}
				.terms {
					color: #949494;
					font-family: Inter;
					font-size: 12px;
					font-weight: 400;
					text-align: center;
					margin: 20px 0;
					a {
						color: #00ff19;
						font-size: 11px;
						font-weight: 600;
					}
				}
				.hr {
					margin: 20px auto 30px;
					display: flex;
					align-items: center;

					span {
						color: #949494;
						color: #dedede;
						font-family: Inter;
						font-size: 12px;
						font-weight: 400;
						margin: 0 40px;
					}
					hr {
						height: 1px;
						width: 100%;
						border: none;
						display: inline-block;
						&.left {
							background: linear-gradient(-90deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
						}
						&.right {
							background: linear-gradient(90deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
						}
					}
				}
				.toggle-form {
					color: #949494;
					font-family: Inter;
					font-size: 12px;
					font-weight: 400;
					text-align: center;
					display: block;
					span {
						color: #00ff19;
						font-size: 11px;
						font-weight: 600;
					}
				}
			}
		}
	}
`;

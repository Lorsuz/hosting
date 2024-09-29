'use client';
import React from 'react';
import styled from 'styled-components';
import { FaShoppingBag, FaPlus } from 'react-icons/fa';
import { MdUpload } from 'react-icons/md';
import CartPopUp from '@component/cart/CartPopUp';
import brazil from '@image/site/Brazil.png';
import ukraine from '@image/site/ukraine.png';
import germany from '@image/site/germany.png';
import malaysia from '@image/site/malaysia.png';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Image from 'next/image';
import { PageProps } from '../../../../../.next/types/app/(site)/(services)/cloud-vps/page';
const Page = () => {
	const [menuIsOpen, setMenuIsOpen] = React.useState(false);
	return (
		<StyledComponent>
			<div className='actions'>
				<button
					onClick={() => {
						setMenuIsOpen(!menuIsOpen);
					}}
				>
					<FaShoppingBag></FaShoppingBag>
				</button>
				<button>
					<span>Deploy</span>
					<MdUpload></MdUpload>
				</button>

				{menuIsOpen && (
					<div className='popup'>
						<CartPopUp></CartPopUp>
					</div>
				)}
			</div>
			<h2>Deploy New Instance</h2>
			<div className='choose-type'>
				<h3>Choose Type</h3>
				<ul>
					{Array.from({ length: 4 }).map((_, index: number): any => (
						<li key={index} className={`${index === 0 && 'active'}`}>
							<div className='img' />
							<h3>Lorem ipsum dolor sit.</h3>
							<p>
								Lorem <span>ipsum</span> dolor sit amet consectetur. Adipiscing facilisis placerat sollicitudin fames tempus elementum
							</p>
							<div className='icon'>
								<FaShoppingBag></FaShoppingBag>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className='choose-location'>
				<h3>Choose Location</h3>
				<ul>
					<li>
						<div className='img'>
							<Image src={germany} alt=''></Image>
						</div>
						<span>Germany</span>
					</li>
					<li>
						<div className='img'>
							<Image src={brazil} alt=''></Image>
						</div>
						<span>Brazil</span>
					</li>
					<li>
						<div className='img'>
							<Image src={malaysia} alt=''></Image>
						</div>
						<span>Malaysia</span>
					</li>
					<li>
						<div className='img'>
							<Image src={ukraine} alt=''></Image>
						</div>
						<span>Ukraine</span>
					</li>
				</ul>
			</div>
			<div className='server-settings'>
				<h3>Server Settings</h3>
				<h4>SSH Keys</h4>
				<ul>
					<li>
						<div className='select'>
							<ul>
								{Array.from({ length: 5 }).map((_, index) => (
									<li className={'option ' + (index === 1 && 'active')} key={index}>
										<span>Choose...</span>
									</li>
								))}
							</ul>
							<div className='icon'>
								<RiArrowDropDownLine></RiArrowDropDownLine>
							</div>
						</div>
						<button className='plus'>
							<FaPlus></FaPlus>
						</button>
						<div className='input'>
							<input type='text' placeholder='Add1' />
							<div className='text'>Lorem ipsum dolor sit amet consectetur.</div>
						</div>
					</li>
				</ul>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.article`
	grid-column: 2;
	padding: 100px;
	overflow: hidden scroll;
	height: 100vh;

	&::-webkit-scrollbar {
		width: 5px;
	}

	&::-webkit-scrollbar-track {
		background: var(--black-color);
	}

	&::-webkit-scrollbar-thumb {
		background: var(--green-color);
		/* border-radius: 10px; */
	}
	> .actions {
		display: flex;
		gap: 20px;
		justify-content: end;
		align-items: center;
		position: relative;
		> button {
			background: var(--green-color);
			padding: 5px 15px;
			display: flex;
			align-items: center;
			gap: 20px;
			border-radius: 20px;
			svg {
				fill: #000;
				color: #000;
			}
			span {
				color: #09160c;
				font-family: Inter;
				font-size: 11.148px;
				font-weight: 500;
				line-height: 121.935%; /* 13.593px */
			}
		}
		.popup {
			position: absolute;
			right: 0px;
			top: calc(100% + 20px);
			width: 400px;
			z-index: 2;
		}
	}
	h2 {
		color: #fff;
		font-family: Inter;
		font-size: 19px;
		font-weight: 600;
		margin-bottom: 50px;
	}
	> div {
		margin-bottom: 50px;
		> h3 {
			color: #fff;
			font-family: Inter;
			font-size: 19px;
			font-weight: 400;
			line-height: 187%; /* 35.53px */
			margin-bottom: 30px;
			border-bottom: 1px solid #0b1a0e;
			padding-bottom: 10px;
		}
	}
	.choose-type {
		ul {
			display: flex;
			flex-wrap: wrap;
			gap: 30px;
			li {
				flex: 1 1 200px;
				max-width: 250px;
				position: relative;
				overflow: hidden;
				/* height: 350; */
				aspect-ratio: 4/5;
				border: 2px solid transparent;
				padding: 40px 20px;
				border-radius: 20px;
				background: linear-gradient(0deg, rgba(12, 26, 17, 0) 0%, rgba(12, 26, 17, 0) 100%),
					linear-gradient(154deg, rgba(255, 255, 255, 0) -42.77%, rgba(255, 255, 255, 0.01) 47.06%);
				backdrop-filter: blur(13.161865234375px);
				&:focus {
				}
				.img {
					aspect-ratio: 1;
					width: 30px;
					background: #e1e1e1;
					margin-bottom: 20px;
				}
				h3 {
					color: #fff;
					margin-bottom: 20px;
					font-family: Inter;
					font-size: 15px;
					font-weight: 600;
					span {
						color: #00ff38;
						font-family: Inter;
						font-size: 15px;
						font-weight: 600;
					}
				}
				p {
					color: #fff;
					font-family: Inter;
					font-size: 11px;
					font-weight: 400;
				}
				.icon {
					position: absolute;
					right: 0;
					bottom: 0;
					top: auto;
					left: auto;
					display: flex;
					justify-content: center;
					align-items: center;
					padding: 7px 20px;
					background: var(--green-color);
					border-radius: 20px 0 0 0;

					svg {
						fill: #000;
					}
				}
				&.active {
					border-color: var(--green-color);
				}
			}
		}
	}
	.choose-location {
		ul {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 100px;
			flex-wrap: wrap;
			/* margin-top: -7vw; */
			li {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 10px;
				.img {
					img {
					}
				}
				span {
				}
			}
		}
	}
	.server-settings {
		h4 {
			color: #fff;
			font-family: Inter;
			font-size: 13.669px;
			font-weight: 400;
			line-height: 187%; /* 25.561px */
		}
		> ul {
			li {
				display: flex;
				justify-content: space-between;
				align-items: start;
				gap: 15px;
				.select {
					flex: 1 1 200px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-radius: 7px;
					border: 1px solid rgba(0, 255, 26, 0.04);
					background: rgba(36, 37, 43, 0);
					padding: 6px 0px;

					ul {
						li {
							display: none;
							flex-grow: 1;
							padding: 0 15px;
							span {
								color: rgba(255, 255, 255, 0.42);
								font-family: Inter;
								font-size: 13.669px;
								font-weight: 400;
								line-height: 187%; /* 25.561px */
							}
							&.active {
								display: block;
							}
						}
					}
					.icon {
						svg {
							fill: #f3f6f4;
							opacity: 0.48;
							font-size: 28px;
						}
					}
				}
				button.plus {
					padding: 15px 0px 0;

					svg {
						fill: var(--green-color);
					}
				}
				.input {
					flex: 1 1 200px;

					input {
						width: 100%;
						padding: 10px 20px;
						border-radius: 7px 7px 0px 0px;
						border: 1px solid rgba(0, 255, 26, 0.04);
						background: rgba(36, 37, 43, 0);
						color: rgba(255, 255, 255, 0.42);
						font-family: Inter;
						font-size: 13.669px;
						font-weight: 400;
						line-height: 187%; /* 25.561px */
					}
					.text {
						padding: 10px 20px;
						border-radius: 0px 0px 7px 7px;
						border: 1px solid rgba(0, 255, 26, 0.04);
						background: rgba(36, 37, 43, 0);
						color: rgba(255, 255, 255, 0.42);
						font-family: Inter;
						font-size: 13.669px;
						font-weight: 400;
						line-height: 187%; /* 25.561px */
					}
				}
			}
		}
	}
`;
export default Page;

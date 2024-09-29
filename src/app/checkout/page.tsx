'use client';
import React,{useState} from 'react';
import styled from 'styled-components';
import CartPopUp from '@component/cart/CartPopUp';
import { IoReturnUpBack } from 'react-icons/io5';
import Link from 'next/link';
import NewCreditCardModalForm from '@component/modal/NewCreditCardModalForm'

const page = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	return (
		<StyledComponent>
			{
				modalIsOpen && 
				(
					<NewCreditCardModalForm/>
				)
			}
			<section className='wrapper'>
				<div className='container wrapper'>
					<div className='back'>
						<Link href='/'>
							<IoReturnUpBack></IoReturnUpBack>
							<span>Return</span>
						</Link>
					</div>
					<h1>Billing</h1>
					<div className='payment'>
						<h2>Payment method</h2>
						<ul>
							<li>Ending in ...9999</li>
							<li>Ending in ...9999</li>
							<li>Pix</li>
						</ul>
						<button onClick={
							()=>{
								setModalIsOpen(true)
							}
						}>Edit new card</button>
					</div>
					<div className='items'>
						<CartPopUp buttonText='Pay now' hasForm={true}></CartPopUp>
					</div>
				</div>
			</section>
		</StyledComponent>
	);
};
const StyledComponent = styled.main`
	section {
		.container {
			gap: 20px;
			align-items: start;
			.back {
				grid-column: 1/13;
				display: flex;

				a {
					/* padding: 5px 15px; */
					/* border-radius: 10px; */
					/* background: var(--green-color); */
					display: flex;
					gap: 10px;
					align-items: center;
					/* border: 1px solid #0b1a0e; */
					svg,
					svg * {
						font-size:30px;
						/* color: #000; */
					}
					span{
						/* color: #000; */
						/* font-weight: 900; */
					}
				}
			}
			h1 {
				color: #fff;
				font-family: Inter;
				font-size: 19px;
				font-weight: 600;
				line-height: 187%; /* 35.53px */
				grid-column: 1/13;
			}
			.payment {
				grid-column: 1/9;
				padding: 40px;
				border-radius: 16px;
				border: 0.946px solid #0b1a0e;
				background: linear-gradient(0deg, rgba(12, 26, 17, 0) 0%, rgba(12, 26, 17, 0) 100%),
					linear-gradient(154deg, rgba(255, 255, 255, 0) -42.77%, rgba(255, 255, 255, 0.01) 47.06%);
				backdrop-filter: blur(13.161865234375px);
				h2 {
					color: #fff;
					font-family: Inter;
					font-size: 19px;
					font-weight: 600;
					line-height: 187%; /* 35.53px */
				}
				ul {
					padding-left: 15px;
					margin-bottom: 20px;
					li {
						color: #fff;
						font-family: Inter;
						font-size: 13px;
						font-weight: 600;
						line-height: 187%; /* 24.31px */
						opacity: 0.9;
						padding: 10px 0 10px 20px;
						position: relative;

						&::before {
							left: 0;
							top: 50%;
							transform: translateY(-50%);
							position: absolute;
							content: '';
							aspect-ratio: 1;
							width: 10px;
							background: #6b6b6b;
							border-radius: 50%;
						}
					}
				}
				button {
					font-size: 10.128px;
					font-weight: 600;
					line-height: 187%; /* 18.939px */
					color: #fff;
					font-family: Inter;
					font-size: 10.128px;
					font-weight: 600;
					line-height: 187%; /* 18.939px */
					opacity: 0.3;
				}
			}
			.items {
				grid-column: 9/13;
			}

			@media (max-width: 1320px) {
				.payment {
					grid-column: 1/7;
				}
				.items {
					grid-column: 7/13;
				}
			}
			@media (max-width: 865px) {
				.payment {
					grid-column: 1/6;
				}
				.items {
					grid-column: 6/13;
				}
			}
			@media (max-width: 750px) {
				.payment,
				.items {
					grid-column: 1/13;
				}
			}
		}
	}
`;
export default page;

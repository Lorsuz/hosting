import React from 'react';
import styled from 'styled-components';
import CartItemPopUp from '@component/cart/CartItemPopUp';
import { LuSendHorizonal } from 'react-icons/lu';

interface CartPopUpProps {
	buttonText?: string;
	hasForm?: boolean;
}

const CartPopUp: React.FC<CartPopUpProps> = ({ buttonText = 'Total', hasForm = false }) => {
	return (
		<StyledComponent>
			<ul>
				{Array.from({ length: 5 }).map((_, index: number): any => (
					<CartItemPopUp key={index}></CartItemPopUp>
				))}
			</ul>
			{hasForm && (
				<form action=''>
					<input type='text' placeholder='Code enter...' />
					<button>
						<LuSendHorizonal></LuSendHorizonal>
					</button>
				</form>
			)}
			<div className='total'>
				<span>{buttonText}:</span>
				<span>$999,99</span>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.div`
	width: 100%;
	border-radius: 24px;
	border: 0.6px solid #0b1a0e;
	background: linear-gradient(0deg, rgba(12, 26, 17, 0.25) 0%, rgba(12, 26, 17, 0.25) 100%),
		linear-gradient(154deg, rgba(255, 255, 255, 0) -42.77%, rgba(255, 255, 255, 0.01) 47.06%);
	backdrop-filter: blur(8.350000381469727px);
	padding: 20px;

	ul {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}
	form {
		gap: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-bottom: 15px;
		border-radius: 14.441px;
		border: 1px solid rgba(0, 255, 56, 0.1);
		padding: 10px 15px;
		input {
			flex-grow: 1;
		}
		button {
			display: flex;
			justify-content: center;
			align-items: center;
			svg {
				opacity: 0.6;
			}
		}
	}
	.total {
		display: flex;
		justify-content: space-between;
		background: var(--green-color);
		padding: 10px 20px;
		border-radius: 16px;

		span {
			color: #000000;
			font-size: 16px;
			color: #000901;
			font-family: Inter;
			font-weight: 700;
			line-height: 144%; /* 21.6px */
		}
	}
`;
export default CartPopUp;

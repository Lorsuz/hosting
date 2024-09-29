import React from 'react';
import styled from 'styled-components';

interface CartItemPopUpProps {}

const CartItemPopUp: React.FC<CartItemPopUpProps> = () => {
	const [count, setCount] = React.useState(1);
	return (
		<StyledComponent>
			<span className='name'>Lorem ipsum dolor sit amet consectetur.</span>
			<span className='price'>$999,99</span>
			<div className='count'>
				<button
					onClick={() => {
						if (count > 1) {
							setCount(count - 1);
						}
					}}
				>
					-
				</button>
				<span className='number'>{count}</span>
				<button
					onClick={() => {
						setCount(count + 1);
					}}
				>
					+
				</button>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.li`
	display: flex;
	gap: 20px;
	justify-content: space-between;
	align-items: center;
	padding: 30px 20px;
	border-bottom: 1px solid #0b1a0e;
	.name {
		flex-grow: 2;
		color: #fff;
		font-family: Inter;
		font-size: 13px;
		font-weight: 500;
		line-height: 144%; /* 18.72px */
		max-width: 150px;
	}
	.price {
		flex-grow: 1;
		color: #fff;
		font-family: Inter;
		font-size: 10.77px;
		font-weight: 500;
		text-align: center;
		line-height: 187%; /* 20.139px */
	}
	.count {
		display: flex;
		flex-grow: 1;
		gap: 15px;
		justify-content: center;
		align-items: center;
		.number {
			color: #fff;
			font-family: Inter;
			font-size: 15.656px;
			font-weight: 400;
			line-height: 187%; /* 29.277px */
		}
		button {
			color: #fff;
		}
	}
`;
export default CartItemPopUp;

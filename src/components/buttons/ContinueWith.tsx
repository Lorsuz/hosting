import React from 'react';
import styled from 'styled-components';
import Google from '@image/logos/Google.png';
import GitHub from '@image/logos/GitHub.png';
import Image from 'next/image';

const ContinueWith = () => {
	return (
		<StyledComponent>
			<button>
				<Image src={Google} alt='Descrição da imagem' />

				<span>Continue with Google</span>
			</button>
			<button>
				<Image src={GitHub} alt='Descrição da imagem' />
				<span>Continue with GitHub</span>
			</button>
		</StyledComponent>
	);
};

const StyledComponent = styled.div`
	display: flex;
	flex-direction: column;
	button {
		margin-bottom: 20px;
		width: 100%;
		display: flex;
		position: relative;
		border-radius: 80px;
		height: 50px;
		padding: 13px;
		justify-content: center;
		align-items: center;
		gap: 30px;
		flex-shrink: 0;
		font-size: 12px;
		font-weight: 400;
		background: #dedede; &:hover { background: #D3D2D2; }
		box-shadow: 0px 0px 25px 0px rgba(0, 255, 25, 0.05);

		img {
			width: 20px;
			height: 20px;
			position: absolute;
			left: 20px;
		}
		span {
			color: #09160d;
			font-size: 12px;
			font-weight: 400;
			line-height: 130%; /* 15.6px */
			margin: 0 auto;
		}
	}
`;

export default ContinueWith;

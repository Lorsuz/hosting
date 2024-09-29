import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ButtonMainTheme = ({ href = '/sign-up', children = 'Get started now' }) => {
	return (
		<StyledComponent>
			<Link href={href}>{children}</Link>
		</StyledComponent>
	);
};
const StyledComponent = styled.button`
	a {
		border-radius: 59.719px;
		border: 0.701px solid #00ff1a;
		background: rgba(38, 64, 47, 0.25);
		backdrop-filter: blur(2px);
		color: #00ff38;
		text-align: center;
		padding: 10px 50px;
		font-size: 14px;
		font-weight: 500;
		white-space: nowrap;

		&:hover {
		}
	}
`;
export default ButtonMainTheme;

import React from 'react';
import styled from 'styled-components';

const FormAccountButton = ({ contentButton, type = 'button' }: { contentButton: string; type?: 'button' | 'submit' | 'reset' }) => {
	return (
		<StyledComponent>
			<button type={type}>{contentButton}</button>
		</StyledComponent>
	);
};
const StyledComponent = styled.div`
	button {
		align-items: center;
		display: flex;
		flex-shrink: 0;
		font-size: 13px;
		font-weight: 400;
		height: 53.248px;
		justify-content: center;
		padding: 17.5px 0px 19.748px 0px;
		width: 100%;
		border-radius: 80px;
		background: #00ff19;  &:hover { background: #03C216; } 
		box-shadow: 0px 0px 25px 0px rgba(0, 255, 25, 0.05);
		color: #0c1a11; 
		font-size: 16px;
		font-weight: 700; 
		
	}

`;
export default FormAccountButton;

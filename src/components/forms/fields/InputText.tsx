import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const InputText = ({ type, name, placeholder, handleInput = (e: any) => e }: { type: string; name: string; placeholder: string; handleInput?: (value: string, isVisible: boolean) => void }) => {
	const [momentarilyType, setMomentarilyType] = useState(type);
	const [passwordIsVisible, setPasswordIsVisible] = useState(false);
	const [inputContent, setInputContent] = useState('');

	const handleToggleVisibility = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		setMomentarilyType(prevType => (prevType === type ? 'text' : type));
		setPasswordIsVisible(prevState => !prevState);
	};

	const handleInputChange = (value: string) => {
		setInputContent(value);
		handleInput(value, passwordIsVisible);
	};

	useEffect(() => {
		handleInput(inputContent, passwordIsVisible);
	}, [inputContent, passwordIsVisible]);

	return (
		<StyledComponent>
			<input 
				type={momentarilyType} 
				name={name} 
				placeholder={placeholder} 
				onChange={e => handleInputChange(e.target.value)} 
			/>
			{type === 'password' && (
				<button onClick={handleToggleVisibility}>
					{passwordIsVisible ? <FaRegEye /> : <FaRegEyeSlash />}
				</button>
			)}
		</StyledComponent>
	);
};

const StyledComponent = styled.div`
	display: flex;
	align-content: center;
	justify-content: space-between;
	padding: 10px 20px;
	align-items: center;
	margin-bottom: 20px;
	height: 50px;
	border-radius: 80px;
	border: 0.54px solid rgba(255, 255, 255, 0.5);
	box-shadow: 0px 0px 20.8px 0px rgba(0, 255, 56, 0.05);
	gap: 10px;

	input {
		font-size: 1rem;
		font-weight: 400;
		flex-grow: 1;
		display: flex;
		align-items: center;
	}
	
	button {
		display: flex;
		align-content: center;
		justify-content: center;

		svg {
			font-size: 1.2rem;
		}
	}
`;

export default InputText;

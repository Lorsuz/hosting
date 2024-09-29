import { useTranslation } from 'react-i18next';
import '@lib/i18n/i18n';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const LanguageSelector = () => {
	const {
		i18n: { changeLanguage, language }
	} = useTranslation();

	const [isOpen, setIsOpen] = useState(false);
	const [otherLanguage, setOtherLanguage] = useState(language);

	const handleChangeLanguage = (selectedLanguage: string) => {
		changeLanguage(selectedLanguage);
		setIsOpen(false);
	};

	useEffect(() => {
		setOtherLanguage(language === 'en' ? 'pt' : 'en');
	}, [language]);

	return (
		<StyledWrapper className='language-selector'>
			<button onClick={() => setIsOpen(!isOpen)}>
				{language.toUpperCase()}{' '}
				<div className='icon'>
					<FaAngleDown></FaAngleDown>
				</div>
			</button>
			{isOpen && (
				<ul>
					<li onClick={() => handleChangeLanguage(otherLanguage)}>
						{otherLanguage.toUpperCase()}
						<div className='dot'></div>
					</li>
				</ul>
			)}
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
	position: relative;
	display: inline-block;

	button {
		padding: 4px 9px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: transparent;
		font-size: 14px;
		font-weight: 900;
		letter-spacing: 1px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
		.icon {
			font-size: 14px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	ul {
		position: absolute;
		top: 110%;
		left: 0;
		z-index: 1;
		background-color: transparent;
		border-radius: 5px;

		li {
			border-radius: 5px;
			padding: 4px 9px;
			border: 1px solid transparent;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 7px;
			.dot {
				aspect-ratio: 1;
				width: 5px;
				border-radius: 50%;
				background: #383838;
			}
			&:hover {
				color: #00ff1a;
				.dot {
					background: #00ff1a;
				}
			}
		}
	}
`;
export default LanguageSelector;

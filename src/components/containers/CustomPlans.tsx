import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BsGear } from 'react-icons/bs';
import InputRange from '@component/forms/fields/InputRange';
import { FaShoppingBag } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const CustomPlans = () => {
	const { t } = useTranslation();

	const [playerCount, setPlayerCount] = React.useState(800);
	const [spaceCount, setSpaceCount] = React.useState(90);

	const changeValues = (newPlayerCount: number, newSpaceCount: number) => {
		setPlayerCount(newPlayerCount);
		setSpaceCount(newSpaceCount);
	};
	useEffect(() => {
		var buttons = document.querySelectorAll('.select-plan button');
		buttons.forEach(button => {
			button.addEventListener('click', function (this: any) {
				buttons.forEach(button => button.classList.remove('active'));
				this.classList.add('active');
			});
		});
	}, []);
	return (
		<StyledComponent className='wrapper'>
			<div className='container wrapper'>
				<ul className='select-plan'>
					<li>
						<button className='active' onClick={() => changeValues(1900, 250)}>
							Game hosting
						</button>
					</li>
					<li>
						<button onClick={() => changeValues(4500, 488)}>Cloud VPS</button>
					</li>
					<li>
						<button onClick={() => changeValues(8000, 750)}>Cpanel Calculator</button>
					</li>
				</ul>
				<div className='plan'>
					<p>{t('customPlans.title')}</p>
					<InputRange label={`${playerCount} ${t('dictionary.players')}`} max={10000} value={playerCount} onChange={(value: number) => setPlayerCount(value)} />
					<InputRange label={`${t('dictionary.desiredSpace')} - ${spaceCount} Gb`} max={1000} value={spaceCount} onChange={(value: number) => setSpaceCount(value)} />
				</div>
				<div className='price'>
					<span className='size'>99GB</span>
					<span className='price'>
						$99.99 <span>/{t('dictionary.month')}</span>
					</span>
					<button className='take'>
						<div className='icon'>
							<FaShoppingBag></FaShoppingBag>
						</div>
						<span>{t('dictionary.takeIt')}</span>
					</button>
					<button className='config'>
						<div className='icon'>
							<BsGear></BsGear>
						</div>
						<span>{t('dictionary.settings')}</span>
					</button>
					<p>{t('customPlans.recommended')}</p>
				</div>
			</div>
		</StyledComponent>
	);
};
const StyledComponent = styled.section`
	.container {
		gap: 30px;
		> div {
			border-radius: 17px;
			border: 1px solid #2e2e2e;
		}
		.select-plan {
			grid-column: 1/13;
			display: flex;
			justify-content: space-around;
			align-items: center;
			gap: 20px;
			@media (min-width: 550px) {
				border-bottom: 1px solid #2c2c2c;
			}

			li {
				margin-bottom: -1px;
				/* width: 100%; */

				button {
					text-align: center;
					font-family: Inter;
					font-size: 16px;
					font-weight: 600;
					color: #b6b6b6;
					padding: 5px 30px;
					border-bottom: 3px solid transparent;
					&.active {
						color: #00ff38;
						border-bottom: 3px solid #00ff38;
					}
				}
			}
			@media (max-width: 550px) {
				flex-direction: column;
				justify-content: center;
				li {
					/* width: 100%; */
				}
			}
		}
		.plan {
			grid-column: 1/9;
			padding: 30px;
			height: 100%;
			display: flex;
			align-items: center;
			flex-direction: column;
			@media (max-width: 830px) {
				grid-column: 1/13;
			}
			p {
				color: #edeff2;
				font-family: Inter;
				font-size: 16px;
				font-weight: 700;
				margin-bottom: 20px;
			}
		}
		div.price {
			grid-column: 9/13;
			padding: 30px;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			min-width: 300px;
			@media (max-width: 830px) {
				grid-column: 1/13;
			}
			span.size {
				color: #edeff2;
				font-family: Inter;
				margin-bottom: 10px;
				font-size: 14px;
				font-weight: 600;
				display: block;
			}
			span.price {
				color: #f6f6f6;
				font-family: Inter;
				font-size: 20px;
				font-weight: 700;

				span {
					color: #c2c2c2;
					font-family: Inter;
					font-size: 12px;
					font-weight: 400;
					margin-left: 10px;
				}
			}
			button {
				color: #000;
				border: none;
				padding: 10px 20px;
				border-radius: 10px;
				margin: 10px 0;
				border-radius: 17.031px;
				width: 100%;
				display: flex;
				justify-content: center;
				gap: 20px;
				position: relative;
				.icon {
					font-size: 16px;
					position: absolute;
					left: 20px;
					display: flex;
					justify-content: center;
					align-items: center;
				}
				&.take {
					background: #00ff1a;
					.icon {
						svg {
							fill: #010901;
						}
					}
					span {
						color: #010901;
					}
				}
				&.config {
					border: 1px solid #2e2e2e;
				}
			}
			p {
				color: #f3f6f4;
				text-align: center;
				font-family: Inter;
				font-size: 10px;
				font-weight: 400;
				margin-top: 15px;
			}
		}
	}
`;
export default CustomPlans;

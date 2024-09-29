import React from 'react';
import styled from 'styled-components';
import MostVisitedItem from '@component/listItems/MostVisitedItem';
const MostVisited = () => {
	return (
		<StyledComponent>
			<h2>Most visited</h2>
			<ul>
				<MostVisitedItem></MostVisitedItem>
				<MostVisitedItem></MostVisitedItem>
				<MostVisitedItem></MostVisitedItem>
				<MostVisitedItem></MostVisitedItem>
				<MostVisitedItem></MostVisitedItem>
				<MostVisitedItem></MostVisitedItem>
			</ul>
		</StyledComponent>
	);
};

const StyledComponent = styled.div`
	/* grid-column: 8/13; */
	border-radius: 20px;
	border: 1.3px solid rgba(12, 26, 17, 0.58);
	background: rgba(12, 26, 17, 0.28);
	backdrop-filter: blur(4.349999904632568px);
	padding: 30px;
	h2 {
		margin-bottom: 20px;
		padding-left: 20px;
		position: relative;
		font-size: 20px;
		font-weight: 600;
		&::before {
			content: '';
			width: 10px;
			border-radius: 50%;
			background: var(--light-green-color);
			aspect-ratio: 1;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	ul {
		max-height: 300px;
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
		/* gap: 20px; */
		padding-right: 10px;

		&::-webkit-scrollbar {
			width: 5px;
		}

		&::-webkit-scrollbar-track {
			background: transparent;
		}

		&::-webkit-scrollbar-thumb {
			background: var(--green-color);
			border-radius: 10px;
		}
	}
`;
export default MostVisited;

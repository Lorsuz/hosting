import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface MostVisitedItemProps {
	title?: string;
	date?: string;
	link?: string;
}

const MostVisitedItem: React.FC<MostVisitedItemProps> = ({ title = 'Lorem Ipsum Dolor', date = 'April 14th, 2024', link = '/' }) => {
	return (
		<StyledComponent>
			<Link href={link}>
				<div className='text'>
					<h3>{title}</h3>
					<span>{date}</span>
				</div>
				<div className='icon'>
					<FaExternalLinkAlt></FaExternalLinkAlt>
				</div>
			</Link>
		</StyledComponent>
	);
};
const StyledComponent = styled.li`
	width: 100%;
	a {
		width: 100%;
		display: flex;
		justify-content: space-between;
		border-top: 1px solid #0C1A11;
		border-bottom: 1px solid #0C1A11;
		padding: 15px;

		.text {
			h3 {
				color: #d3d3d3;
				font-family: Inter;
				font-size: 18px;
				font-weight: 400;
			}
			span {
				color: #a5a5a5;
				font-family: Inter;
				font-size: 12px;
				font-weight: 400;
			}
		}
		.icon {
			svg {
				font-size: 20px;
				fill: #555555;
			}
		}
	}
`;
export default MostVisitedItem;

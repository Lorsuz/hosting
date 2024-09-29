import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
interface HrBlogProps {
	text?: string;
	link?: string;
	width?: string;
	align?: 'end' | 'start';
	grid?: string;
}

const HrBlog: React.FC<HrBlogProps> = ({ align = 'end', link = '/', text = '', width = '100', grid = '2/12' }) => {
	return (
		<StyledComponent $align={align} $width={width} $grid={grid}>
			{text !== '' && <Link href={link}>{text}</Link>}
			<div className='hr'></div>
		</StyledComponent>
	);
};
const StyledComponent = styled.div<{ $align: string; $width: string; $grid: string }>`
	width: ${({ $width }) => $width}%;
	margin: 20px auto;
	grid-column: ${({ $grid }) => $grid};
	a {
		color: rgba(255, 255, 255, 0.5);
		font-family: Inter;
		font-size: 14px;
		display: block;
		text-align: ${({ $align }) => $align};
		margin-bottom: 10px;
		font-weight: 400;
	}
	.hr {
		background: #0c1a11;
		height: 3px;
	}
`;
export default HrBlog;

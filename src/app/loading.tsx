'use client';
import styled from 'styled-components';
import { helix } from 'ldrs';
import Header from '@partial/Header';
export default function Loading() {
	helix.register();
	return (
		<>
			<Header></Header>
			<StyledComponent>
				<l-helix size='45' speed='2.5' color='#00FF38'></l-helix>
			</StyledComponent>
		</>
	);
}

const StyledComponent = styled.main`
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

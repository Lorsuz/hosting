'use client';
import { FaUser } from 'react-icons/fa6';
import { RiStackFill } from 'react-icons/ri';
import { BsHeadset } from 'react-icons/bs';
import styled from 'styled-components';
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<StyledComponent>
			<aside>
				<div className='logo'>
					<svg xmlns='http://www.w3.org/2000/svg' width='46' height='24' viewBox='0 0 46 24' fill='none'>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M33.8203 0C34.0867 0.622607 34.237 1.32792 34.237 2.07517C34.237 4.59655 32.5261 6.64054 30.4156 6.64054H0.955742C0.689333 6.01793 0.539062 5.31262 0.539062 4.56537C0.539062 2.04399 2.24997 0 4.36047 0H33.8203Z'
							fill='white'
						/>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M45.2468 17.3594C45.5132 17.982 45.6635 18.6873 45.6635 19.4345C45.6635 21.9559 43.9526 23.9999 41.8421 23.9999H12.3823C12.1158 23.3773 11.9656 22.672 11.9656 21.9247C11.9656 19.4034 13.6765 17.3594 15.787 17.3594H45.2468Z'
							fill='white'
						/>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M45.2484 15.2622C45.5145 14.6505 45.6647 13.9576 45.6647 13.2234C45.6647 10.7463 43.9552 8.73817 41.8464 8.73817H0.955163C0.688969 9.34985 0.538818 10.0428 0.538818 10.7769C0.538818 13.2541 2.24835 15.2622 4.35716 15.2622H45.2484Z'
							fill='white'
						/>
					</svg>
				</div>
				<nav>
					<ul>
						<li>
							<FaUser></FaUser>
						</li>
						<li>
							<RiStackFill></RiStackFill>
						</li>
						<li>
							<BsHeadset></BsHeadset>
						</li>
					</ul>
				</nav>
			</aside>
			{children}
		</StyledComponent>
	);
}

const StyledComponent = styled.main`
	display: grid;
	grid-template-columns: 100px 1fr;
	> aside {
		grid-column: 1;
		border-radius: 0px 20px 20px 0px;
		background: #001505;
		display: flex;
		align-items: center;
		/* justify-content: center; */
		flex-direction: column;
		padding: 50px 20px;
		gap: 100px;

		.logo {
			display: flex;
			align-items: column;
			justify-content: center;

			svg {
				font-size: 3rem;
			}
		}
		nav {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			ul {
				display: flex;
				/* align-items: column; */
				/* justify-content: center; */
				flex-direction: column;
				/* gap: 50px; */
				li {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 30px 10px ;

					svg {
						font-size: 2.5rem;
						opacity: 0.25;
					}
					&:first-child{
						padding-top: 0;
					}
					&:last-child{
						padding-bottom: 0; 
					}
					&:not(:last-child) {
						border-bottom: 1px solid rgba(255, 255, 255, 0.2);

					}
				}
			}
		}
	}
`;

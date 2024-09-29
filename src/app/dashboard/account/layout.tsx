'use client';
import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { RiShieldKeyholeLine } from 'react-icons/ri';
import { IoIosNotifications } from 'react-icons/io';
import { FaStackOverflow } from 'react-icons/fa';
import { FaRegFileCode } from 'react-icons/fa';
import { TbFolderShare } from 'react-icons/tb';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<StyledComponent>
			<aside className='internal-aside'>
				<h1>Account</h1>
				<nav>
					<h2>General</h2>
					<ul>
						<li>
							<div className='icon'>
								<CgProfile />
							</div>
							<span>Profile</span>
						</li>
						<li>
							<div className='icon'>
								<RiShieldKeyholeLine />
							</div>
							<span>Authentication</span>
						</li>
					</ul>
					<h2>Others</h2>
					<ul>
						<li>
							<div className='icon'>
								<IoIosNotifications />
							</div>
							<span>Notifications</span>
						</li>
						<li>
							<div className='icon'>
								<FaStackOverflow />
							</div>
							<span>Users</span>
						</li>
						<li>
							<div className='icon'>
								<FaRegFileCode />
							</div>
							<span>API</span>
						</li>
						<li>
							<div className='icon'>
								<TbFolderShare />
							</div>
							<span>Affiliate</span>
						</li>
					</ul>
				</nav>
			</aside>
			{children}
		</StyledComponent>
	);
}
const StyledComponent = styled.section`
	padding: 0;
	grid-column: 2;
	grid-template-columns: 200px 1fr;
	display: grid;

	> aside {
		border-radius: 0px 20px 20px 0px;
		border: 1px solid #0e1f12;
		border-left: none;
		background: #000901;
		grid-column: 1;
		padding: 100px 15px;
		h1 {
			color: #fff;
			font-family: Inter;
			font-size: 16px;
			font-weight: 700;
			line-height: 187%; /* 29.92px */
		}
		nav {
			h2 {
				color: rgba(255, 255, 255, 0.5);
				font-family: Inter;
				font-size: 12px;
				font-weight: 500;
				padding: 10px 0;
				line-height: 187%; /* 22.44px */
			}
			ul {
				display: flex;
				flex-direction: column;
				li {
					display: flex;
					align-items: center;
					width: 100%;
					gap: 10px;
					padding: 10px 10px;
					.icon {
						opacity: 0.25;
						display: flex;
						justify-content: center;
						align-items: center;
						svg {
							font-size: 28px;
						}
					}
					span {
						color: rgba(255, 255, 255, 0.25);
						font-family: Inter;
						font-size: 14px;
						font-weight: 500;
						line-height: 187%; /* 26.18px */
					}
				}
			}
		}
	}
`;

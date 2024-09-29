import { useState } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa6';
import { VscDash } from 'react-icons/vsc';

const ReqResFAQ = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<StyledComponent>
			<div className='req' onClick={handleToggle}>
				<p>What is VPS (Virtual Private Server) hosting and why do I need it for my website?</p>
				<button className={`icon ${isOpen && 'active'}`}>{isOpen ? <VscDash></VscDash> : <FaPlus></FaPlus>}</button>
			</div>
			{isOpen && (
				<div className='res'>
					<p>
						VPS hosting provides you with a dedicated portion of server resources in a virtual environment. This means you have more control, flexibility, and reliability compared
						to shared hosting. You need VPS hosting for your website if you require enhanced performance, security, and customization options beyond what shared hosting can offer
					</p>
				</div>
			)}
		</StyledComponent>
	);
};

const StyledComponent = styled.li`
	.req {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 0px;
		border-bottom: 1px solid #2e2e2e;
		cursor: pointer;
		font-weight: 600;
		gap: 10px;
		.icon {
			background: #2e2e2e;
			border-radius: 50%;
			padding: 5px;
			display: flex;
			align-items: center;
			justify-content: center;
			border: 1px solid #494949;
			&.active {
				border-color: #ffffff;
			}
			svg {
				color: #fff;
			}
		}
	}
	.res {
		padding: 20px;
		background: #2e2e2e;
		border-radius: 0 0 10px 10px;
		p {
			color: #d0d0d0;
		}
	}
`;

export default ReqResFAQ;

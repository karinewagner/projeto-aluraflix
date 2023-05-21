import styled from "styled-components";

export const Footer = styled.footer`
	width: 100%;
	height: 140px;

	background-color: #101010;

	padding: 0 2rem;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	border-top: 2px solid #2a7ae4;

	margin-top: 96px;

	.logo {
		height: 60px;

		object-fit: contain;
	}

	p,
	strong {
		text-align: center;
		color: #fff;
	}

	strong,
	span {
		font-weight: bold;
	}
	span {
		color: #2a7ae4;
	}
`;

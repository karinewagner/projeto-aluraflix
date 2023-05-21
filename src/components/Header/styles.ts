import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	height: 94px;

	background-color: #000;

	padding: 0 2rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	border-bottom: 2px solid #2a7ae4;
	.logo {
		height: 40px;

		object-fit: contain;
	}

	@media screen and (max-width: 900px) {
		height: 40px;
		justify-content: center;

		button {
			display: none;
		}

		.logo {
			height: 25px;
		}
	}
`;

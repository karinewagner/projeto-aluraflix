import styled from "styled-components";

export const Button = styled.button`
	cursor: pointer;

	height: 54px;
	width: 180px;

	background-color: rgba(0, 0, 0, 0.9);

	color: #fff;

	border: 1px solid #f5f5f5;
	border-radius: 4px;

	transition: all 200ms;

	&:hover {
		border: 1px solid #2a7ae4;
	}
	@media screen and (max-width: 900px) {
		width: 100%;

		background-color: #2a7ae4;
		border: none;

		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 99;
	}
`;

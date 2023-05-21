import styled from "styled-components";

export const InputContainer = styled.div`
	width: 100%;

	position: relative;

	background-color: #53585d;

	margin-bottom: 72px;

	border-radius: 4px;

	label {
		position: absolute;
		left: 9px;
		top: 6px;

		color: #e5e5e5;

		font-size: 12px;
	}

	input,
	select,
	textarea {
		font-size: 1rem;

		background-color: transparent;
		color: #fff;

		height: 50px;
		width: 100%;

		padding-left: 9px;
		padding-top: 18px;

		outline: none;
		caret-color: #2a7ae4;
	}

	select {
		padding-top: 0;
	}
	textarea {
		padding-top: 6px;

		resize: none;

		height: 150px;
	}

	input[type="color"] {
		margin-top: 9px;

		padding-right: 9px;
	}
`;

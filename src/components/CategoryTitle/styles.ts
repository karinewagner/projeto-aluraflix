import styled from "styled-components";

export const CategoryTitle = styled.div<{ backgroundColor: string }>`
	color: #fff;
	display: flex;
	align-items: center;

	background-color: #101010;

	width: fit-content;

	h2 {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 204px;
		height: 60px;

		border-radius: 4px;

		background-color: ${({ backgroundColor }) => backgroundColor};
	}
	span {
		font-size: 0.8rem;

		margin-left: 1rem;
		margin-right: 1rem;
	}

	@media screen and (max-width: 900px) {
		flex-direction: column;

		align-items: flex-start;

		h2 {
			width: auto;
			min-width: 120px;
			height: 36px;

			padding: 0 6px;

			font-size: 1rem;
		}

		span {
			margin-left: 0;
			margin-right: 0;
			margin-top: 12px;
		}
	}
`;

import styled from "styled-components";

export const NewVideo = styled.main`
	.container {
		padding: 2rem;
	}

	h3 {
		font-size: 60px;
		text-align: center;

		width: 100%;

		color: #fff;

		margin-block: 60px;
	}

	button {
		display: none;
	}

	@media screen and (max-width: 900px) {
		.container {
			padding: 1rem;
		}
	}
`;

export const Actions = styled.div`
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 0 2rem;

	.action-container {
		display: flex;
	}

	.action-btn {
		cursor: pointer;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		width: 180px;
		height: 54px;

		font-size: 22px;
		color: #fff;

		background-color: #2a7ae4;

		border-radius: 4px;

		&:nth-of-type(2) {
			margin-left: 40px;

			background-color: #9e9e9e;
			color: #000;
		}
	}
	@media screen and (max-width: 900px) {
		padding: 0 1rem;
		flex-wrap: wrap;
		justify-content: flex-end;

		.action-container {
			width: 100%;
			justify-content: space-between;
		}

		.action-btn {
			margin-bottom: 1rem;
		}

		.action-btn:nth-of-type(2) {
			margin-left: 0;
		}
	}
`;

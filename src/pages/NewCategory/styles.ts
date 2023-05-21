import styled from "styled-components";

export const NewCategory = styled.main`
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
		flex-wrap: wrap;
		justify-content: flex-end;

		.action-container {
			width: 100%;
			justify-content: space-between;
		}

		.action-btn {
			margin-bottom: 1rem;

			min-width: 120px;
			width: 45%;
		}

		.action-btn:nth-of-type(2) {
			margin-left: 0;
		}
	}
`;

export const CategoriesManager = styled.ul`
	width: 100%;

	border-radius: 4px;

	margin-top: 72px;

	color: #fff;

	li {
		display: flex;
		border: 1px solid #2a7ae4;
	}

	h4,
	p,
	.editor-container {
		border: 1px solid #2a7ae4;
		padding: 9px;
	}

	h4 {
		font-size: 1rem;
		width: 30%;
	}

	p {
		width: 100%;
	}

	.editor-container {
		display: flex;
		justify-content: space-between;
		width: 30%;
	}

	span {
		width: 45%;
		text-align: center;
	}

	.editor__btn {
		width: 45%;

		color: #fff;
		background-color: #2a7ae4;

		border-radius: 4px;
		font-weight: bold;

		transition: all 200ms;
		&:hover {
			opacity: 0.8;
		}
	}

	@media screen and (max-width: 900px) {
		li {
			flex-wrap: wrap;
		}

		h4,
		p {
			width: 50%;
			display: inline-flex;
			align-items: center;
			justify-content: center;
		}

		.editor-container {
			width: 100%;
		}

		.editor__btn {
			padding: 9px 0;
		}
	}
`;

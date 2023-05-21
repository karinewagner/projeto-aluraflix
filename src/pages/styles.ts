import styled from "styled-components";

export const Home = styled.main`
	position: relative;

	.newvideo-btn,
	.watch-btn {
		display: none;
	}

	@media screen and (max-width: 900px) {
		padding-bottom: calc(54px + 3rem);

		.watch-btn {
			display: block;

			width: 96px;
			height: 30px;

			margin: 0 auto;
			margin-top: 9px;

			border-radius: 4px;
		}

		.newvideo-btn {
			display: initial;
		}

		footer {
			display: none;
		}
	}
`;

export const Container = styled.section`
	margin-top: -256px;

	padding: 0 2rem;

	max-width: 100%;
	min-height: 400px;

	@media screen and (max-width: 900px) {
		margin-top: initial;

		padding: 0 1rem;
	}
`;

export const Wrapper = styled.div`
	z-index: 9;
	position: relative;

	width: 100%;

	margin-top: 3rem;
`;

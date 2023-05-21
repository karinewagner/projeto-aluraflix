import CategoryTitle from "../CategoryTitle";
import * as S from "./styles";
import { BannerProps } from "./types";

const Banner = ({ currentVideo }: BannerProps) => {
	const imageURL = `https://i3.ytimg.com/vi/${currentVideo.key}/maxresdefault.jpg`;
	const title =
		currentVideo.title.length > 25
			? currentVideo.title.substring(0, 30) + "..."
			: currentVideo.title;

	const description =
		currentVideo.description.length > 100
			? currentVideo.description.substring(0, 100) + "..."
			: currentVideo.description;

	return (
		<>
			<S.Banner background={`url(${imageURL})`}>
				<div className="background"></div>
				<div className="container">
					<div className="container__info">
						<CategoryTitle
							color={currentVideo.color}
							text={currentVideo.category}
						/>
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
					<a href={`https://youtu.be/${currentVideo.key}`} target="_blank">
						<img
							src={imageURL}
							alt={currentVideo.title}
							className="thumbnail"
						/>
					</a>
				</div>
			</S.Banner>
			<a href={`https://youtu.be/${currentVideo.key}`} target="_blank">
				<button className="watch-btn">Assistir</button>
			</a>
		</>
	);
};

export default Banner;

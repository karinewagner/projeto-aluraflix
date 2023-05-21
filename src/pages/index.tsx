import React, { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../contexts/Categories";
import { VideosContext } from "../contexts/Videos";
import { ICurrentVideo } from "./types";
import * as S from "./styles";
import Banner from "../components/Banner";
import VideoList from "../components/VideoList";
import CategoryTitle from "../components/CategoryTitle";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainButton from "../components/MainButton";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
	const { categories } = useContext(CategoriesContext);
	const { videos } = useContext(VideosContext);

	const [currentVideo, setCurrentVideo] = useState<ICurrentVideo>({
		key: "kyFiT4ofMwk",
		title: "Como deixar o Layout Responsivo no seu site",
		category: "Front End",
		color: "#6BD1FF",
		description:
			"Aprenda responsividade na prática com este tutorial sobre como transformar seu site num layout responsivo através do uso de ferramentas de desenvolvedor do seu navegador, o visual studio code e códigos CSS: media screen, container, propriedades CSS e mais. Comece um teste com seu próprio projeto!",
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [currentVideo]);

	return (
		<>
			<Header />
			<S.Home>
				<Banner currentVideo={currentVideo} />
				<S.Container>
					{categories.map((category) => (
						<S.Wrapper key={category.color}>
							<CategoryTitle
								color={category.color}
								text={category.title}
								subtitle={category.subtitle}
							/>
							<VideoList
								list={videos.filter(
									(video) => video.category === category.title
								)}
								color={category.color}
								setVideo={setCurrentVideo}
							/>
						</S.Wrapper>
					))}
				</S.Container>
				<Link to={"/newvideo"} className="newvideo-btn">
					<MainButton text="Novo vídeo" />
				</Link>
				<Footer />
			</S.Home>
		</>
	);
};

export default Home;

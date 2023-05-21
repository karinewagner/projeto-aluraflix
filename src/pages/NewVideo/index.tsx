import { useContext, useState } from "react";
import { CategoriesContext } from "../../contexts/Categories";
import { Link, useNavigate } from "react-router-dom";
import { VideosContext } from "../../contexts/Videos";
import * as S from "./styles";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InputContainer from "../../components/InputContainer";

const NewVideo = () => {
	const { videos, setVideos } = useContext(VideosContext);
	const { categories } = useContext(CategoriesContext);

	const [key, setKey] = useState<string>("");
	const [title, setTitle] = useState<string>("");
	const [category, setCategory] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	const navigate = useNavigate();

	const newVideo = { key, title, category, description };

	const addNewVideo = () => {
		if (
			newVideo.key &&
			newVideo.category &&
			newVideo.title &&
			videos.filter((video) => video.key === newVideo.key).length < 1
		) {
			setVideos(() => [...videos, newVideo]);
			localStorage.setItem(
				"savedVideos",
				JSON.stringify([...videos, newVideo])
			);
			navigate("/");
		} else if (
			videos.filter((video) => video.key === newVideo.key).length >= 1
		) {
			alert(`O vídeo já está na lista de videos em ${newVideo.category}`);
		} else alert("Preencha os campos");
	};

	return (
		<S.NewVideo>
			<Header />
			<div className="container">
				<h3>Novo vídeo</h3>
				<Form>
					<InputContainer>
						<label htmlFor="title">Titulo</label>
						<input
							id="title"
							onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
								setTitle(event.target.value)
							}
						/>
					</InputContainer>
					<InputContainer>
						<label htmlFor="title">Key do video</label>
						<input
							value={key}
							id="key"
							placeholder="Os 11 dígitos após youtube.com/watch?v="
							onChange={(event) => setKey(event.target.value)}
							required
						/>
					</InputContainer>
					<InputContainer>
						<label>Thumbnail do video</label>
						<input
							value={`https://i3.ytimg.com/vi/${key}/maxresdefault.jpg`}
							readOnly
						/>
					</InputContainer>
					<InputContainer>
						<select
							onChange={(e) => setCategory(e.target.value)}
							value={category}
						>
							<option>Selecione uma categoria</option>
							{categories.map((item) => (
								<option key={item.title} value={item.title}>
									{item.title}
								</option>
							))}
						</select>
					</InputContainer>
					<InputContainer>
						<textarea
							placeholder="Descrição"
							value={description}
							required
							onChange={(event) => setDescription(event.target.value)}
						/>
					</InputContainer>

					<S.Actions>
						<div className="action-container">
							<input
								onClick={() => addNewVideo()}
								type="submit"
								className="action-btn"
								value={"Salvar"}
							/>
							<input
								onClick={() => {
									setKey("");
									setTitle("");
									setCategory("");
									setDescription("");
								}}
								type="submit"
								className="action-btn"
								value={"Limpar"}
							/>
						</div>
						<Link to="/newcategory" className="action-btn">
							Nova categoria
						</Link>
					</S.Actions>
				</Form>
			</div>
			<Footer />
		</S.NewVideo>
	);
};

export default NewVideo;

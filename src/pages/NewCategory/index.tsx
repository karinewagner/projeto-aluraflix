import { useContext, useState } from "react";
import { CategoriesContext } from "../../contexts/Categories";
import * as S from "./styles";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import InputContainer from "../../components/InputContainer";
import { useNavigate } from "react-router-dom";
import { ICategory } from "../../contexts/Categories/types";

const NewCategory = () => {
	const { categories, setCategories } = useContext(CategoriesContext);

	const navigate = useNavigate();

	const [title, setTitle] = useState<string>("");
	const [color, setColor] = useState<string>("");
	const [subtitle, setSubtitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");

	const newCategory = { title, color, subtitle, description };

	const addCategory = () => {
		if (
			newCategory.title &&
			newCategory.color &&
			categories.filter((category) => category.title === newCategory.title)
				.length < 1
		) {
			setCategories(() => [...categories, newCategory]);
			localStorage.setItem(
				"savedCategories",
				JSON.stringify([...categories, newCategory])
			);
			navigate("/");
		} else if (
			categories.filter((category) => category.title === newCategory.title)
				.length >= 1
		) {
			alert("Categoria já existente!");
		} else {
			alert("Preencha todos os campos!");
		}
	};

	const removeCategory = (category: ICategory) => {
		const newCategoriesList = categories.filter(
			(item) => item.title !== category.title
		);
		setCategories(newCategoriesList);
		localStorage.setItem("savedCategories", JSON.stringify(newCategoriesList));
	};

	return (
		<S.NewCategory>
			<Header />
			<div className="container">
				<h3>Nova categoria</h3>
				<Form>
					<InputContainer>
						<label htmlFor="title">Nome</label>
						<input
							type="text"
							id="title"
							value={title}
							onChange={(event) => setTitle(event.target.value)}
						/>
					</InputContainer>
					<InputContainer>
						<label htmlFor="subtitle">Legenda</label>
						<input
							type="text"
							id="subtitle"
							value={subtitle}
							onChange={(event) => setSubtitle(event.target.value)}
						/>
					</InputContainer>
					<InputContainer>
						<textarea
							placeholder="Descrição"
							value={description}
							onChange={(event) => setDescription(event.target.value)}
						/>
					</InputContainer>
					<InputContainer>
						<label htmlFor="color">Cor</label>
						<input
							type="color"
							id="color"
							value={color}
							onChange={(event) => setColor(event.target.value)}
						/>
					</InputContainer>
					<S.Actions>
						<div className="action-container">
							<input
								type="submit"
								className="action-btn"
								onClick={() => addCategory()}
								value={"Salvar"}
							/>
							<input
								onClick={() => {
									setColor("");
									setTitle("");
									setSubtitle("");
									setDescription("");
								}}
								type="submit"
								className="action-btn"
								value={"Limpar"}
							/>
						</div>
					</S.Actions>
				</Form>
				<S.CategoriesManager>
					<li>
						<h4>Nome</h4>
						<p>Descrição</p>
						<div className="editor-container">
							<span>Editar</span>
							<span>Excluir</span>
						</div>
					</li>
					{categories.map((item) => (
						<li key={item.title}>
							<h4>{item.title}</h4>
							<p>{item.description}</p>
							<div className="editor-container">
								<button className="editor__btn">Editar</button>
								<button
									className="editor__btn"
									onClick={() => removeCategory(item)}
								>
									Excluir
								</button>
							</div>
						</li>
					))}
				</S.CategoriesManager>
			</div>

			<Footer />
		</S.NewCategory>
	);
};

export default NewCategory;

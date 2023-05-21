import { createContext, useEffect, useState } from "react";
import {
	ICategory,
	categoriesProviderProps,
	ICategoriesContext,
} from "./types";

export const CategoriesContext = createContext<ICategoriesContext>(
	{} as ICategoriesContext
);

const CategoriesProvider = ({ children }: categoriesProviderProps) => {
	const [categories, setCategories] = useState<ICategory[]>([
		{
			title: "Front End",
			color: "#6BD1FF",
			subtitle: "Formação Front End da Alura",
			description:
				"Desenvolvimento de interfaces de usuário para aplicações web e móveis.",
		},
		{
			title: "Data Science",
			color: "#69953B",
			subtitle: "Formação Data Science na Alura",
			description:
				"Análise e interpretação de dados complexos para obter insights valiosos.",
		},
		{
			title: "Mobile",
			color: "#FFBA05",
			subtitle: "Formação Mobile da Alura",
			description:
				"Desenvolvimento de aplicativos para dispositivos móveis, como smartphones e tablets.",
		},
	]);

	useEffect(() => {
		const savedCategories = localStorage.getItem("savedCategories");

		if (savedCategories) {
			setCategories(JSON.parse(savedCategories));
		}
	}, [categories]);

	const contextValues = {
		categories,
		setCategories,
	};
	return (
		<CategoriesContext.Provider value={contextValues}>
			{children}
		</CategoriesContext.Provider>
	);
};

export default CategoriesProvider;

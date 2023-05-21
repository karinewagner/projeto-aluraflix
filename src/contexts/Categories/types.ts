import React, { SetStateAction } from "react";

export interface ICategory {
	title: string;
	color: string;
	subtitle: string;
	description: string;
}

export interface ICategoriesContext {
	categories: ICategory[];
	setCategories: React.Dispatch<SetStateAction<ICategory[]>>;
}

export type categoriesProviderProps = {
	children: React.ReactNode;
};

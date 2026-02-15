export type Category = "Todos" | "Pessoais" | "Trabalho" | "Freelance" | "Estudos";

export interface Project {
	name: string;
	category: Exclude<Category, "Todos">;
	year: number | null;
	repo: string | null;
	stack: string[];
	thumb: string;
}

export type ItemsPerPage = 4 | 8 | 12;

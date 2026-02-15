import type { Category, Project } from "../types";
import projectsData from "@/data/projects.json";

export const categoryList: Category[] = [
	"Todos",
	"Pessoais",
	"Trabalho",
	"Freelance",
	"Estudos",
];

export const itemsPerPageOptions: number[] = [4, 8, 12];

export const projects = projectsData as Project[];

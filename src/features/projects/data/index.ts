import type { Category, Project } from "../types";
import projectsData from "./projects.json";

export const categoryList: Category[] = [
	"All",
	"Personal",
	"Work",
	"Freelance",
	"Studies",
];

export const itemsPerPageOptions: number[] = [4, 8, 12];

export const projects = (projectsData as Project[])
	.filter((p) => p.thumb !== "")
	.sort((a, b) => a.name.localeCompare(b.name));

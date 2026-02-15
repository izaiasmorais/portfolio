import type { Category, Project } from "../types";
import projectsData from "@/data/projects.json";

export const categoryList: Category[] = [
	"All",
	"Personal",
	"Work",
	"Freelance",
	"Studies",
];

export const itemsPerPageOptions: number[] = [4, 8, 12];

export const projects = (projectsData as Project[]).sort((a, b) => {
	const aHasThumb = a.thumb !== "";
	const bHasThumb = b.thumb !== "";

	if (aHasThumb && !bHasThumb) return -1;
	if (!aHasThumb && bHasThumb) return 1;

	return a.name.localeCompare(b.name);
});

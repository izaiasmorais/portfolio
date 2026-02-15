export type Category = "All" | "Personal" | "Work" | "Freelance" | "Studies";

export interface Project {
	name: string;
	category: Exclude<Category, "All">;
	year: number | null;
	repo: string | null;
	live: string | null;
	stack: string[];
	thumb: string;
}

export type ItemsPerPage = 4 | 8 | 12;

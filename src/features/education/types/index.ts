export type EducationType = "bachelor" | "technical" | "course";

export interface Certificate {
	title: string;
	image: string;
	url: string;
	skills: string;
}

export interface Entry {
	title: string;
	date: string;
	description: string[];
	type: EducationType;
	certificates?: Certificate[];
}

export interface Institution {
	name: string;
	subtitle?: string;
	url: string;
	entries: Entry[];
	logo: string;
	logoBg?: string;
	logoFill?: boolean;
}

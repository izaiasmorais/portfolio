import type { Job, WorkType } from "@/features/experience/types";
import type { Institution, EducationType } from "@/features/education/types";
import type { Category } from "@/features/projects/types";

export type Locale = "pt-BR" | "en";

export type SkillCategoryKey =
	| "languages"
	| "frameworks"
	| "backend"
	| "tools"
	| "devops";

export interface Dictionary {
	ui: {
		header: {
			nav: {
				home: string;
				experience: string;
				education: string;
				skills: string;
				projects: string;
				contact: string;
			};
			resume: string;
		};
		footer: {
			location: string;
			socialLabels: {
				whatsapp: string;
				linkedin: string;
				instagram: string;
				twitter: string;
				github: string;
				email: string;
			};
			ariaLabel: string;
		};
		pagination: {
			showing: string;
			of: string;
			item: string;
			items: string;
			perPage: string;
			firstPage: string;
			lastPage: string;
			previousPage: string;
			nextPage: string;
			goToPage: string;
		};
		workTypes: Record<WorkType, string>;
		educationTypes: Record<EducationType, string>;
		certificate: {
			skills: string;
			workload: string;
			workloadValue: string;
			contentType: string;
			showCredential: string;
		};
		form: {
			title: string;
			name: string;
			namePlaceholder: string;
			email: string;
			emailPlaceholder: string;
			message: string;
			messagePlaceholder: string;
			submit: string;
		};
	};
	home: {
		bio: string;
	};
	experience: {
		title: string;
		subtitle: string;
		jobs: Job[];
	};
	education: {
		title: string;
		subtitle: string;
		educationHeading: string;
		coursesHeading: string;
		institutions: Institution[];
		courses: Institution[];
	};
	skills: {
		title: string;
		subtitle: string;
		categories: Record<SkillCategoryKey, string>;
	};
	projects: {
		title: string;
		subtitle: string;
		categories: Record<Category, string>;
	};
	contact: {
		title: string;
		subtitle: string;
	};
}

import type { SkillCategoryKey } from "@/shared/i18n/types";

export type SkillIcon =
	| { type: "svg"; src: string }
	| { type: "svg-themed"; light: string; dark: string };

export interface Skill {
	name: string;
	icon: SkillIcon;
}

export interface SkillCategory {
	key: SkillCategoryKey;
	skills: Skill[];
}

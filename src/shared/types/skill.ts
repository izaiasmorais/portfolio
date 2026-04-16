export type SkillIcon =
	| { type: "svg"; src: string }
	| { type: "svg-themed"; light: string; dark: string }

export interface Skill {
	name: string
	icon: SkillIcon
}

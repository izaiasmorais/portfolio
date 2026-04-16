import { categories } from "@/shared/data/skills"
import type { Skill } from "@/shared/types/skill"

const skillByName = new Map<string, Skill>(
	categories.flatMap((category) => category.skills.map((skill) => [skill.name, skill])),
)

export function resolveSkillsByName(names: string[]): Skill[] {
	return names.map((name) => skillByName.get(name)).filter((skill): skill is Skill => !!skill)
}

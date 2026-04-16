import type { Skill } from "@/shared/types/skill"
import { SkillIcon } from "./skill-icon"

export function SkillBadge({ name, icon }: Skill) {
	return (
		<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border text-sm font-medium hover:border-muted-foreground/30 transition-colors cursor-default">
			<SkillIcon icon={icon} />
			<span className="text-foreground">{name}</span>
		</div>
	)
}

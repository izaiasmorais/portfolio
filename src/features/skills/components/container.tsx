"use client";

import { SectionContainer } from "@/shared/components/section-container";
import { useLanguage } from "@/shared/i18n/use-language";
import { categories } from "../data";
import { SkillBadge } from "./skill-badge";

export function SkillsSection() {
	const { t } = useLanguage();

	return (
		<SectionContainer
			id="skills"
			title={t.skills.title}
			subtitle={t.skills.subtitle}
		>
			<div className="flex flex-col gap-10">
				{categories.map((category) => (
					<div key={category.key} className="flex flex-col gap-4">
						<h3 className="text-muted-foreground text-xs uppercase tracking-widest pl-1">
							{t.skills.categories[category.key]}
						</h3>
						<div className="flex flex-wrap gap-3">
							{category.skills.map((skill) => (
								<SkillBadge key={skill.name} {...skill} />
							))}
						</div>
					</div>
				))}
			</div>
		</SectionContainer>
	);
}

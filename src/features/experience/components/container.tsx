"use client";

import { SectionContainer } from "@/shared/components/section-container";
import { useLanguage } from "@/shared/i18n/use-language";
import { JobCard } from "./job-card";

export function ExperienceSection() {
	const { t } = useLanguage();

	return (
		<SectionContainer
			id="experience"
			title={t.experience.title}
			subtitle={t.experience.subtitle}
		>
			<div className="flex flex-col relative max-w-4xl">
				{t.experience.jobs.map((job, index) => (
					<JobCard
						key={index}
						job={job}
						isLast={index === t.experience.jobs.length - 1}
					/>
				))}
			</div>
		</SectionContainer>
	);
}

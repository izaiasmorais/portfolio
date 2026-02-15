"use client";

import { SectionContainer } from "@/shared/components/section-container";
import { useLanguage } from "@/shared/i18n/use-language";
import { Timeline } from "./timeline";

export function EducationSection() {
	const { t } = useLanguage();

	return (
		<SectionContainer
			id="education"
			title={t.education.title}
			subtitle={t.education.subtitle}
		>
			<div className="mb-12">
				<h3 className="text-xl font-semibold text-foreground mb-6">
					{t.education.educationHeading}
				</h3>
				<Timeline items={t.education.institutions} />
			</div>

			<div>
				<h3 className="text-xl font-semibold text-foreground mb-6">
					{t.education.coursesHeading}
				</h3>
				<Timeline items={t.education.courses} />
			</div>
		</SectionContainer>
	);
}

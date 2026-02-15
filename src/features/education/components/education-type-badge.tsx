"use client";

import type { EducationType } from "../types";
import { useLanguage } from "@/shared/i18n/use-language";

export function EducationTypeBadge({ type }: { type: EducationType }) {
	const { t } = useLanguage();

	return (
		<span
			className="text-[10px] md:text-xs font-medium px-2 py-0.5 rounded-md bg-white dark:bg-transparent text-muted-foreground
		dark:text-foreground/50 border border-border"
		>
			{t.ui.educationTypes[type]}
		</span>
	);
}

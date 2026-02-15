"use client";

import type { WorkType } from "../types";
import { useLanguage } from "@/shared/i18n/use-language";

interface WorkTypeBadgeProps {
	type: WorkType;
}

export function WorkTypeBadge({ type }: WorkTypeBadgeProps) {
	const { t } = useLanguage();

	return (
		<span className="text-[10px] md:text-xs font-medium px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border">
			{t.ui.workTypes[type]}
		</span>
	);
}

"use client";

import type { WorkType } from "../types";
import { useLanguage } from "@/shared/i18n/use-language";
import { TypeBadge } from "@/shared/components/type-badge";

export function WorkTypeBadge({ type }: { type: WorkType }) {
	const { t } = useLanguage();

	return <TypeBadge label={t.ui.workTypes[type]} />;
}

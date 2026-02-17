"use client";

import type { EducationType } from "../types";
import { useLanguage } from "@/shared/i18n/use-language";
import { TypeBadge } from "@/shared/components/type-badge";

export function EducationTypeBadge({ type }: { type: EducationType }) {
	const { t } = useLanguage();

	return <TypeBadge label={t.ui.educationTypes[type]} />;
}

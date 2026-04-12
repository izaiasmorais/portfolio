"use client"

import { TypeBadge } from "@/shared/components/type-badge"
import { useLanguage } from "@/shared/i18n/use-language"
import type { EducationType } from "../types"

export function EducationTypeBadge({ type }: { type: EducationType }) {
	const { t } = useLanguage()

	return <TypeBadge label={t.ui.educationTypes[type]} />
}

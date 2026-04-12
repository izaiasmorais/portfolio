"use client"

import { TypeBadge } from "@/shared/components/type-badge"
import { useLanguage } from "@/shared/i18n/use-language"
import type { WorkType } from "../types"

export function WorkTypeBadge({ type }: { type: WorkType }) {
	const { t } = useLanguage()

	return <TypeBadge label={t.ui.workTypes[type]} />
}

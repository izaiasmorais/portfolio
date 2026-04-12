import { z } from "zod"
import type { Dictionary } from "@/shared/i18n/types"

export function createContactSchema(messages: Dictionary["ui"]["form"]["validation"]) {
	return z.object({
		name: z
			.string()
			.min(1, messages.nameRequired)
			.min(2, messages.nameMin)
			.max(100, messages.nameMax),
		email: z.string().min(1, messages.emailRequired).email(messages.emailInvalid).max(254),
		message: z
			.string()
			.min(1, messages.messageRequired)
			.min(10, messages.messageMin)
			.max(5000, messages.messageMax),
		website: z.string().max(0).optional(),
	})
}

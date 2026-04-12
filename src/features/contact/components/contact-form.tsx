"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMemo, useTransition } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { GlowButton } from "@/shared/components/glow-button"
import { Form } from "@/shared/components/ui/form"
import { useLanguage } from "@/shared/i18n/use-language"
import { sendContactEmail } from "../actions/send-email"
import { createContactSchema } from "../data"
import type { ContactFormValues } from "../types"
import { ContactFormFields } from "./contact-form-fields"

export function ContactForm() {
	const { t } = useLanguage()
	const [isPending, startTransition] = useTransition()

	const schema = useMemo(() => createContactSchema(t.ui.form.validation), [t])

	const form = useForm<ContactFormValues>({
		resolver: zodResolver(schema),
		defaultValues: {
			name: "",
			email: "",
			message: "",
			website: "",
		},
	})

	function onSubmit(values: ContactFormValues) {
		startTransition(async () => {
			const result = await sendContactEmail(values)

			if (result.success) {
				toast.success(t.ui.form.success)
				form.reset()
			} else {
				toast.error(t.ui.form.error)
			}
		})
	}

	return (
		<div className="w-full bg-card border border-border p-8 rounded-2xl">
			<h3 className="text-xl font-bold text-foreground mb-6">{t.ui.form.title}</h3>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
					<ContactFormFields control={form.control} formLabels={t.ui.form} />

					<GlowButton
						type="submit"
						disabled={isPending}
						className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-3 rounded-lg transition-colors text-sm"
					>
						{isPending ? t.ui.form.sending : t.ui.form.submit}
					</GlowButton>
				</form>
			</Form>
		</div>
	)
}

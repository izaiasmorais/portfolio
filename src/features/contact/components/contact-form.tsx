"use client";

import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { GlowButton } from "@/shared/components/glow-button";
import { useLanguage } from "@/shared/i18n/use-language";

export function ContactForm() {
	const { t } = useLanguage();

	return (
		<div className="w-full bg-card border border-border p-8 rounded-2xl">
			<h3 className="text-xl font-bold text-foreground mb-6">
				{t.ui.form.title}
			</h3>

			<form className="flex flex-col gap-5">
				<div className="flex flex-col gap-2">
					<label
						htmlFor="name"
						className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
					>
						{t.ui.form.name}
					</label>
					<Input
						type="text"
						id="name"
						placeholder={t.ui.form.namePlaceholder}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="email"
						className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
					>
						{t.ui.form.email}
					</label>
					<Input
						type="email"
						id="email"
						placeholder={t.ui.form.emailPlaceholder}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label
						htmlFor="message"
						className="text-xs font-medium text-muted-foreground uppercase tracking-wide"
					>
						{t.ui.form.message}
					</label>
					<Textarea
						id="message"
						rows={4}
						placeholder={t.ui.form.messagePlaceholder}
						className="resize-none"
					/>
				</div>

				<GlowButton
					type="submit"
					className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-3 rounded-lg transition-colors text-sm"
				>
					{t.ui.form.submit}
				</GlowButton>
			</form>
		</div>
	);
}

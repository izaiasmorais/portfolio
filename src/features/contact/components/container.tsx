"use client";

import { SectionContainer } from "@/shared/components/section-container";
import { useLanguage } from "@/shared/i18n/use-language";
import { ContactForm } from "./contact-form";

export function ContactSection() {
	const { t } = useLanguage();

	return (
		<SectionContainer
			id="contact"
			title={t.contact.title}
			subtitle={t.contact.subtitle}
		>
			<div className="flex flex-col items-start w-full">
				<div className="w-full flex justify-center">
					<ContactForm />
				</div>
			</div>
		</SectionContainer>
	);
}

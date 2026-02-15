"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
	Building03Icon,
	Linkedin02Icon,
	InstagramIcon,
	GithubIcon,
	WhatsappIcon,
	Mail01Icon,
	NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { useLanguage } from "@/shared/i18n/use-language";
import { SocialLink } from "./social-link";

export function Footer() {
	const { t } = useLanguage();

	const socialLinks = [
		{
			href: "https://api.whatsapp.com/send/?phone=5586981475447&text&type=phone_number&app_absent=0",
			label: t.ui.footer.socialLabels.whatsapp,
			icon: WhatsappIcon,
		},
		{
			href: "https://www.linkedin.com/in/izaiasmorais/",
			label: t.ui.footer.socialLabels.linkedin,
			icon: Linkedin02Icon,
		},
		{
			href: "https://www.instagram.com/izaiasmorais_/",
			label: t.ui.footer.socialLabels.instagram,
			icon: InstagramIcon,
		},
		{
			href: "https://x.com/izaias3_",
			label: t.ui.footer.socialLabels.twitter,
			icon: NewTwitterIcon,
		},
		{
			href: "https://github.com/izaiasmorais",
			label: t.ui.footer.socialLabels.github,
			icon: GithubIcon,
		},
		{
			href: "mailto:izaias.morais08@gmail.com",
			label: t.ui.footer.socialLabels.email,
			icon: Mail01Icon,
		},
	];

	return (
		<footer className="w-full px-6 py-8">
			<div className="max-w-300 mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-xs md:text-sm text-foreground">
				<div className="flex items-center gap-3">
					<HugeiconsIcon
						icon={Building03Icon}
						size={20}
						strokeWidth={2}
						aria-hidden="true"
					/>
					<span className="font-medium tracking-wide">
						{t.ui.footer.location}
					</span>
				</div>

				<nav
					aria-label={t.ui.footer.ariaLabel}
					className="flex items-center gap-6"
				>
					{socialLinks.map((link) => (
						<SocialLink
							key={link.href}
							href={link.href}
							label={link.label}
							icon={link.icon}
						/>
					))}
				</nav>
			</div>
		</footer>
	);
}

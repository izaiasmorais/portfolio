"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import { Building03Icon } from "@hugeicons/core-free-icons";
import { useLanguage } from "@/shared/i18n/use-language";
import { SocialLink } from "./social-link";
import { getSocialLinks } from "./mocks";

export function Footer() {
	const { t } = useLanguage();

	const socialLinks = getSocialLinks(t.ui.footer.socialLabels);

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

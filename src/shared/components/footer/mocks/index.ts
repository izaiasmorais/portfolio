import {
	Linkedin02Icon,
	InstagramIcon,
	GithubIcon,
	WhatsappIcon,
	Mail01Icon,
	NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import type { Dictionary } from "@/shared/i18n/types";

export function getSocialLinks(socialLabels: Dictionary["ui"]["footer"]["socialLabels"]) {
	return [
		{
			href: "https://api.whatsapp.com/send/?phone=5586981475447&text&type=phone_number&app_absent=0",
			label: socialLabels.whatsapp,
			icon: WhatsappIcon,
		},
		{
			href: "https://www.linkedin.com/in/izaiasmorais/",
			label: socialLabels.linkedin,
			icon: Linkedin02Icon,
		},
		{
			href: "https://www.instagram.com/izaiasmorais_/",
			label: socialLabels.instagram,
			icon: InstagramIcon,
		},
		{
			href: "https://x.com/izaias3_",
			label: socialLabels.twitter,
			icon: NewTwitterIcon,
		},
		{
			href: "https://github.com/izaiasmorais",
			label: socialLabels.github,
			icon: GithubIcon,
		},
		{
			href: "mailto:izaias.morais08@gmail.com",
			label: socialLabels.email,
			icon: Mail01Icon,
		},
	];
}

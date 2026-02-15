import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

interface SocialLinkProps {
	href: string;
	label: string;
	icon: IconSvgElement;
}

export function SocialLink({ href, label, icon }: SocialLinkProps) {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="hover:text-muted-foreground transition-colors"
			aria-label={label}
		>
			<HugeiconsIcon icon={icon} size={18} strokeWidth={2} aria-hidden="true" />
		</Link>
	);
}

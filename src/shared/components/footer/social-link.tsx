import type { IconSvgElement } from "@hugeicons/react"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

interface SocialLinkProps {
	href: string
	label: string
	icon: IconSvgElement
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
			<HugeiconsIcon icon={icon} size={20} aria-hidden="true" />
		</Link>
	)
}

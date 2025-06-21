"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
	href: string;
	children: React.ReactNode;
}

export function NavbarItem({ href, children }: NavbarItemProps) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<li>
			<Link
				href={href}
				className={`transition-colors hover:text-foreground ${
					isActive ? "text-foreground hover:text-foreground/50" : "text-muted-foreground"
				}`}
			>
				{children}
			</Link>
		</li>
	);
}

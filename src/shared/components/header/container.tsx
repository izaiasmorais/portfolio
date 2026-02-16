"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "@/shared/components/header/theme-switcher";
import { LanguageSwitcher } from "@/shared/i18n/language-switcher";
import { useLanguage } from "@/shared/i18n/use-language";
import { cn } from "@/shared/utils/cn";
import { navPaths } from "./mocks";
import { MobileNav } from "./mobile-nav";
import { ResumeDropdown } from "./resume-dropdown";

export function Header() {
	const pathname = usePathname();
	const { t } = useLanguage();

	return (
		<header className="fixed top-0 left-0 right-0 z-50 py-6 bg-background/80 backdrop-blur-sm transition-colors duration-300">
			<div className="max-w-300 mx-auto flex items-center justify-between px-6">
				<Link
					href="/"
					className="text-foreground font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
				>
					izaiasmorais
				</Link>

				<nav className="hidden md:flex items-center gap-8">
					{navPaths.map((item) => (
						<Link
							key={item.key}
							href={item.path}
							className={cn(
								"text-sm font-medium transition-colors",
								pathname === item.path
									? "text-foreground font-bold"
									: "text-muted-foreground hover:text-foreground",
							)}
						>
							{t.ui.header.nav[item.key]}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<LanguageSwitcher />

					<ThemeSwitcher />

					<ResumeDropdown className="hidden md:inline-flex" />

					<MobileNav />
				</div>
			</div>
		</header>
	);
}

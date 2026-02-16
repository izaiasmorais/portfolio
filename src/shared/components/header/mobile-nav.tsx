"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, VisuallyHidden } from "radix-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { useLanguage } from "@/shared/i18n/use-language";
import { GlowButton } from "@/shared/components/glow-button";
import { cn } from "@/shared/utils/cn";
import { navPaths } from "./mocks";
import { ResumeDropdown } from "./resume-dropdown";

export function MobileNav() {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();
	const { t } = useLanguage();

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Trigger asChild>
				<GlowButton
					variant="secondary"
					size="icon"
					aria-label="Open menu"
					className="md:hidden"
				>
					<HugeiconsIcon icon={Menu01Icon} size={18} />
				</GlowButton>
			</Dialog.Trigger>

			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

				<Dialog.Content className="fixed inset-0 z-50 flex flex-col bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
					<VisuallyHidden.Root>
						<Dialog.Title>Menu</Dialog.Title>
					</VisuallyHidden.Root>

					<div className="flex items-center justify-between px-6 py-6">
						<Link
							href="/"
							onClick={() => setOpen(false)}
							className="text-foreground font-bold text-lg tracking-tight"
						>
							izaiasmorais
						</Link>

						<Dialog.Close asChild>
							<GlowButton
								variant="secondary"
								size="icon"
								aria-label="Close menu"
							>
								<HugeiconsIcon icon={Cancel01Icon} size={18} />
							</GlowButton>
						</Dialog.Close>
					</div>

					<nav className="flex flex-1 flex-col items-center justify-center gap-8">
						{navPaths.map((item) => (
							<Link
								key={item.key}
								href={item.path}
								onClick={() => setOpen(false)}
								className={cn(
									"text-2xl font-medium transition-colors",
									pathname === item.path
										? "text-foreground font-bold"
										: "text-muted-foreground hover:text-foreground",
								)}
							>
								{t.ui.header.nav[item.key]}
							</Link>
						))}
					</nav>

					<div className="flex items-center justify-center gap-3 px-6 py-8">
						<ResumeDropdown />
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}

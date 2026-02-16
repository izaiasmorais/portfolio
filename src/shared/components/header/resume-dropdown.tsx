"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/shared/i18n/use-language";
import { GlowButton } from "@/shared/components/glow-button";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/shared/components/ui/dropdown-menu";

const RESUME_LINKS = {
	portuguese:
		"https://drive.google.com/file/d/1R_d8wX4KnMfybElu7vtSwwF99axyrmXH/view?usp=sharing",
	english:
		"https://drive.google.com/file/d/1fm9AGJIVGyc87biqqEJT7HGv9wLyJ3WF/view?usp=sharing",
};

const RESUME_OPTIONS = [
	{ key: "portuguese" as const, flag: "/flags/br.svg" },
	{ key: "english" as const, flag: "/flags/us.svg" },
];

interface ResumeDropdownProps {
	className?: string;
}

export function ResumeDropdown({ className }: ResumeDropdownProps) {
	const { t } = useLanguage();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<GlowButton className={className}>
					<span className="text-xs">{t.ui.header.resume}</span>
				</GlowButton>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
				{RESUME_OPTIONS.map((option) => (
					<DropdownMenuItem key={option.key} asChild>
						<Link
							href={RESUME_LINKS[option.key]}
							target="_blank"
							rel="noopener noreferrer"
							className="cursor-pointer"
						>
							<Image
								src={option.flag}
								alt=""
								width={20}
								height={14}
								className="rounded-[2px]"
							/>
							{t.ui.header.resumeOptions[option.key]}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

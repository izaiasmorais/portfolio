import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare02Icon } from "@hugeicons/core-free-icons";
import { useLanguage } from "@/shared/i18n/use-language";
import type { Project } from "../types";
import { TechBadges } from "./tech-badges";

interface ProjectCardProps {
	project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
	const { t } = useLanguage();

	return (
		<div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-sm transition-all duration-300 flex flex-col">
			<div className="relative w-full aspect-video overflow-hidden bg-muted border-b border-border">
				{project.thumb && (
					<Image
						src={project.thumb}
						alt={project.name}
						fill
						className="object-cover transition-transform duration-500 group-hover:scale-105"
					/>
				)}
				{project.repo && (
					<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
						<Link
							href={project.repo}
							target="_blank"
							rel="noopener noreferrer"
							className="p-1.5 bg-background/90 rounded-full backdrop-blur-sm shadow-sm hover:scale-105 transition-transform text-foreground block"
						>
							<HugeiconsIcon icon={LinkSquare02Icon} size={14} />
						</Link>
					</div>
				)}
			</div>

			<div className="p-4 flex flex-col flex-1">
				<div className="flex items-start justify-between mb-2">
					<div className="flex flex-col min-w-0">
						<h3 className="font-semibold text-foreground text-sm truncate pr-2">
							{project.name}
						</h3>
						<span className="text-xs text-muted-foreground">
							{t.projects.categories[project.category]}
							{project.year && ` · ${project.year}`}
						</span>
					</div>
				</div>

				<TechBadges stack={project.stack} />
			</div>
		</div>
	);
}

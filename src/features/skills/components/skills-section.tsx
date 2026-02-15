"use client";

import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Shield01Icon } from "@hugeicons/core-free-icons";
import { SectionContainer } from "@/shared/components/section-container";
import { useLanguage } from "@/shared/i18n/use-language";
import type { SkillCategoryKey } from "@/shared/i18n/types";

type SkillIcon =
	| { type: "svg"; src: string }
	| { type: "svg-themed"; light: string; dark: string }
	| { type: "fallback"; icon: React.ReactNode };

interface Skill {
	name: string;
	icon: SkillIcon;
}

interface SkillCategory {
	key: SkillCategoryKey;
	skills: Skill[];
}

function svg(src: string): SkillIcon {
	return { type: "svg", src };
}

function svgThemed(name: string): SkillIcon {
	return {
		type: "svg-themed",
		light: `/skills/${name}-light.svg`,
		dark: `/skills/${name}-dark.svg`,
	};
}

function SkillIcon({ icon }: { icon: SkillIcon }) {
	switch (icon.type) {
		case "svg":
			return (
				<Image
					src={icon.src}
					alt=""
					width={16}
					height={16}
					className="size-4"
				/>
			);
		case "svg-themed":
			return (
				<>
					<Image
						src={icon.light}
						alt=""
						width={16}
						height={16}
						className="size-4 dark:hidden"
					/>
					<Image
						src={icon.dark}
						alt=""
						width={16}
						height={16}
						className="size-4 hidden dark:block"
					/>
				</>
			);
		case "fallback":
			return <span>{icon.icon}</span>;
	}
}

function SkillBadge({ name, icon }: Skill) {
	return (
		<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border text-xs md:text-sm font-medium hover:border-muted-foreground/30 transition-colors cursor-default">
			<SkillIcon icon={icon} />
			<span className="text-foreground">{name}</span>
		</div>
	);
}

const categories: SkillCategory[] = [
	{
		key: "languages",
		skills: [
			{ name: "JavaScript", icon: svg("/skills/javascript.svg") },
			{ name: "TypeScript", icon: svg("/skills/typescript.svg") },
			{ name: "Python", icon: svg("/skills/python.svg") },
			{ name: "HTML", icon: svg("/skills/html.svg") },
			{ name: "CSS", icon: svg("/skills/css.svg") },
			{ name: "SQL", icon: svgThemed("sql") },
		],
	},
	{
		key: "frameworks",
		skills: [
			{ name: "React", icon: svgThemed("react") },
			{ name: "Next.js", icon: svg("/skills/nextjs.svg") },
			{ name: "Vue.js", icon: svg("/skills/vuejs.svg") },
			{ name: "TailwindCSS", icon: svg("/skills/tailwindcss.svg") },
			{ name: "shadcn/ui", icon: svgThemed("shadcn") },
			{ name: "TanStack Query", icon: svg("/skills/tanstack.svg") },
			{ name: "Resend", icon: svgThemed("resend") },
			{
				name: "BetterAuth",
				icon: {
					type: "fallback",
					icon: (
						<HugeiconsIcon
							icon={Shield01Icon}
							size={16}
							className="text-foreground"
						/>
					),
				},
			},
			{ name: "Trigger.dev", icon: svg("/skills/trigger.svg") },
			{ name: "Vitest", icon: svg("/skills/vitest.svg") },
			{ name: "Playwright", icon: svg("/skills/playwright.svg") },
		],
	},
	{
		key: "backend",
		skills: [
			{ name: "Node.js", icon: svg("/skills/nodejs.svg") },
			{ name: "Express.js", icon: svgThemed("expressjs") },
			{ name: "Fastify", icon: svgThemed("fastify") },
			{ name: "FastAPI", icon: svg("/skills/fastapi.svg") },
			{ name: "SQLAlchemy", icon: svg("/skills/sqlalchemy.svg") },
			{ name: "Drizzle", icon: svgThemed("drizzle") },
			{ name: "Prisma", icon: svgThemed("prisma") },
			{ name: "PostgreSQL", icon: svg("/skills/postgresql.svg") },
			{ name: "MongoDB", icon: svgThemed("mongodb") },
			{ name: "Mongoose", icon: svg("/skills/mongoose.svg") },
			{ name: "Redis", icon: svg("/skills/redis.svg") },
			{ name: "MinIO", icon: svg("/skills/minio.svg") },
			{ name: "MySQL", icon: svg("/skills/mysql.svg") },
			{ name: "DataGrip", icon: svg("/skills/datagrip.svg") },
			{ name: "DBeaver", icon: svg("/skills/dbeaver.svg") },
			{ name: "MySQL Workbench", icon: svg("/skills/mysql-workbench.svg") },
			{ name: "Keycloak", icon: svg("/skills/keycloak.svg") },
		],
	},
	{
		key: "tools",
		skills: [
			{ name: "Cursor", icon: svgThemed("cursor") },
			{ name: "VS Code", icon: svg("/skills/vscode.svg") },
			{ name: "Claude Code", icon: svg("/skills/claude.svg") },
			{ name: "Postman", icon: svg("/skills/postman.svg") },
			{ name: "Figma", icon: svg("/skills/figma.svg") },
			{ name: "Notion", icon: svgThemed("notion") },
			{ name: "Ubuntu WSL", icon: svg("/skills/ubuntu.svg") },
		],
	},
	{
		key: "devops",
		skills: [
			{
				name: "GitHub Actions (CI/CD)",
				icon: svg("/skills/github-actions.svg"),
			},
			{ name: "Docker", icon: svg("/skills/docker.svg") },
			{ name: "GitHub", icon: svgThemed("github") },
			{ name: "Vercel", icon: svgThemed("vercel") },
			{ name: "Cloudflare", icon: svg("/skills/cloudflare.svg") },
			{ name: "Coolify", icon: svg("/skills/coolify.svg") },
			{ name: "Azure DevOps", icon: svg("/skills/azure-devops.svg") },
			{ name: "Google Cloud Console", icon: svg("/skills/google-cloud.svg") },
		],
	},
];

export function SkillsSection() {
	const { t } = useLanguage();

	return (
		<SectionContainer
			id="skills"
			title={t.skills.title}
			subtitle={t.skills.subtitle}
		>
			<div className="flex flex-col gap-10">
				{categories.map((category) => (
					<div key={category.key} className="flex flex-col gap-4">
						<h3 className="text-muted-foreground text-xs uppercase tracking-widest pl-1">
							{t.skills.categories[category.key]}
						</h3>
						<div className="flex flex-wrap gap-3">
							{category.skills.map((skill, sIdx) => (
								<SkillBadge key={sIdx} {...skill} />
							))}
						</div>
					</div>
				))}
			</div>
		</SectionContainer>
	);
}

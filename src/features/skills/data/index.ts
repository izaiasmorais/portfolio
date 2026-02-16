import type { SkillIcon, SkillCategory } from "../types";

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

export { svg, svgThemed };

export const categories: SkillCategory[] = [
	{
		key: "languages",
		skills: [
			{ name: "JavaScript", icon: svg("/skills/javascript.svg") },
			{ name: "TypeScript", icon: svg("/skills/typescript.svg") },
			{ name: "Python", icon: svg("/skills/python.svg") },
			{ name: "SQL", icon: svgThemed("sql") },
			{ name: "HTML", icon: svg("/skills/html.svg") },
			{ name: "CSS", icon: svg("/skills/css.svg") },
		],
	},
	{
		key: "frontend",
		skills: [
			{ name: "React", icon: svgThemed("react") },
			{ name: "Next.js", icon: svg("/skills/nextjs.svg") },
			{ name: "Vue.js", icon: svg("/skills/vuejs.svg") },
			{ name: "TailwindCSS", icon: svg("/skills/tailwindcss.svg") },
			{ name: "shadcn/ui", icon: svgThemed("shadcn") },
			{ name: "TanStack Query", icon: svg("/skills/tanstack.svg") },
			{ name: "Storybook", icon: svg("/skills/storybook.svg") },
			{ name: "Playwright", icon: svg("/skills/playwright.svg") },
			{ name: "Cypress", icon: svgThemed("cypress") },
		],
	},
	{
		key: "backend",
		skills: [
			{ name: "Node.js", icon: svg("/skills/nodejs.svg") },
			{ name: "Express.js", icon: svgThemed("expressjs") },
			{ name: "Fastify", icon: svgThemed("fastify") },
			{ name: "FastAPI", icon: svg("/skills/fastapi.svg") },
			{ name: "Resend", icon: svgThemed("resend") },
			{ name: "BetterAuth", icon: svgThemed("betterauth") },
			{ name: "Keycloak", icon: svg("/skills/keycloak.svg") },
			{ name: "Trigger.dev", icon: svg("/skills/trigger.svg") },
			{ name: "Vitest", icon: svg("/skills/vitest.svg") },
			{ name: "Jest", icon: svg("/skills/jest.svg") },
			{ name: "Pytest", icon: svg("/skills/pytest.svg") },
		],
	},
	{
		key: "databases",
		skills: [
			{ name: "PostgreSQL", icon: svg("/skills/postgresql.svg") },
			{ name: "MongoDB", icon: svgThemed("mongodb") },
			{ name: "MySQL", icon: svg("/skills/mysql.svg") },
			{ name: "Redis", icon: svg("/skills/redis.svg") },
			{ name: "MinIO", icon: svg("/skills/minio.svg") },
			{ name: "Prisma", icon: svgThemed("prisma") },
			{ name: "Drizzle", icon: svgThemed("drizzle") },
			{ name: "SQLAlchemy", icon: svg("/skills/sqlalchemy.svg") },
			{ name: "Mongoose", icon: svg("/skills/mongoose.svg") },
		],
	},
	{
		key: "devops",
		skills: [
			{ name: "Docker", icon: svg("/skills/docker.svg") },
			{ name: "GitHub", icon: svgThemed("github") },
			{ name: "Vercel", icon: svgThemed("vercel") },
			{ name: "Cloudflare", icon: svg("/skills/cloudflare.svg") },
			{ name: "Coolify", icon: svg("/skills/coolify.svg") },
			{ name: "Azure DevOps", icon: svg("/skills/azure-devops.svg") },
			{ name: "Google Cloud Console", icon: svg("/skills/google-cloud.svg") },
		],
	},
	{
		key: "tools",
		skills: [
			{ name: "VS Code", icon: svg("/skills/vscode.svg") },
			{ name: "Claude Code", icon: svg("/skills/claude.svg") },
			{ name: "Cursor", icon: svgThemed("cursor") },
			{ name: "Postman", icon: svg("/skills/postman.svg") },
			{ name: "Figma", icon: svg("/skills/figma.svg") },
			{ name: "Notion", icon: svgThemed("notion") },
			{ name: "DataGrip", icon: svg("/skills/datagrip.svg") },
			{ name: "DBeaver", icon: svg("/skills/dbeaver.svg") },
			{ name: "MySQL Workbench", icon: svg("/skills/mysql-workbench.svg") },
			{ name: "Ubuntu WSL", icon: svg("/skills/ubuntu.svg") },
		],
	},
];

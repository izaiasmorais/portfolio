import type { Dictionary } from "../../types";

export const experience: Dictionary["experience"] = {
	title: "Experience",
	subtitle: "My professional journey",
	jobs: [
		{
			company: "Trin Hub Tecnologia",
			url: "https://trinhub.com",
			positions: [
				{
					role: "Senior Full Stack Web Developer",
					date: "Feb 2026 - Present",
					workType: "full-time",
					description: [
						"Team leadership and management of internal projects, acting as technical reference (tech lead)",
						"Architecture definition and technical decision-making for new company projects",
						"Python stack with FastAPI, Alembic and SQLAlchemy for microservices and integrations",
						"Database maintenance, deploys via Coolify, webhook configuration and infrastructure automations",
					],
				},
				{
					role: "Mid-Level Full Stack Web Developer",
					date: "Aug 2025 - Jan 2026 (6 months)",
					workType: "part-time",
					description: [
						"Full stack development with TypeScript, ReactJS, Styled Components and MobX on the front-end",
						"API development with Fastify, replacing NestJS with a lighter and more performant approach",
						"Incorporation of Python stack (FastAPI, Alembic, SQLAlchemy) into the development workflow",
					],
				},
			],
			location: "Teresina, PI",
			modality: "On-site",
			logo: "/experience/trin-logo.svg",
			logoBg: "bg-white",
		},
		{
			company: "Nébula Sistemas",
			url: "https://nebulasistemas.com.br",
			positions: [
				{
					role: "Junior Full Stack Web Developer",
					date: "Dec 2023 - Nov 2024 (1 year)",
					workType: "freelance",
					description: [
						"Development of a central integration API between all company services (delivery website, dashboard and POS application)",
						"Back-end development with NodeJS, NestJS and Clean Architecture in TypeScript",
						"Implementation of discount coupon system and loyalty program in the dashboard",
					],
				},
				{
					role: "Junior Web Developer",
					date: "Nov 2022 - Nov 2023 (1 year)",
					workType: "freelance",
					description: [
						"Development of responsive delivery website and data management dashboard",
						"Implementation of product, category and order management features",
						"Front-end stack with ReactJS, Styled Components and MobX in TypeScript",
					],
				},
			],
			location: "Betim, MG",
			modality: "Remote",
			logo: "/experience/nebula-logo.png",
			logoBg: "bg-[#752B94]",
		},
	],
};

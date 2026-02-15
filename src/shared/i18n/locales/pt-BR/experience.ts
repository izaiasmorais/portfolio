import type { Dictionary } from "../../types";

export const experience: Dictionary["experience"] = {
	title: "Experiência",
	subtitle: "Minha trajetória profissional",
	jobs: [
		{
			company: "Trin Hub Tecnologia",
			url: "https://trinhub.com",
			positions: [
				{
					role: "Sênior Desenvolvedor Web Full Stack",
					date: "Fev 2026 - Atual",
					workType: "full-time",
					description: [
						"Liderança de equipe e condução de projetos internos, atuando como referência técnica (tech lead)",
						"Definição de arquitetura e tomada de decisões técnicas em novos projetos da empresa",
						"Stack Python com FastAPI, Alembic e SQLAlchemy para microsserviços e integrações",
						"Manutenção de bancos de dados, deploys via Coolify, configuração de webhooks e automações de infraestrutura",
					],
				},
				{
					role: "Pleno Desenvolvedor Web Full Stack",
					date: "Ago 2025 - Jan 2026 (6 meses)",
					workType: "part-time",
					description: [
						"Desenvolvimento full stack com TypeScript, ReactJS, Styled Components e MobX no front-end",
						"Construção de APIs com Fastify, substituindo NestJS por uma abordagem mais leve e performática",
						"Incorporação de stack Python (FastAPI, Alembic, SQLAlchemy) ao fluxo de desenvolvimento",
					],
				},
			],
			location: "Teresina, PI",
			modality: "Presencial",
			logo: "/experience/trin-logo.svg",
			logoBg: "bg-white",
		},
		{
			company: "Nébula Sistemas",
			url: "https://nebulasistemas.com.br",
			positions: [
				{
					role: "Júnior Desenvolvedor Web Full Stack",
					date: "Dez 2023 - Nov 2024 (1 ano)",
					workType: "freelance",
					description: [
						"Construção de API de integração central entre todos os serviços da empresa (site delivery, dashboard e aplicativo PDV)",
						"Desenvolvimento back-end com NodeJS, NestJS e Arquitetura Limpa em TypeScript",
						"Implementação de sistema de cupons de desconto e programa de fidelidade no dashboard",
					],
				},
				{
					role: "Júnior Desenvolvedor Web",
					date: "Nov 2022 - Nov 2023 (1 ano)",
					workType: "freelance",
					description: [
						"Desenvolvimento de site de delivery responsivo e dashboard de gerenciamento de dados",
						"Implementação de funcionalidades de gerenciamento de produtos, categorias e pedidos",
						"Stack front-end com ReactJS, Styled Components e MobX em TypeScript",
					],
				},
			],
			location: "Betim, MG",
			modality: "Remoto",
			logo: "/experience/nebula-logo.png",
			logoBg: "bg-[#752B94]",
		},
	],
};

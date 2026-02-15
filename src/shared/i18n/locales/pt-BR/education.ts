import type { Dictionary } from "../../types";

export const education: Dictionary["education"] = {
	title: "Formação",
	subtitle: "Minha trajetória acadêmica",
	educationHeading: "Educação",
	coursesHeading: "Cursos",
	institutions: [
		{
			name: "Universidade Federal do Piauí",
			subtitle: "Campus Ministro Petrônio Portella",
			url: "https://ufpi.br",
			entries: [
				{
					title: "Bacharelado em Ciência da Computação",
					date: "Set 2022 - Atual",
					type: "bachelor",
					description: [],
				},
			],
			logo: "/education/ufpi-logo.jpg",
			logoFill: true,
		},
		{
			name: "Instituto Federal do Piauí",
			subtitle: "Campus Teresina Central",
			url: "https://ifpi.edu.br",
			entries: [
				{
					title: "Técnico em Administração",
					date: "Fev 2019 - Mai 2022",
					type: "technical",
					description: [],
				},
			],
			logo: "/education/ifpi-logo.png",
			logoBg: "bg-white",
		},
	],
	courses: [
		{
			name: "Rocketseat",
			url: "https://rocketseat.com.br",
			entries: [
				{
					title: "Programa de Aceleração",
					date: "Jan 2022 - Atual",
					type: "course",
					description: [
						"Programa de aceleração com foco em especialização na programação, onde fiz as formações em ReactJS, Node.js e Python",
					],
					certificates: [
						{
							title: 'Certificado de Conclusão do Curso "ReactJS 2022"',
							image: "/education/certificates/react-2022.png",
							url: "https://app.rocketseat.com.br/certificates/5c987939-3fc7-4cf8-a706-6ef7b8814062",
							skills: "Fundamentos do ReactJS, Criação de SPAs com ReactJS, Consumo de API e performance no ReactJS, Fundamentos do Next.js, Design System e Storybook e Criação de aplicação FullStack com NextJS.",
						},
					],
				},
			],
			logo: "/education/rocketseat-logo.jpg",
			logoFill: true,
		},
		{
			name: "Origamid",
			url: "https://origamid.com",
			entries: [
				{
					title: "Formação em Desenvolvimento Web",
					date: "Dez 2021 - Jun 2022",
					type: "course",
					description: [
						"Programa de formação em desenvolvimento web, onde fiz os cursos de Web Design Completo, CSS Layouts, JavaScript ES6 Completo e Vue JS 2 Completo",
					],
				},
			],
			logo: "/education/origamid-logo.jpg",
			logoFill: true,
		},
	],
};

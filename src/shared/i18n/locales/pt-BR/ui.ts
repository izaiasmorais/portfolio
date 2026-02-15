import type { Dictionary } from "../../types";

export const ui: Dictionary["ui"] = {
	header: {
		nav: {
			home: "Home",
			experience: "Experiência",
			education: "Formação",
			skills: "Habilidades",
			projects: "Projetos",
			contact: "Contato",
		},
		resume: "Currículo",
	},
	footer: {
		location: "Teresina, PI",
		socialLabels: {
			whatsapp: "Entrar em contato pelo WhatsApp",
			linkedin: "Perfil no LinkedIn",
			instagram: "Perfil no Instagram",
			twitter: "Perfil no X (Twitter)",
			github: "Perfil no GitHub",
			email: "Enviar e-mail",
		},
		ariaLabel: "Redes sociais",
	},
	pagination: {
		showing: "Exibindo",
		of: "de",
		item: "item",
		items: "itens",
		perPage: "por página",
		firstPage: "Ir para primeira página",
		lastPage: "Ir para última página",
		previousPage: "Ir para página anterior",
		nextPage: "Ir para próxima página",
		goToPage: "Ir para página",
	},
	workTypes: {
		"full-time": "Integral",
		"part-time": "Meio Período",
		freelance: "Freelance",
	},
	educationTypes: {
		bachelor: "Bacharelado",
		technical: "Técnico",
		course: "Formação",
	},
	certificate: {
		skills: "Competências",
		workload: "Carga Horária",
		workloadValue: "50 horas",
		contentType: "Tipo de conteúdo",
		showCredential: "Mostrar Credencial",
	},
	form: {
		title: "Enviar mensagem",
		name: "Nome",
		namePlaceholder: "Seu nome",
		email: "Email",
		emailPlaceholder: "seu@email.com",
		message: "Sua mensagem",
		messagePlaceholder: "Escreva sua mensagem aqui...",
		submit: "Enviar mensagem",
	},
};

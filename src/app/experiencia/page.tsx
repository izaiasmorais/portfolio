import type { Metadata } from "next"
import { ExperienceSection } from "@/features/experience/components/container"

const description =
	"Trajetória profissional de Izaias Morais como engenheiro fullstack — empresas, cargos, tecnologias e projetos entregues ao longo da carreira."

export const metadata: Metadata = {
	title: "Experiência",
	description,
	keywords: [
		"experiência profissional",
		"carreira",
		"fullstack",
		"engenheiro de software",
		"Izaias Morais",
	],
	alternates: { canonical: "/experiencia" },
	openGraph: {
		type: "website",
		url: "/experiencia",
		title: "Experiência",
		description,
	},
	twitter: {
		title: "Experiência",
		description,
	},
}

export default function ExperienciaPage() {
	return <ExperienceSection />
}

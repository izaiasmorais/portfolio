import type { Metadata } from "next"
import { SkillsSection } from "@/features/skills/components/container"

const description =
	"Stack técnica de Izaias Morais — linguagens, frameworks frontend e backend, bancos de dados, ferramentas de DevOps e demais tecnologias com as quais trabalho."

export const metadata: Metadata = {
	title: "Habilidades",
	description,
	keywords: [
		"habilidades",
		"stack",
		"TypeScript",
		"React",
		"Next.js",
		"Node.js",
		"PostgreSQL",
		"Docker",
		"Izaias Morais",
	],
	alternates: { canonical: "/habilidades" },
	openGraph: {
		type: "website",
		url: "/habilidades",
		title: "Habilidades",
		description,
	},
	twitter: {
		title: "Habilidades",
		description,
	},
}

export default function HabilidadesPage() {
	return <SkillsSection />
}

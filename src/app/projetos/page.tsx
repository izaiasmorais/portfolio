import type { Metadata } from "next"
import { ProjectsSection } from "@/features/projects/components/container"

const description =
	"Mais de 50 projetos pessoais, profissionais, freelas e estudos desenvolvidos por Izaias Morais com TypeScript, React, Next.js, Node.js e mais."

export const metadata: Metadata = {
	title: "Projetos",
	description,
	keywords: [
		"projetos",
		"portfólio",
		"open source",
		"React",
		"Next.js",
		"TypeScript",
		"Izaias Morais",
	],
	alternates: { canonical: "/projetos" },
	openGraph: {
		type: "website",
		url: "/projetos",
		title: "Projetos",
		description,
	},
	twitter: {
		title: "Projetos",
		description,
	},
}

export default function ProjetosPage() {
	return <ProjectsSection />
}

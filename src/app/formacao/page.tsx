import type { Metadata } from "next"
import { EducationSection } from "@/features/education/components/container"

const description =
	"Formação acadêmica e cursos complementares de Izaias Morais — bacharelado em Ciência da Computação na UFPI e certificações em desenvolvimento web."

export const metadata: Metadata = {
	title: "Formação",
	description,
	keywords: [
		"formação",
		"educação",
		"Ciência da Computação",
		"UFPI",
		"cursos",
		"certificações",
		"Izaias Morais",
	],
	alternates: { canonical: "/formacao" },
	openGraph: {
		type: "website",
		url: "/formacao",
		title: "Formação",
		description,
	},
	twitter: {
		title: "Formação",
		description,
	},
}

export default function FormacaoPage() {
	return <EducationSection />
}

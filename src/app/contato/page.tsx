import type { Metadata } from "next"
import { ContactSection } from "@/features/contact/components/container"

const description =
	"Vamos conversar. Entre em contato com Izaias Morais por e-mail, LinkedIn, WhatsApp ou pelo formulário do site para projetos, freelas ou oportunidades."

export const metadata: Metadata = {
	title: "Contato",
	description,
	keywords: ["contato", "Izaias Morais", "freelancer", "fullstack", "Teresina"],
	alternates: { canonical: "/contato" },
	openGraph: {
		type: "website",
		url: "/contato",
		title: "Contato",
		description,
	},
	twitter: {
		title: "Contato",
		description,
	},
}

export default function ContatoPage() {
	return <ContactSection />
}

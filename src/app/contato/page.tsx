import type { Metadata } from "next"
import { ContactSection } from "@/features/contact/components/container"

export const metadata: Metadata = {
	title: "Contato · Izaias Morais",
	openGraph: {
		title: "Contato · Izaias Morais",
		images: [{ url: "/api/og?page=contact", width: 1200, height: 630, alt: "Contato - Izaias Morais" }],
	},
	twitter: {
		images: ["/api/og?page=contact"],
	},
}

export default function ContatoPage() {
	return <ContactSection />
}

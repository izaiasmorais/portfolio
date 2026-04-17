import type { Metadata } from "next"
import { ExperienceSection } from "@/features/experience/components/container"

export const metadata: Metadata = {
	title: "Experiência · Izaias Morais",
	openGraph: {
		title: "Experiência · Izaias Morais",
		images: [{ url: "/api/og?page=experience", width: 1200, height: 630, alt: "Experiência - Izaias Morais" }],
	},
	twitter: {
		images: ["/api/og?page=experience"],
	},
}

export default function ExperienciaPage() {
	return <ExperienceSection />
}

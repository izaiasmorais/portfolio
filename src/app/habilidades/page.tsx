import type { Metadata } from "next"
import { SkillsSection } from "@/features/skills/components/container"

export const metadata: Metadata = {
	title: "Habilidades · Izaias Morais",
	openGraph: {
		title: "Habilidades · Izaias Morais",
		images: [{ url: "/api/og?page=skills", width: 1200, height: 630, alt: "Habilidades - Izaias Morais" }],
	},
	twitter: {
		images: ["/api/og?page=skills"],
	},
}

export default function HabilidadesPage() {
	return <SkillsSection />
}

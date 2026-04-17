import type { Metadata } from "next"
import { ProjectsSection } from "@/features/projects/components/container"

export const metadata: Metadata = {
	title: "Projetos · Izaias Morais",
	openGraph: {
		title: "Projetos · Izaias Morais",
		images: [{ url: "/api/og?page=projects", width: 1200, height: 630, alt: "Projetos - Izaias Morais" }],
	},
	twitter: {
		images: ["/api/og?page=projects"],
	},
}

export default function ProjetosPage() {
	return <ProjectsSection />
}

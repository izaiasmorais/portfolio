import type { Metadata } from "next"
import { EducationSection } from "@/features/education/components/container"

export const metadata: Metadata = {
	title: "Formação · Izaias Morais",
	openGraph: {
		title: "Formação · Izaias Morais",
		images: [{ url: "/api/og?page=education", width: 1200, height: 630, alt: "Formação - Izaias Morais" }],
	},
	twitter: {
		images: ["/api/og?page=education"],
	},
}

export default function FormacaoPage() {
	return <EducationSection />
}

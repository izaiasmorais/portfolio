import { ogContentType, ogSize, renderOg } from "@/shared/og/render"

export const alt = "Experiência · Izaias Morais"
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
	return renderOg({
		label: "Izaias Morais",
		title: "Experiência",
		subtitle: "Senior Full-Stack Engineer · Trin Hub",
	})
}

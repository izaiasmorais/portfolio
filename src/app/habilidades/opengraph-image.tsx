import { ogContentType, ogSize, renderOg } from "@/shared/og/render"

export const alt = "Habilidades · Izaias Morais"
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
	return renderOg({
		label: "Izaias Morais",
		title: "Habilidades",
		subtitle: "TypeScript, React, Node.js e mais",
	})
}

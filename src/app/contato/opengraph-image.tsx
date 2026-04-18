import { ogContentType, ogSize, renderOg } from "@/shared/og/render"

export const alt = "Contato · Izaias Morais"
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
	return renderOg({
		label: "Izaias Morais",
		title: "Contato",
		subtitle: "Vamos conversar",
	})
}

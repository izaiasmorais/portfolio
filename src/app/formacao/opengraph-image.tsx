import { ogContentType, ogSize, renderOg } from "@/shared/og/render"

export const alt = "Formação · Izaias Morais"
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
	return renderOg({
		label: "Izaias Morais",
		title: "Formação",
		subtitle: "Ciência da Computação · UFPI",
	})
}

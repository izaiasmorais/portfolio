import { ogContentType, ogSize, renderOg } from "@/shared/og/render"

export const alt = "Projetos · Izaias Morais"
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
	return renderOg({
		label: "Izaias Morais",
		title: "Projetos",
		subtitle: "+50 projetos pessoais e profissionais",
	})
}

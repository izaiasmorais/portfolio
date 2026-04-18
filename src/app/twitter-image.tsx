import { ogContentType, ogSize, renderOg } from "@/shared/og/render"

export const alt = "Izaias Morais — Design Engineer & Fullstack Developer"
export const size = ogSize
export const contentType = ogContentType

export default async function Image() {
	return renderOg({
		label: null,
		title: "Izaias Morais",
		subtitle: "Design Engineer & Fullstack Developer",
		bio: "Apaixonado por programação, venho estudando tecnologias na área desde 2022, com foco no desenvolvimento de aplicações web.",
	})
}

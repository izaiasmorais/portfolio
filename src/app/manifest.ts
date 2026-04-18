import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Izaias Morais — Design Engineer & Fullstack Developer",
		short_name: "Izaias Morais",
		description:
			"Portfólio de Izaias Morais — Design Engineer e Fullstack Developer baseado em Teresina (PI).",
		start_url: "/",
		display: "standalone",
		background_color: "#09090b",
		theme_color: "#09090b",
		categories: ["portfolio", "developer", "technology"],
		lang: "pt-BR",
		icons: [
			{
				src: "/favicon/izaiasmorais.svg",
				sizes: "any",
				type: "image/svg+xml",
				purpose: "any",
			},
		],
	}
}

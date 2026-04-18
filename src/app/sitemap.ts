import type { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://izaiasmorais.dev"

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date()

	const routes: { path: string; priority: number; changeFrequency: "monthly" | "weekly" }[] = [
		{ path: "/", priority: 1.0, changeFrequency: "monthly" },
		{ path: "/experiencia", priority: 0.8, changeFrequency: "monthly" },
		{ path: "/formacao", priority: 0.8, changeFrequency: "monthly" },
		{ path: "/habilidades", priority: 0.8, changeFrequency: "monthly" },
		{ path: "/projetos", priority: 0.9, changeFrequency: "weekly" },
		{ path: "/contato", priority: 0.7, changeFrequency: "monthly" },
	]

	return routes.map(({ path, priority, changeFrequency }) => ({
		url: `${siteUrl}${path}`,
		lastModified,
		changeFrequency,
		priority,
	}))
}

type JsonLd = Record<string, unknown>

function JsonLdScript({ id, data }: { id: string; data: JsonLd }) {
	return (
		<script
			id={id}
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: required for JSON-LD injection
			dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
		/>
	)
}

export function WebSiteJsonLd({ siteUrl }: { siteUrl: string }) {
	const data: JsonLd = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: "Izaias Morais",
		url: siteUrl,
		inLanguage: "pt-BR",
		author: {
			"@type": "Person",
			name: "Izaias Morais",
			url: siteUrl,
		},
	}

	return <JsonLdScript id="ld-website" data={data} />
}

export function PersonJsonLd({ siteUrl }: { siteUrl: string }) {
	const data: JsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Izaias Morais",
		alternateName: "Izaías Morais",
		url: siteUrl,
		image: `${siteUrl}/home/izaiasmorais.webp`,
		jobTitle: "Design Engineer & Fullstack Developer",
		description:
			"Design Engineer e Fullstack Developer baseado em Teresina (PI), focado em aplicações web com TypeScript, React, Next.js e Node.js.",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Teresina",
			addressRegion: "PI",
			addressCountry: "BR",
		},
		knowsAbout: [
			"TypeScript",
			"React",
			"Next.js",
			"Node.js",
			"PostgreSQL",
			"Docker",
			"Design Systems",
		],
		sameAs: [
			"https://www.linkedin.com/in/izaiasmorais/",
			"https://github.com/izaiasmorais",
			"https://x.com/izaias3_",
			"https://www.instagram.com/izaiasmorais_/",
		],
	}

	return <JsonLdScript id="ld-person" data={data} />
}

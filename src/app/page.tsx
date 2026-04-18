import { HomeSection } from "@/features/home/components/container"
import { PersonJsonLd } from "@/shared/seo/structured-data"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://izaiasmorais.dev"

export default function HomePage() {
	return (
		<>
			<HomeSection />
			<PersonJsonLd siteUrl={siteUrl} />
		</>
	)
}

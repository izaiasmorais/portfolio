import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from "next"
import { Footer } from "@/shared/components/footer/container"
import { Header } from "@/shared/components/header/container"
import { Toaster } from "@/shared/components/ui/sonner"
import { TooltipProvider } from "@/shared/components/ui/tooltip"
import { WebSiteJsonLd } from "@/shared/seo/structured-data"
import Providers from "./providers"
import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://izaiasmorais.dev"
const description =
	"Portfólio de Izaias Morais — Design Engineer e Fullstack Developer baseado em Teresina (PI). Construo aplicações web modernas com TypeScript, React, Next.js e Node.js."

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "Izaias Morais — Design Engineer & Fullstack Developer",
		template: "%s · Izaias Morais",
	},
	description,
	applicationName: "Izaias Morais",
	authors: [{ name: "Izaias Morais", url: siteUrl }],
	creator: "Izaias Morais",
	publisher: "Izaias Morais",
	category: "technology",
	keywords: [
		"Izaias Morais",
		"Izaías Morais",
		"design engineer",
		"fullstack developer",
		"desenvolvedor fullstack",
		"engenheiro de software",
		"TypeScript",
		"React",
		"Next.js",
		"Node.js",
		"PostgreSQL",
		"Teresina",
		"Piauí",
		"Brasil",
		"portfólio",
	],
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	alternates: {
		canonical: "/",
	},
	icons: {
		icon: [{ url: "/favicon/izaiasmorais.svg", type: "image/svg+xml" }],
		shortcut: "/favicon/izaiasmorais.svg",
		apple: "/favicon/izaiasmorais.svg",
	},
	manifest: "/manifest.webmanifest",
	openGraph: {
		type: "website",
		url: "/",
		siteName: "Izaias Morais",
		title: "Izaias Morais — Design Engineer & Fullstack Developer",
		description,
		locale: "pt_BR",
	},
	twitter: {
		card: "summary_large_image",
		title: "Izaias Morais — Design Engineer & Fullstack Developer",
		description,
		creator: "@izaias3_",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	colorScheme: "dark light",
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#ffffff" },
		{ media: "(prefers-color-scheme: dark)", color: "#09090b" },
	],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR" suppressHydrationWarning={true} className="antialiased">
			<body>
				<Providers>
					<TooltipProvider>
						<div className="h-screen flex flex-col bg-background text-foreground selection:bg-primary/10 transition-colors duration-300 overflow-auto">
							<Header />

							<main className="flex-1 flex flex-col">{children}</main>

							<Footer />
						</div>
						<Toaster />
						<SpeedInsights />
					</TooltipProvider>
				</Providers>
				<WebSiteJsonLd siteUrl={siteUrl} />
			</body>
		</html>
	)
}

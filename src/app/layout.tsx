import type { Metadata } from "next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Footer } from "@/shared/components/footer/container"
import { Header } from "@/shared/components/header/container"
import { Toaster } from "@/shared/components/ui/sonner"
import { TooltipProvider } from "@/shared/components/ui/tooltip"
import Providers from "./providers"
import "./globals.css"

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3030"),
	title: "Izaias Morais",
	description: "Portfolio de Izaias Morais - Design Engineer & Fullstack Developer",
	icons: {
		icon: "/favicon/izaiasmorais.svg",
	},
	openGraph: {
		title: "Izaias Morais",
		description: "Portfolio de Izaias Morais - Design Engineer & Fullstack Developer",
		url: "/",
		siteName: "Izaias Morais",
		images: [{ url: "/api/og", width: 1200, height: 630, alt: "Izaias Morais - Design Engineer & Fullstack Developer" }],
		locale: "pt_BR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Izaias Morais",
		description: "Portfolio de Izaias Morais - Design Engineer & Fullstack Developer",
		images: ["/api/og"],
	},
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
			</body>
		</html>
	)
}

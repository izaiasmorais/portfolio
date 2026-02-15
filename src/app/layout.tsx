import type { Metadata } from "next";
import { Header } from "@/shared/components/header/container";
import { Footer } from "@/shared/components/footer/container";
import { TooltipProvider } from "@/shared/components/ui/tooltip";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
	title: "Izaias Morais",
	description:
		"Portfolio de Izaias Morais - Design Engineer & Fullstack Developer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
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
					</TooltipProvider>
				</Providers>
			</body>
		</html>
	);
}

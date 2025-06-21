import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
	title: "Izaías Morais",
	description: "Desenvolvedor Web Full Stack",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br" suppressHydrationWarning>
			<head>
				<link
					rel="shortcut icon"
					href="/izaiasmorais.svg"
					type="image/x-icon"
				/>
			</head>

			<body className={`${GeistMono.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

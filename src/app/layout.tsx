import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

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
		<html lang="pt-br">
			<head>
				<link
					rel="shortcut icon"
					href="/izaiasmorais.svg"
					type="image/x-icon"
				/>
			</head>

			<body className={`${GeistMono.className} antialiased`}>{children}</body>
		</html>
	);
}

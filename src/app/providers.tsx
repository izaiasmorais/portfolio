"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/shared/i18n/context";

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<LanguageProvider>
			<ThemeProvider
				attribute="class"
				defaultTheme="dark"
				enableSystem={true}
				disableTransitionOnChange={true}
			>
				{children}
			</ThemeProvider>
		</LanguageProvider>
	);
}

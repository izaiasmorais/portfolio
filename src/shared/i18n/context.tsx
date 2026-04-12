"use client"

import { createContext, type ReactNode, useEffect, useState } from "react"
import { en } from "./locales/en"
import { ptBR } from "./locales/pt-BR"
import type { Dictionary, Locale } from "./types"

const dictionaries: Record<Locale, Dictionary> = {
	"pt-BR": ptBR,
	en,
}

interface LanguageContextValue {
	locale: Locale
	setLocale: (locale: Locale) => void
	t: Dictionary
}

export const LanguageContext = createContext<LanguageContextValue>({
	locale: "pt-BR",
	setLocale: () => {},
	t: ptBR,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>("pt-BR")

	useEffect(() => {
		const stored = localStorage.getItem("locale")
		if (stored === "pt-BR" || stored === "en") {
			setLocaleState(stored)
		}
	}, [])

	useEffect(() => {
		document.documentElement.lang = locale
	}, [locale])

	function setLocale(newLocale: Locale) {
		setLocaleState(newLocale)
		localStorage.setItem("locale", newLocale)
	}

	return (
		<LanguageContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
			{children}
		</LanguageContext.Provider>
	)
}

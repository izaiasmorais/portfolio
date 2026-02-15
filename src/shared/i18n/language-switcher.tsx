"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { GlowButton } from "@/shared/components/glow-button";
import { useLanguage } from "./use-language";

export function LanguageSwitcher() {
	const { locale, setLocale } = useLanguage();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	function toggleLocale() {
		setLocale(locale === "pt-BR" ? "en" : "pt-BR");
	}

	if (!mounted) {
		return (
			<div className="size-9 rounded-md border border-border bg-secondary animate-pulse" />
		);
	}

	return (
		<GlowButton
			variant="secondary"
			size="icon"
			onClick={toggleLocale}
			aria-label={
				locale === "pt-BR" ? "Switch to English" : "Mudar para Português"
			}
		>
			<Image
				src={locale === "pt-BR" ? "/flags/br.svg" : "/flags/us.svg"}
				alt=""
				width={18}
				height={18}
				className="rounded-sm"
			/>
		</GlowButton>
	);
}

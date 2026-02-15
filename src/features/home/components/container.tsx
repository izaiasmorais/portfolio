"use client";

import Image from "next/image";
import { SectionContainer } from "@/shared/components/section-container";
import { useLanguage } from "@/shared/i18n/use-language";

export function HomeSection() {
	const { t } = useLanguage();

	return (
		<SectionContainer id="home" className="justify-center relative pb-20">
			<div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
				<div className="relative shrink-0">
					<div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-border">
						<Image
							src="/home/izaiasmorais.webp"
							alt="Izaías Morais"
							width={512}
							height={512}
							quality={100}
							className="w-full h-full object-cover"
							priority
						/>
					</div>
				</div>

				<div className="flex flex-col text-center md:text-left">
					<h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
						Izaías Morais
					</h1>

					<p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
						{t.home.bio}
					</p>
				</div>
			</div>
		</SectionContainer>
	);
}

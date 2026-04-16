import Link from "next/link"
import type { Institution } from "../types"
import { CertificateCard } from "./certificate-card"
import { EducationTypeBadge } from "./education-type-badge"
import { InstitutionLogo } from "./institution-logo"

export function Timeline({ items }: { items: Institution[] }) {
	return (
		<div className="flex flex-col relative max-w-4xl">
			{items.map((institution, index) => (
				<div key={index} className="flex gap-6 md:gap-8 group relative pb-12 last:pb-0">
					{index !== items.length - 1 && (
						<div className="absolute left-6 top-12 bottom-0 w-px bg-border" />
					)}

					<InstitutionLogo
						logo={institution.logo}
						name={institution.name}
						logoBg={institution.logoBg}
						logoFill={institution.logoFill}
					/>

					<div className="flex flex-col w-full">
						<Link
							href={institution.url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl font-bold text-foreground hover:underline w-fit"
						>
							{institution.name}
						</Link>

						{institution.subtitle && (
							<span className="text-sm text-muted-foreground">{institution.subtitle}</span>
						)}

						{institution.entries.map((entry, eIdx) => (
							<div key={eIdx} className="mb-7 last:mb-0 mt-3">
								<div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
									<div className="flex items-center gap-2">
										<span className="text-base md:text-lg font-medium text-foreground/80">
											{entry.title}
										</span>

										<EducationTypeBadge type={entry.type} />
									</div>

									<div className="text-sm md:text-base text-muted-foreground mt-1 md:mt-0">
										{entry.date}
									</div>
								</div>

								{entry.description.length > 0 && (
									<ul className="flex flex-col gap-2">
										{entry.description.map((point, i) => (
											<li
												key={i}
												className="text-base text-muted-foreground leading-relaxed flex items-start"
											>
												<span className="mr-3 mt-2.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
												{point}
											</li>
										))}
									</ul>
								)}

								{entry.certificates && entry.certificates.length > 0 && (
									<div className="flex flex-col gap-4 mt-4">
										{entry.certificates.map((cert, cIdx) => (
											<CertificateCard key={cIdx} {...cert} />
										))}
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}

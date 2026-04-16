import Image from "next/image"
import Link from "next/link"
import { SkillBadge } from "@/shared/components/skill-badge"
import { resolveSkillsByName } from "@/shared/utils/resolve-skills"
import type { Job } from "../types"
import { renderRichText } from "../utils/rich-text"
import { WorkTypeBadge } from "./work-type-badge"

interface JobCardProps {
	job: Job
	isLast: boolean
}

function getInitials(company: string): string {
	return company
		.replace(/[—–-]/g, " ")
		.split(/\s+/)
		.filter((word) => /^[A-Za-zÀ-ÿ]/.test(word))
		.slice(0, 2)
		.map((word) => word[0]?.toUpperCase() ?? "")
		.join("")
}

export function JobCard({ job, isLast }: JobCardProps) {
	return (
		<div className="flex gap-6 md:gap-8 group relative pb-12 last:pb-0">
			{!isLast && <div className="absolute left-6 top-12 bottom-0 w-px bg-border" />}

			<div className="shrink-0 relative">
				<div
					className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm z-10 relative overflow-hidden ${job.logoBg}`}
				>
					{job.logo ? (
						<Image
							src={job.logo}
							alt={job.company}
							width={28}
							height={28}
							className="object-contain"
						/>
					) : (
						<span className="text-base font-bold text-foreground">{getInitials(job.company)}</span>
					)}
				</div>
			</div>

			<div className="flex flex-col w-full pt-1">
				<Link
					href={job.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-xl font-bold text-foreground mb-1 hover:underline w-fit"
				>
					{job.company}
				</Link>

				<div className="text-sm text-muted-foreground mb-5">
					{job.location} · {job.modality}
				</div>

				{job.positions.map((position, pIdx) => {
					const techs = position.technologies ? resolveSkillsByName(position.technologies) : []

					return (
						<div key={pIdx} className="mb-7 last:mb-0">
							<div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
								<div className="flex items-center gap-2">
									<span className="text-base md:text-lg font-medium text-foreground/80">
										{position.role}
									</span>
									<WorkTypeBadge type={position.workType} />
								</div>
								<div className="text-sm md:text-base text-muted-foreground mt-1 md:mt-0">
									{position.date}
								</div>
							</div>

							<ul className="flex flex-col gap-2">
								{position.description.map((point, i) => (
									<li
										key={i}
										className="text-base text-muted-foreground leading-relaxed flex items-start"
									>
										<span className="mr-3 mt-2.5 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
										<span>{renderRichText(point)}</span>
									</li>
								))}
							</ul>

							{techs.length > 0 && (
								<div className="flex flex-wrap gap-2 mt-5">
									{techs.map((tech) => (
										<SkillBadge key={tech.name} {...tech} />
									))}
								</div>
							)}
						</div>
					)
				})}
			</div>
		</div>
	)
}

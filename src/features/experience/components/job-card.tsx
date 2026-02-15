import Image from "next/image";
import Link from "next/link";
import type { Job } from "../types";
import { WorkTypeBadge } from "./work-type-badge";

interface JobCardProps {
	job: Job;
	isLast: boolean;
}

export function JobCard({ job, isLast }: JobCardProps) {
	return (
		<div className="flex gap-6 md:gap-8 group relative pb-12 last:pb-0">
			{!isLast && (
				<div className="absolute left-6 top-12 bottom-0 w-px bg-border" />
			)}

			<div className="shrink-0 relative">
				<div
					className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm z-10 relative overflow-hidden ${job.logoBg}`}
				>
					<Image
						src={job.logo}
						alt={job.company}
						width={28}
						height={28}
						className="object-contain"
					/>
				</div>
			</div>

			<div className="flex flex-col w-full pt-1">
				<Link
					href={job.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-lg font-bold text-foreground mb-1 hover:underline w-fit"
				>
					{job.company}
				</Link>

				<div className="text-xs text-muted-foreground mb-4">
					{job.location} · {job.modality}
				</div>

				{job.positions.map((position, pIdx) => (
					<div key={pIdx} className="mb-5 last:mb-0">
						<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
							<div className="flex items-center gap-2">
								<span className="text-sm md:text-base font-medium text-foreground/80">
									{position.role}
								</span>
								<WorkTypeBadge type={position.workType} />
							</div>
							<div className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-0">
								{position.date}
							</div>
						</div>

						<ul className="flex flex-col gap-1.5">
							{position.description.map((point, i) => (
								<li
									key={i}
									className="text-sm text-muted-foreground leading-relaxed flex items-start"
								>
									<span className="mr-2 mt-1.75 w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
									{point}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}

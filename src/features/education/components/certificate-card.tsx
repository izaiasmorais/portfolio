"use client";

import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare02Icon } from "@hugeicons/core-free-icons";
import type { Certificate } from "../types";
import { useLanguage } from "@/shared/i18n/use-language";

export function CertificateCard({ title, image, url, skills }: Certificate) {
	const { t } = useLanguage();

	return (
		<div className="flex flex-col gap-3 rounded-lg border border-border bg-white dark:bg-muted/30 p-3">
			<span className="text-sm font-medium text-foreground/80">{title}</span>

			<div className="flex flex-col sm:flex-row gap-4">
				<div className="relative w-full sm:w-70 shrink-0 aspect-[1.414/1] rounded-md overflow-hidden border border-border">
					<Image src={image} alt={title} fill className="object-cover" />
				</div>

				<div className="flex flex-col gap-2">
					<p className="text-sm text-muted-foreground leading-relaxed">
						<span className="font-medium text-foreground/70">
							{t.ui.certificate.skills}:{" "}
						</span>
						{skills}
					</p>

					<p className="text-sm text-muted-foreground leading-relaxed">
						<span className="font-medium text-foreground/70">
							{t.ui.certificate.workload}:{" "}
						</span>
						{t.ui.certificate.workloadValue}
					</p>

					<p className="text-sm text-muted-foreground leading-relaxed">
						<span className="font-medium text-foreground/70">
							{t.ui.certificate.contentType}:{" "}
						</span>
						{t.ui.educationTypes.course}
					</p>

					<Link
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 text-xs font-medium text-foreground/70
						hover:text-foreground transition-colors w-fit px-2.5 py-1.5 rounded-md border border-border"
					>
						<HugeiconsIcon
							icon={LinkSquare02Icon}
							size={14}
							strokeWidth={2}
						/>
						{t.ui.certificate.showCredential}
					</Link>
				</div>
			</div>
		</div>
	);
}

"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
	ArrowLeftDoubleIcon,
	ArrowRightDoubleIcon,
	ArrowLeft01Icon,
	ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { GlowButton } from "@/shared/components/glow-button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/shared/components/ui/select";
import { useLanguage } from "@/shared/i18n/use-language";
import type { ItemsPerPage } from "../types";
import { itemsPerPageOptions } from "../data";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	totalItems: number;
	startItem: number;
	endItem: number;
	itemsPerPage: ItemsPerPage;
	onPageChange: (page: number) => void;
	onItemsPerPageChange: (value: ItemsPerPage) => void;
}

function getPageNumbers(
	currentPage: number,
	totalPages: number,
): (number | "ellipsis")[] {
	if (totalPages <= 7) {
		return Array.from({ length: totalPages }, (_, i) => i + 1);
	}

	const pages: (number | "ellipsis")[] = [];

	pages.push(1);

	if (currentPage > 3) {
		pages.push("ellipsis");
	}

	const start = Math.max(2, currentPage - 1);
	const end = Math.min(totalPages - 1, currentPage + 1);

	for (let i = start; i <= end; i++) {
		if (!pages.includes(i)) {
			pages.push(i);
		}
	}

	if (currentPage < totalPages - 2) {
		pages.push("ellipsis");
	}

	if (!pages.includes(totalPages)) {
		pages.push(totalPages);
	}

	return pages;
}

export function Pagination({
	currentPage,
	totalPages,
	totalItems,
	startItem,
	endItem,
	itemsPerPage,
	onPageChange,
	onItemsPerPageChange,
}: PaginationProps) {
	const { t } = useLanguage();
	const pageNumbers = getPageNumbers(currentPage, totalPages);
	const canGoPrevious = currentPage > 1;
	const canGoNext = currentPage < totalPages;

	return (
		<div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 py-6">
			<div className="flex items-center gap-3">
				<span className="text-sm text-muted-foreground">
					{t.ui.pagination.showing} {startItem}-{endItem}{" "}
					{t.ui.pagination.of} {totalItems}{" "}
					{totalItems === 1 ? t.ui.pagination.item : t.ui.pagination.items}
				</span>

				<Select
					value={String(itemsPerPage)}
					onValueChange={(v) =>
						onItemsPerPageChange(Number(v) as ItemsPerPage)
					}
				>
					<SelectTrigger size="sm">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{itemsPerPageOptions.map((option) => (
							<SelectItem key={option} value={String(option)}>
								{option} {t.ui.pagination.perPage}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			<nav role="navigation" aria-label="pagination">
				<ul className="flex flex-row items-center gap-1">
					<li className="hidden sm:block">
						<GlowButton
							variant="secondary"
							size="icon"
							onClick={() => onPageChange(1)}
							disabled={!canGoPrevious}
							aria-label={t.ui.pagination.firstPage}
						>
							<HugeiconsIcon icon={ArrowLeftDoubleIcon} size={16} />
						</GlowButton>
					</li>

					<li>
						<GlowButton
							variant="secondary"
							size="icon"
							onClick={() => onPageChange(currentPage - 1)}
							disabled={!canGoPrevious}
							aria-label={t.ui.pagination.previousPage}
						>
							<HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
						</GlowButton>
					</li>

					{pageNumbers.map((page, index) => (
						<li key={page === "ellipsis" ? `ellipsis-${index}` : page}>
							{page === "ellipsis" ? (
								<span className="flex h-9 w-9 items-center justify-center text-muted-foreground">
									...
								</span>
							) : (
								<GlowButton
									variant={currentPage === page ? "primary" : "secondary"}
									size="icon"
									onClick={() => onPageChange(page)}
									aria-label={`${t.ui.pagination.goToPage} ${page}`}
									aria-current={currentPage === page ? "page" : undefined}
								>
									{page}
								</GlowButton>
							)}
						</li>
					))}

					<li>
						<GlowButton
							variant="secondary"
							size="icon"
							onClick={() => onPageChange(currentPage + 1)}
							disabled={!canGoNext}
							aria-label={t.ui.pagination.nextPage}
						>
							<HugeiconsIcon icon={ArrowRight01Icon} size={16} />
						</GlowButton>
					</li>

					<li className="hidden sm:block">
						<GlowButton
							variant="secondary"
							size="icon"
							onClick={() => onPageChange(totalPages)}
							disabled={!canGoNext}
							aria-label={t.ui.pagination.lastPage}
						>
							<HugeiconsIcon icon={ArrowRightDoubleIcon} size={16} />
						</GlowButton>
					</li>
				</ul>
			</nav>
		</div>
	);
}

"use client";

import { useState } from "react";
import { SectionContainer } from "@/shared/components/section-container";
import { cn } from "@/shared/utils/cn";
import { useLanguage } from "@/shared/i18n/use-language";
import type { Category, ItemsPerPage } from "../types";
import { projects } from "../data";
import { CategoryTabs } from "./category-tabs";
import { ColumnSwitcher } from "./column-switcher";
import { ProjectCard } from "./project-card";
import { Pagination } from "./pagination";

export function ProjectsSection() {
	const { t } = useLanguage();
	const [activeTab, setActiveTab] = useState<Category>("All");
	const [columns, setColumns] = useState<2 | 4>(4);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState<ItemsPerPage>(8);

	const filteredProjects =
		activeTab === "All"
			? projects
			: projects.filter((project) => project.category === activeTab);

	const totalItems = filteredProjects.length;
	const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
	const safePage = Math.min(currentPage, totalPages);
	const startIndex = (safePage - 1) * itemsPerPage;
	const paginatedProjects = filteredProjects.slice(
		startIndex,
		startIndex + itemsPerPage,
	);
	const startItem = totalItems === 0 ? 0 : startIndex + 1;
	const endItem = Math.min(safePage * itemsPerPage, totalItems);

	function handleTabChange(category: Category) {
		setActiveTab(category);
		setCurrentPage(1);
	}

	function handleItemsPerPageChange(value: ItemsPerPage) {
		setItemsPerPage(value);
		setCurrentPage(1);
	}

	return (
		<SectionContainer
			id="projects"
			title={t.projects.title}
			subtitle={t.projects.subtitle}
		>
			<div className="flex flex-col w-full">
				<div className="flex items-center justify-between gap-4 pb-4">
					<CategoryTabs activeTab={activeTab} onTabChange={handleTabChange} />

					<ColumnSwitcher columns={columns} onColumnsChange={setColumns} />
				</div>

				<div
					className={cn(
						"grid gap-6 transition-all duration-300",
						columns === 4
							? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
							: "grid-cols-1 sm:grid-cols-2",
					)}
				>
					{paginatedProjects.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</div>

				{totalPages > 1 && (
					<Pagination
						currentPage={safePage}
						totalPages={totalPages}
						totalItems={totalItems}
						startItem={startItem}
						endItem={endItem}
						itemsPerPage={itemsPerPage}
						onPageChange={setCurrentPage}
						onItemsPerPageChange={handleItemsPerPageChange}
					/>
				)}
			</div>
		</SectionContainer>
	);
}

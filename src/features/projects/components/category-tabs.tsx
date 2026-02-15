"use client";

import { cn } from "@/shared/utils/cn";
import { useLanguage } from "@/shared/i18n/use-language";
import type { Category } from "../types";
import { categoryList } from "../data";

interface CategoryTabsProps {
	activeTab: Category;
	onTabChange: (category: Category) => void;
}

export function CategoryTabs({ activeTab, onTabChange }: CategoryTabsProps) {
	const { t } = useLanguage();

	return (
		<div className="flex flex-wrap gap-2">
			{categoryList.map((category) => (
				<button
					key={category}
					onClick={() => onTabChange(category)}
					className={cn(
						"px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer",
						activeTab === category
							? "bg-primary text-primary-foreground shadow-md"
							: "bg-secondary text-muted-foreground hover:bg-accent",
					)}
				>
					{t.projects.categories[category]}
				</button>
			))}
		</div>
	);
}

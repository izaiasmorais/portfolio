import { cn } from "@/shared/utils/cn";

interface ColumnSwitcherProps {
	columns: 2 | 4;
	onColumnsChange: (columns: 2 | 4) => void;
}

export function ColumnSwitcher({
	columns,
	onColumnsChange,
}: ColumnSwitcherProps) {
	return (
		<div className="flex items-center gap-1 bg-secondary rounded-lg p-1 shrink-0">
			<button
				onClick={() => onColumnsChange(4)}
				className={cn(
					"p-1.5 rounded-md transition-all duration-200 cursor-pointer",
					columns === 4
						? "bg-background shadow-sm text-foreground"
						: "text-muted-foreground hover:text-foreground",
				)}
				aria-label="4 colunas"
			>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect x="1" y="1" width="5.5" height="5.5" rx="1" fill="currentColor" />
					<rect x="9.5" y="1" width="5.5" height="5.5" rx="1" fill="currentColor" />
					<rect x="1" y="9.5" width="5.5" height="5.5" rx="1" fill="currentColor" />
					<rect x="9.5" y="9.5" width="5.5" height="5.5" rx="1" fill="currentColor" />
				</svg>
			</button>
			<button
				onClick={() => onColumnsChange(2)}
				className={cn(
					"p-1.5 rounded-md transition-all duration-200 cursor-pointer",
					columns === 2
						? "bg-background shadow-sm text-foreground"
						: "text-muted-foreground hover:text-foreground",
				)}
				aria-label="2 colunas"
			>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect x="1" y="1" width="14" height="5.5" rx="1" fill="currentColor" />
					<rect x="1" y="9.5" width="14" height="5.5" rx="1" fill="currentColor" />
				</svg>
			</button>
		</div>
	);
}

export function TypeBadge({ label }: { label: string }) {
	return (
		<span className="text-[10px] md:text-xs font-medium px-2 py-0.5 rounded-md bg-white dark:bg-transparent text-muted-foreground dark:text-foreground/50 border border-border">
			{label}
		</span>
	);
}

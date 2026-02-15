"use client";

import {
	Tooltip,
	TooltipTrigger,
	TooltipContent,
} from "@/shared/components/ui/tooltip";

interface TechBadgesProps {
	stack: string[];
}

const MAX_VISIBLE = 3;

function Badge({ label }: { label: string }) {
	return (
		<span className="px-2 py-0.5 bg-secondary text-muted-foreground text-[10px] font-medium rounded-md border border-border">
			{label}
		</span>
	);
}

export function TechBadges({ stack }: TechBadgesProps) {
	if (stack.length === 0) return null;

	const visible = stack.slice(0, MAX_VISIBLE);
	const hidden = stack.slice(MAX_VISIBLE);

	return (
		<div className="mt-auto flex flex-wrap gap-1.5 pt-2">
			{visible.map((tech) => (
				<Badge key={tech} label={tech} />
			))}

			{hidden.length > 0 && (
				<Tooltip>
					<TooltipTrigger asChild>
						<span className="px-2 py-0.5 bg-secondary text-muted-foreground text-[10px] font-medium rounded-md border border-border cursor-default">
							+{hidden.length}
						</span>
					</TooltipTrigger>
					<TooltipContent className="flex flex-wrap gap-1.5 max-w-64">
						{hidden.map((tech) => (
							<Badge key={tech} label={tech} />
						))}
					</TooltipContent>
				</Tooltip>
			)}
		</div>
	);
}

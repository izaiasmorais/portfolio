import { cn } from "@/shared/utils/cn";

interface SectionContainerProps {
	id: string;
	title?: string;
	subtitle?: string;
	children: React.ReactNode;
	className?: string;
}

export function SectionContainer({
	id,
	title,
	subtitle,
	children,
	className,
}: SectionContainerProps) {
	return (
		<section
			id={id}
			className={cn(
				"flex-1 w-full flex flex-col pt-32 pb-8 px-6 max-w-300 mx-auto",
				className,
			)}
		>
			{title && (
				<div className="flex flex-col gap-2 mb-12">
					<h2 className="text-3xl font-bold text-foreground">{title}</h2>

					{subtitle && (
						<span className="font-normal text-muted-foreground tracking-wide">
							{subtitle}
						</span>
					)}
				</div>
			)}

			{children}
		</section>
	);
}

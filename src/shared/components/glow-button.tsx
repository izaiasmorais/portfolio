import { Slot } from "radix-ui";
import { cn } from "@/shared/utils/cn";

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
	size?: "default" | "icon";
	asChild?: boolean;
}

const base =
	"inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 dark:focus-visible:ring-neutral-700 text-sm ring-0 transition-opacity duration-200 hover:opacity-80 active:opacity-90";

const darkStyle =
	"bg-radial-[at_52%_-52%] from-neutral-950/70 to-neutral-950/95 **:[text-shadow:0_1px_0_var(--color-neutral-950)] border border-neutral-950 text-white inset-shadow-2xs inset-shadow-white/25 shadow-md shadow-neutral-950/30";

const lightStyle =
	"bg-radial-[at_52%_-52%] from-white to-neutral-50 **:[text-shadow:0_1px_0_var(--color-white)] border border-neutral-200 text-neutral-950 inset-shadow-2xs inset-shadow-white/80 shadow-md shadow-neutral-950/10";

const darkStyleWithDarkPrefix =
	"dark:from-neutral-950/70 dark:to-neutral-950/95 dark:**:[text-shadow:0_1px_0_var(--color-neutral-950)] dark:border-neutral-950 dark:text-white dark:inset-shadow-white/25 dark:shadow-neutral-950/30";

const lightStyleWithDarkPrefix =
	"dark:from-white dark:to-neutral-50 dark:**:[text-shadow:0_1px_0_var(--color-white)] dark:border-neutral-200 dark:text-neutral-950 dark:inset-shadow-white/80 dark:shadow-neutral-950/10";

const variants = {
	primary: cn(darkStyle, lightStyleWithDarkPrefix),
	secondary: cn(lightStyle, darkStyleWithDarkPrefix),
};

const sizes = {
	default: "h-9 px-4 py-2",
	icon: "size-9",
};

export function GlowButton({
	variant = "primary",
	size = "default",
	asChild = false,
	className,
	...props
}: GlowButtonProps) {
	const Comp = asChild ? Slot.Root : "button";

	return (
		<Comp
			className={cn(base, variants[variant], sizes[size], className)}
			{...props}
		/>
	);
}

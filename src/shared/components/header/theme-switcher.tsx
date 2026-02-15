"use client";
import { HugeiconsIcon } from "@hugeicons/react";
import {
	Sun02Icon,
	Moon02Icon,
	ComputerIcon,
} from "@hugeicons/core-free-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GlowButton } from "@/shared/components/glow-button";

export function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else if (theme === "dark") {
			setTheme("system");
		} else {
			setTheme("light");
		}
	};

	const getIcon = () => {
		if (theme === "light") return <HugeiconsIcon icon={Sun02Icon} size={18} strokeWidth={2} />;
		if (theme === "dark") return <HugeiconsIcon icon={Moon02Icon} size={18} strokeWidth={2} />;
		return <HugeiconsIcon icon={ComputerIcon} size={18} strokeWidth={2} />;
	};

	if (!mounted) {
		return (
			<div className="size-9 rounded-md border border-border bg-secondary animate-pulse" />
		);
	}

	return (
		<GlowButton
			variant="secondary"
			size="icon"
			onClick={toggleTheme}
			aria-label="Toggle theme"
		>
			{getIcon()}
		</GlowButton>
	);
}

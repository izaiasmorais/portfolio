import Image from "next/image";
import type { SkillIcon as SkillIconType } from "../types";

interface SkillIconProps {
	icon: SkillIconType;
}

export function SkillIcon({ icon }: SkillIconProps) {
	switch (icon.type) {
		case "svg":
			return (
				<Image
					src={icon.src}
					alt=""
					width={16}
					height={16}
					className="size-4"
				/>
			);
		case "svg-themed":
			return (
				<>
					<Image
						src={icon.light}
						alt=""
						width={16}
						height={16}
						className="size-4 dark:hidden"
					/>
					<Image
						src={icon.dark}
						alt=""
						width={16}
						height={16}
						className="size-4 hidden dark:block"
					/>
				</>
			);
	}
}

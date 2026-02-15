import Image from "next/image";
import type { Institution } from "../types";

type InstitutionLogoProps = Pick<Institution, "logo" | "name" | "logoBg" | "logoFill">;

export function InstitutionLogo({ logo, name, logoBg, logoFill }: InstitutionLogoProps) {
	return (
		<div className="shrink-0 relative">
			<div
				className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm z-10 relative overflow-hidden ${logoBg ?? ""}`}
			>
				{logoFill ? (
					<Image
						src={logo}
						alt={name}
						fill
						className="object-cover"
					/>
				) : (
					<Image
						src={logo}
						alt={name}
						width={25}
						height={25}
						className="object-contain"
					/>
				)}
			</div>
		</div>
	);
}

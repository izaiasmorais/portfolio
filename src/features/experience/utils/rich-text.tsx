import type { ReactNode } from "react"

export function renderRichText(text: string): ReactNode {
	const parts = text.split(/(\*\*[^*]+\*\*)/g)

	return parts.map((part, index) => {
		if (part.startsWith("**") && part.endsWith("**")) {
			return (
				<strong key={index} className="font-medium text-foreground/90">
					{part.slice(2, -2)}
				</strong>
			)
		}
		return part
	})
}

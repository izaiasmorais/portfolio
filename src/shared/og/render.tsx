import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const ogSize = { width: 1200, height: 630 } as const
export const ogContentType = "image/png" as const

export type OgPageContent = {
	label: string | null
	title: string
	subtitle: string
	bio?: string
}

const skills = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker"]

async function loadFonts() {
	const [bold, regular] = await Promise.all([
		readFile(join(process.cwd(), "public/fonts/Satoshi-Bold.otf")),
		readFile(join(process.cwd(), "public/fonts/Satoshi-Regular.otf")),
	])
	return { bold, regular }
}

export async function renderOg({ label, title, subtitle, bio }: OgPageContent) {
	const { bold, regular } = await loadFonts()

	return new ImageResponse(
		<div
			style={{
				display: "flex",
				width: "100%",
				height: "100%",
				background: "#09090b",
				position: "relative",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					paddingTop: 64,
					paddingRight: 72,
					paddingBottom: 56,
					paddingLeft: 72,
					flex: 1,
					justifyContent: "space-between",
				}}
			>
				<div style={{ display: "flex", flexDirection: "column" }}>
					{label !== null && (
						<div
							style={{
								fontSize: 22,
								fontWeight: 400,
								color: "#71717a",
								fontFamily: "Satoshi",
								marginBottom: 16,
								letterSpacing: "0.05em",
							}}
						>
							{label}
						</div>
					)}
					<div
						style={{
							fontSize: label !== null ? 80 : 72,
							fontWeight: 700,
							color: "#fafafa",
							fontFamily: "Satoshi",
							lineHeight: 1.1,
						}}
					>
						{title}
					</div>
					<div
						style={{
							fontSize: 32,
							fontWeight: 400,
							color: "#a1a1aa",
							fontFamily: "Satoshi",
							marginTop: 16,
						}}
					>
						{subtitle}
					</div>
					{bio && (
						<div
							style={{
								fontSize: 22,
								fontWeight: 400,
								color: "#d4d4d8",
								fontFamily: "Satoshi",
								marginTop: 20,
								lineHeight: 1.6,
								maxWidth: 880,
							}}
						>
							{bio}
						</div>
					)}
				</div>

				<div style={{ display: "flex", gap: 12, marginTop: 40 }}>
					{skills.map((skill) => (
						<div
							key={skill}
							style={{
								display: "flex",
								paddingTop: 8,
								paddingBottom: 8,
								paddingLeft: 18,
								paddingRight: 18,
								background: "#18181b",
								borderWidth: 1,
								borderStyle: "solid",
								borderColor: "#27272a",
								borderRadius: 8,
								fontSize: 18,
								color: "#a1a1aa",
								fontFamily: "Satoshi",
							}}
						>
							{skill}
						</div>
					))}
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						borderTopWidth: 1,
						borderTopStyle: "solid",
						borderTopColor: "#27272a",
						paddingTop: 24,
						marginTop: 40,
					}}
				>
					<div style={{ fontSize: 20, color: "#71717a", fontFamily: "Satoshi" }}>
						Teresina, PI · Brasil
					</div>
					<div style={{ fontSize: 20, color: "#71717a", fontFamily: "Satoshi" }}>
						izaiasmorais.dev
					</div>
				</div>
			</div>
		</div>,
		{
			...ogSize,
			fonts: [
				{ name: "Satoshi", data: bold, weight: 700, style: "normal" },
				{ name: "Satoshi", data: regular, weight: 400, style: "normal" },
			],
		},
	)
}

import { ImageResponse } from "next/og"
import { readFile } from "fs/promises"
import { join } from "path"
import type { NextRequest } from "next/server"

type PageKey = "home" | "experience" | "education" | "skills" | "projects" | "contact"

const pages: Record<PageKey, { label: string | null; title: string; subtitle: string; showBio: boolean }> = {
	home: {
		label: null,
		title: "Izaias Morais",
		subtitle: "Design Engineer & Fullstack Developer",
		showBio: true,
	},
	experience: {
		label: "Izaias Morais",
		title: "Experiência",
		subtitle: "Senior Full-Stack Engineer · Trin Hub",
		showBio: false,
	},
	education: {
		label: "Izaias Morais",
		title: "Formação",
		subtitle: "Ciência da Computação · UFPI",
		showBio: false,
	},
	skills: {
		label: "Izaias Morais",
		title: "Habilidades",
		subtitle: "TypeScript, React, Node.js e mais",
		showBio: false,
	},
	projects: {
		label: "Izaias Morais",
		title: "Projetos",
		subtitle: "+50 projetos pessoais e profissionais",
		showBio: false,
	},
	contact: {
		label: "Izaias Morais",
		title: "Contato",
		subtitle: "Vamos conversar",
		showBio: false,
	},
}

const skills = ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Docker"]

export async function GET(request: NextRequest) {
	const [fontBold, fontRegular] = await Promise.all([
		readFile(join(process.cwd(), "public/fonts/Satoshi-Bold.otf")),
		readFile(join(process.cwd(), "public/fonts/Satoshi-Regular.otf")),
	])

	const pageParam = request.nextUrl.searchParams.get("page") ?? "home"
	const { label, title, subtitle, showBio } = pages[pageParam as PageKey] ?? pages.home

	return new ImageResponse(
		(
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
						position: "absolute",
						left: 0,
						top: 0,
						bottom: 0,
						width: 6,
						background: "linear-gradient(to bottom, #7c3aed, #2563eb)",
					}}
				/>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						paddingTop: 64,
						paddingRight: 72,
						paddingBottom: 56,
						paddingLeft: 84,
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
						{showBio && (
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
								Apaixonado por programação, venho estudando tecnologias na área desde 2022, com foco no
								desenvolvimento de aplicações web.
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
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{ name: "Satoshi", data: fontBold, weight: 700, style: "normal" },
				{ name: "Satoshi", data: fontRegular, weight: 400, style: "normal" },
			],
		},
	)
}

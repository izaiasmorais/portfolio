export type WorkType = "full-time" | "part-time" | "freelance"

export interface Position {
	role: string
	date: string
	description: string[]
	workType: WorkType
	technologies?: string[]
}

export interface Job {
	company: string
	url: string
	positions: Position[]
	location: string
	modality: string
	logo?: string
	logoBg: string
}

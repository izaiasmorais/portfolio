const requests = new Map<string, number[]>()

const MAX_REQUESTS = 5
const WINDOW_MS = 60 * 60 * 1000

export function isRateLimited(key: string): boolean {
	const now = Date.now()
	const timestamps = requests.get(key) ?? []

	const recent = timestamps.filter((t) => now - t < WINDOW_MS)

	if (recent.length >= MAX_REQUESTS) {
		requests.set(key, recent)
		return true
	}

	recent.push(now)
	requests.set(key, recent)
	return false
}

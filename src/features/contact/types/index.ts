export interface ContactFormValues {
	name: string
	email: string
	message: string
	website?: string
}

export interface SendEmailResult {
	success: boolean
}

"use server"

import { headers } from "next/headers"
import { Resend } from "resend"
import { z } from "zod"
import type { ContactFormValues, SendEmailResult } from "../types"
import { isRateLimited } from "./rate-limit"

const resend = new Resend(process.env.RESEND_API_KEY)

const serverSchema = z.object({
	name: z.string().min(2).max(100),
	email: z.string().email().max(254),
	message: z.string().min(10).max(5000),
	website: z.string().max(0).optional(),
})

export async function sendContactEmail(input: ContactFormValues): Promise<SendEmailResult> {
	const parsed = serverSchema.safeParse(input)

	if (!parsed.success) {
		return { success: false }
	}

	const { name, email, message, website } = parsed.data

	if (website) {
		return { success: true }
	}

	const headersList = await headers()
	const ip = headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"

	if (isRateLimited(ip)) {
		return { success: false }
	}

	const sanitizedName = name.replace(/[\r\n]/g, "")
	const contactEmail = process.env.CONTACT_EMAIL ?? "izaiaslima356@gmail.com"

	const { error } = await resend.emails.send({
		from: "Portfolio Contact <onboarding@resend.dev>",
		to: contactEmail,
		replyTo: email,
		subject: `Nova mensagem de ${sanitizedName}`,
		text: `Nome: ${sanitizedName}\nEmail: ${email}\n\n${message}`,
	})

	if (error) {
		return { success: false }
	}

	return { success: true }
}

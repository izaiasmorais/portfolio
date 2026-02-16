"use server";

import { z } from "zod";
import { Resend } from "resend";
import type { ContactFormValues, SendEmailResult } from "../types";

const resend = new Resend(process.env.RESEND_API_KEY);

const serverSchema = z.object({
	name: z.string().min(1).min(2),
	email: z.string().min(1).email(),
	message: z.string().min(1).min(10),
});

export async function sendContactEmail(
	input: ContactFormValues,
): Promise<SendEmailResult> {
	const parsed = serverSchema.safeParse(input);

	if (!parsed.success) {
		return { success: false };
	}

	const { name, email, message } = parsed.data;

	const { error } = await resend.emails.send({
		from: "Portfolio Contact <onboarding@resend.dev>",
		to: "izaiaslima356@gmail.com",
		replyTo: email,
		subject: `Nova mensagem de ${name}`,
		text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
	});

	if (error) {
		return { success: false };
	}

	return { success: true };
}

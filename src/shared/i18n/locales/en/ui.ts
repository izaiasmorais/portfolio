import type { Dictionary } from "../../types";

export const ui: Dictionary["ui"] = {
	header: {
		nav: {
			home: "Home",
			experience: "Experience",
			education: "Education",
			skills: "Skills",
			projects: "Projects",
			contact: "Contact",
		},
		resume: "Resume",
	},
	footer: {
		location: "Teresina, PI",
		socialLabels: {
			whatsapp: "Contact via WhatsApp",
			linkedin: "LinkedIn profile",
			instagram: "Instagram profile",
			twitter: "X (Twitter) profile",
			github: "GitHub profile",
			email: "Send email",
		},
		ariaLabel: "Social media",
	},
	pagination: {
		showing: "Showing",
		of: "of",
		item: "item",
		items: "items",
		perPage: "per page",
		firstPage: "Go to first page",
		lastPage: "Go to last page",
		previousPage: "Go to previous page",
		nextPage: "Go to next page",
		goToPage: "Go to page",
	},
	workTypes: {
		"full-time": "Full-Time",
		"part-time": "Part-Time",
		freelance: "Freelance",
	},
	educationTypes: {
		bachelor: "Bachelor's",
		technical: "Technical",
		course: "Course",
	},
	certificate: {
		skills: "Skills",
		workload: "Workload",
		workloadValue: "50 hours",
		contentType: "Content type",
		showCredential: "Show Credential",
	},
	form: {
		title: "Send a message",
		name: "Name",
		namePlaceholder: "Your name",
		email: "Email",
		emailPlaceholder: "your@email.com",
		message: "Your message",
		messagePlaceholder: "Write your message here...",
		submit: "Send message",
	},
};

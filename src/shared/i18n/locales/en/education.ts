import type { Dictionary } from "../../types";

export const education: Dictionary["education"] = {
	title: "Education",
	subtitle: "My academic journey",
	educationHeading: "Education",
	coursesHeading: "Courses",
	institutions: [
		{
			name: "Federal University of Piauí",
			subtitle: "Campus Ministro Petrônio Portella",
			url: "https://ufpi.br",
			entries: [
				{
					title: "Bachelor's in Computer Science",
					date: "Sep 2022 - Present",
					type: "bachelor",
					description: [],
				},
			],
			logo: "/education/ufpi-logo.jpg",
			logoFill: true,
		},
		{
			name: "Federal Institute of Piauí",
			subtitle: "Campus Teresina Central",
			url: "https://ifpi.edu.br",
			entries: [
				{
					title: "Technical Degree in Administration",
					date: "Feb 2019 - May 2022",
					type: "technical",
					description: [],
				},
			],
			logo: "/education/ifpi-logo.png",
			logoBg: "bg-white",
		},
	],
	courses: [
		{
			name: "Rocketseat",
			url: "https://rocketseat.com.br",
			entries: [
				{
					title: "Acceleration Program",
					date: "Jan 2022 - Present",
					type: "course",
					description: [
						"Acceleration program focused on programming specialization, where I completed courses in ReactJS, Node.js and Python",
					],
					certificates: [
						{
							title: '"ReactJS 2022" Course Completion Certificate',
							image: "/education/certificates/react-2022.png",
							url: "https://app.rocketseat.com.br/certificates/5c987939-3fc7-4cf8-a706-6ef7b8814062",
							skills: "ReactJS Fundamentals, Creating SPAs with ReactJS, API Consumption and Performance in ReactJS, Next.js Fundamentals, Design System and Storybook, and FullStack Application Development with NextJS.",
						},
					],
				},
			],
			logo: "/education/rocketseat-logo.jpg",
			logoFill: true,
		},
		{
			name: "Origamid",
			url: "https://origamid.com",
			entries: [
				{
					title: "Web Development Course",
					date: "Dec 2021 - Jun 2022",
					type: "course",
					description: [
						"Web development program where I completed courses in Complete Web Design, CSS Layouts, Complete JavaScript ES6 and Complete Vue JS 2",
					],
				},
			],
			logo: "/education/origamid-logo.jpg",
			logoFill: true,
		},
	],
};

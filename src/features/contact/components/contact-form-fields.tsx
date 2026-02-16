import type { Control } from "react-hook-form";
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import type { ContactFormValues } from "../types";
import type { Dictionary } from "@/shared/i18n/types";

interface ContactFormFieldsProps {
	control: Control<ContactFormValues>;
	formLabels: Dictionary["ui"]["form"];
}

export function ContactFormFields({
	control,
	formLabels,
}: ContactFormFieldsProps) {
	return (
		<>
			<FormField
				control={control}
				name="name"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
							{formLabels.name}
						</FormLabel>
						<FormControl>
							<Input
								type="text"
								placeholder={formLabels.namePlaceholder}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name="email"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
							{formLabels.email}
						</FormLabel>
						<FormControl>
							<Input
								type="email"
								placeholder={formLabels.emailPlaceholder}
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>

			<FormField
				control={control}
				name="message"
				render={({ field }) => (
					<FormItem>
						<FormLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
							{formLabels.message}
						</FormLabel>
						<FormControl>
							<Textarea
								rows={4}
								placeholder={formLabels.messagePlaceholder}
								className="resize-none"
								{...field}
							/>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	);
}

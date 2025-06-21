import { Button } from "@/components/ui/button";
import {
	Building2,
	Github,
	Instagram,
	Linkedin,
	Mail,
	Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="w-full h-full flex flex-col justify-between">
			<main className="flex items-center gap-12">
				<Image
					src="https://github.com/izaiasmorais.png"
					alt="Izaias Morais"
					width={200}
					height={200}
					quality={100}
					className="rounded-full border"
				/>

				<div>
					<h1 className="text-6xl font-semibold leading-tight">
						Izaías Morais
					</h1>

					<p className="text-muted-foreground">
						Apaixonado por programação, venho estudando tecnologias na área
						desde 2022, com foco no desenvolvimento de aplicações web. Sigo
						buscando oportunidades para resolver problemas.
					</p>
				</div>
			</main>

			<footer className="py-6 text-sm flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Building2 size={20} />
					Teresina, PI
				</div>

				<div className="flex items-center gap-4">
					<Button variant="ghost" size="icon" asChild>
						<Link href="https://www.linkedin.com/in/izaiasmorais">
							<Linkedin size={20} />
							<span className="sr-only">Linkedin</span>
						</Link>
					</Button>

					<Button variant="ghost" size="icon" asChild>
						<Link href="https://www.instagram.com/izaiasmorais_">
							<Instagram size={20} />
							<span className="sr-only">Instagram</span>
						</Link>
					</Button>

					<Button variant="ghost" size="icon" asChild>
						<Link href="https://github.com/izaiasmorais">
							<Github size={20} />
							<span className="sr-only">Github</span>
						</Link>
					</Button>

					<Button variant="ghost" size="icon" asChild>
						<Link href="https://api.whatsapp.com/send/?phone=5586981475447&text&type=phone_number&app_absent=0">
							<Phone size={20} />
							<span className="sr-only">Whatsapp</span>
						</Link>
					</Button>

					<Button variant="ghost" size="icon" asChild>
						<Link href="mailto:izaiaslima356@gmail.com">
							<Mail size={20} />
							<span className="sr-only">E-mail</span>
						</Link>
					</Button>

				
				</div>
			</footer>
		</div>
	);
}

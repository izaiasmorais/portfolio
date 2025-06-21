import Image from "next/image";

export default function Home() {
	return (
		<div className="w-full">
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
					<h1 className="text-6xl font-semibold leading-tight">Izaías Morais</h1>

					<p className="text-muted-foreground">
						Apaixonado por programação, venho estudando tecnologias na área
						desde 2022, com foco no desenvolvimento de aplicações web. Sigo
						buscando oportunidades para resolver problemas.
					</p>
				</div>
			</main>
		</div>
	);
}

import { Header } from "@/components/header/header";

export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full h-screen">
			<div className="w-full max-w-[1200px] mx-auto p-6 flex flex-col gap-6">
				<Header />

				{children}
			</div>
		</div>
	);
}

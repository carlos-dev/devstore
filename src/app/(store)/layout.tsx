import { CartProvider } from "@/contexts/cart-context";
import { type ReactNode, Suspense } from "react";
import { Header } from "../components/header";

export default function StoreLayout({ children }: { children: ReactNode }) {
	return (
		<CartProvider>
			<div className="mx-auto grid min-h-screen w-full max-w-[1680px] grid-rows-[min-content_max-content] gap-5 p-8">
				<Suspense fallback={<div>Loading...</div>}>
					<Header />
				</Suspense>
				{children}
			</div>
		</CartProvider>
	);
}

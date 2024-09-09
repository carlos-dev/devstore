import { api } from "@/app/data/api";
import type { Product } from "@/app/data/types/products";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
	const response = await api("/products/featured", {
		// cache: "no-store",
		// next: {
		// 	revalidate: 60 * 60, // 1 hour
		// },
	});
	const products = await response.json();

	return products;
}

export default async function Home() {
	const [highlitghedProduct, ...otherProducts] = await getFeaturedProducts();

	return (
		<main className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
			<Link
				href={`/product/${highlitghedProduct.slug}`}
				className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
			>
				<Image
					src={highlitghedProduct.image}
					className="group-hover:scale-105 transition-transform duration-500"
					width={920}
					height={920}
					quality={100}
					alt=""
				/>

				<div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
					<span className="text-sm truncate">{highlitghedProduct.title}</span>
					<span className="flex flex-shrink-0 h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
						{highlitghedProduct.price.toLocaleString("pt-BR", {
							style: "currency",
							currency: "BRL",
							minimumFractionDigits: 0,
						})}
					</span>
				</div>
			</Link>

			{otherProducts.map((product) => (
				<Link
					key={product.id}
					href={`/product/${product.slug}`}
					className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
				>
					<Image
						src={product.image}
						className="group-hover:scale-105 transition-transform duration-500"
						width={920}
						height={920}
						quality={100}
						alt={product.title}
					/>

					<div className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
						<span className="text-sm truncate">{product.description}</span>
						<span className="flex flex-shrink-0 h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
							{product.price.toLocaleString("pt-BR", {
								style: "currency",
								currency: "BRL",
								minimumFractionDigits: 0,
							})}
						</span>
					</div>
				</Link>
			))}
		</main>
	);
}

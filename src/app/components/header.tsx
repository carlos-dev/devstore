"use client";

import Image from "next/image";
import Link from "next/link";
import { CartWidgets } from "./cart-widgets";
import { SearchForm } from "./search-form";

export function Header() {
	return (
		<header className="flex items-center justify-between">
			<div className="flex items-start gap-5">
				<Link href="/" className="text-2xl font-extrabold text-white">
					devstore
				</Link>

				<SearchForm />
			</div>

			<div className="flex items-center gap-4">
				<CartWidgets />
				<div className="w-px h-4 bg-zinc-700" />

				<Link href="/login" className="flex items-center gap-2 hover:underline">
					<span className="text-sm">Account</span>
					<Image
						src="https://github.com/carlos-dev.png"
						width={24}
						height={24}
						alt="avatar"
						className="h-6 w-6 rounded-full"
					/>
				</Link>
			</div>
		</header>
	);
}

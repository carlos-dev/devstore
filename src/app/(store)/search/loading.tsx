"use client";

import { Skeleton } from "@/app/components/skeleton";
import { Suspense } from "react";
import { SearchParams } from "./components/search-params";

export default function SearchLoading() {
	return (
		<div className="flex flex-col gap-4">
			<Suspense
				fallback={
					<div className="h-12 bg-zinc-900 rounded-full animate-pulse" />
				}
			>
				<SearchParams />
			</Suspense>

			<div className="grid grid-cols-3 gap-6">
				<Skeleton className="h-[480px]" />
				<Skeleton className="h-[480px]" />
				<Skeleton className="h-[480px]" />
				<Skeleton className="h-[480px]" />
				<Skeleton className="h-[480px]" />
				<Skeleton className="h-[480px]" />
			</div>
		</div>
	);
}

import { Skeleton } from "./ui/skeleton";
function Loading() {
	return (
		<section className="grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
			<div className="flex flex-col space-y-3">
				<Skeleton className="h-[125px] w-[250px] rounded-xl" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-[250px]" />
					{/* <Skeleton className="h-4 w-[200px]" /> */}
				</div>
			</div>
			<div className="flex flex-col space-y-3">
				<Skeleton className="h-[125px] w-[250px] rounded-xl" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-[250px]" />
					{/* <Skeleton className="h-4 w-[200px]" /> */}
				</div>
			</div>
			<div className="flex flex-col space-y-3">
				<Skeleton className="h-[125px] w-[250px] rounded-xl" />
				<div className="space-y-2">
					<Skeleton className="h-4 w-[250px]" />
					{/* <Skeleton className="h-4 w-[200px]" /> */}
				</div>
			</div>
		</section>
	);
}

export default Loading;

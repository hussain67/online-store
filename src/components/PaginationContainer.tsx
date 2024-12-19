import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

import { constructUrl, constructPrevOrNextUrl } from "../utils/pagination";

import { ProductResponseWithParams } from "../types/productTypes";
import { useLoaderData, useLocation } from "react-router-dom";

function PaginationContainer() {
	const { meta } = useLoaderData() as ProductResponseWithParams;
	const { pageCount, page } = meta.pagination;
	const { search, pathname } = useLocation();
	// console.log(pathname, search);

	const pages = Array.from({ length: pageCount }, (_, index) => {
		return index + 1;
	});
	// console.log(pages);
	if (pageCount < 2) return null;

	const renderPagination = pages.map(pageNumber => {
		const isActive = pageNumber === page;
		const url = constructUrl({ pageNumber, search, pathname });
		return (
			<PaginationItem key={pageNumber}>
				<PaginationLink
					size="default"
					to={url}
					isActive={isActive}
				>
					{pageNumber}
				</PaginationLink>
			</PaginationItem>
		);
	});
	const { prevUrl, nextUrl } = constructPrevOrNextUrl({
		currentPage: page,
		pageCount,
		search,
		pathname
	});
	return (
		<Pagination className="mt-16">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						size="default"
						to={prevUrl}
					></PaginationPrevious>
				</PaginationItem>
				{renderPagination}
				<PaginationItem>
					<PaginationNext
						size="default"
						to={nextUrl}
					></PaginationNext>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}

export default PaginationContainer;

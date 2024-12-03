import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function Error() {
	const error = useRouteError();
	// console.log(error?.status);
	// console.log(isRouteErrorResponse(error));
	if (isRouteErrorResponse(error) && error.status === 404) {
		return (
			<main className="min-h-[100vh] grid  place-content-center ">
				<div className="text-center">
					<h1>404</h1>
					<h3>Page Not Found</h3>
					<p>Sorry we could not found the page you are looking for</p>
					<Button>Go Back Home</Button>
				</div>
			</main>
		);
	}
	return (
		<div>
			{" "}
			<main className="min-h-[100vh] grid place-content-center">
				<p className="py-10">Some Error occured...</p>
				<Button
					size="lg"
					variant="secondary"
				>
					<Link to="/">Go Back Home</Link>
				</Button>
			</main>
		</div>
	);
}

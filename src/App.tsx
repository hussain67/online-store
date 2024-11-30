import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAppSelector } from "./hook";
import { HomeLayout, Landing, Error, Products, SingleProduct, Cart, About, Register, Login, Checkout, Orders } from "./pages";

// App Function
const router = createBrowserRouter([
	{
		path: "/",
		element: <Landing />
	},
	{
		path: "/about",
		element: <About />
	}
]);
export default function App() {
	return <RouterProvider router={router} />;
}

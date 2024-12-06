import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, Error, Products, SingleProduct, Cart, About, Register, Login, Checkout, Orders } from "./pages";
import ErrorElement from "./components/ErrorElement";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
// App Function
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				loader: landingLoader
			},
			{
				path: "about",
				element: <About />,
				errorElement: <ErrorElement />
			},
			{
				path: "products",
				element: <Products />,
				loader: productsLoader,
				errorElement: <ErrorElement />
			},
			{
				path: "products/:id",
				element: <SingleProduct />,
				errorElement: <ErrorElement />
			},
			{
				path: "cart",
				element: <Cart />,
				errorElement: <ErrorElement />
			},
			{
				path: "checkout",
				element: <Checkout />,
				errorElement: <ErrorElement />
			},
			{
				path: "orders",
				element: <Orders />,
				errorElement: <ErrorElement />
			}
		]
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <Error />
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <Error />
	}
]);
export default function App() {
	return <RouterProvider router={router} />;
}

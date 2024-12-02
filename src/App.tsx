import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, Error, Products, SingleProduct, Cart, About, Register, Login, Checkout, Orders } from "./pages";

// App Function
const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Landing />
			},
			{
				path: "about",
				element: <About />
			},
			{
				path: "products",
				element: <About />
			},
			{
				path: "cart",
				element: <Cart />
			},
			{
				path: "checkout",
				element: <Checkout />
			},
			{
				path: "orders",
				element: <Orders />
			}
		]
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		path: "/register",
		element: <Register />
	}
]);
export default function App() {
	return <RouterProvider router={router} />;
}

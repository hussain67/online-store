import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, Landing, Error, Products, SingleProduct, Cart, About, Register, Login, Checkout, Orders } from "./pages";
import ErrorElement from "./components/ErrorElement";
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
import { loader as singleProductLoader } from "./pages/SingleProduct";
// Actions
import { action as registerUserAction } from "./features/user/RegisterUser";
import { action as loginAction } from "./features/user/LoginUser";
// import { action as checkoutAction } from "./components/checkout/CheckoutOrderForm";

import { action as checkoutAction } from "./pages/Checkout";

import CheckoutLoginInfo from "./components/checkout/CheckoutLoginInfo";
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
				errorElement: <ErrorElement />,
				loader: singleProductLoader
			},
			{
				path: "cart",
				element: <Cart />,
				errorElement: <ErrorElement />
			},
			{
				path: "checkout",
				element: <Checkout />,
				errorElement: <ErrorElement />,
				action: checkoutAction
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
		errorElement: <Error />,
		action: loginAction
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <Error />,
		action: registerUserAction
	},
	{
		path: "/checkoutinfo",
		element: <CheckoutLoginInfo />
	}
]);
export default function App() {
	return <RouterProvider router={router} />;
}

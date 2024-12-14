import { ActionFunction, Form, Link, redirect, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import FormInput from "../../components/FormInput";
import { Button } from "../../components/ui/button";
import { customFetch } from "../../utils/customFetch";
import { toast } from "../../hooks/use-toast";
import { AxiosError, AxiosResponse } from "axios";
import SubmitButton from "../../components/SubmitButton";
import { useAppDispatch } from "../../hook";
import { loginUser } from "./userSlice";
import store from "../../store";

// hussain123 hussain123@test.com 123123
export const action: ActionFunction = async ({ request }): Promise<Response | null> => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	console.log(data);
	try {
		// await new Promise(resolve => setTimeout(resolve, 2000));
		const response: AxiosResponse = await customFetch.post("/auth/local", data);
		console.log(response);
		const userName = response.data.user.username;
		const jwt = response.data.jwt;
		store.dispatch(loginUser({ userName, jwt }));

		toast({ description: "Logged in" });
		return redirect("/");
	} catch (error) {
		console.log(error);
		const errorMsg = error instanceof AxiosError ? error.response?.data.error.message : "Login failed";
		toast({ description: errorMsg });
		return null;
	}
};

function LoginUser() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	async function loginAsGuistUser(): Promise<void> {
		try {
			const response: AxiosResponse = await customFetch.post("/auth/local", {
				identifier: "hussain123@test.com",
				password: "123123"
			});
			const userName = response.data.user.username;
			const jwt = response.data.jwt;
			dispatch(loginUser({ userName, jwt }));
			console.log(userName, jwt);
			navigate("/");
		} catch (error) {
			console.log(error);
			toast({ description: "Login failed" });
		}
	}
	return (
		<section className="grid h-screen place-content-center">
			<Card className="bg-muted">
				<CardHeader>
					<CardTitle className="text-center -mb-2">Login</CardTitle>
				</CardHeader>
				<CardContent>
					<Form
						className="w-[400px]"
						method="post"
					>
						<FormInput
							type="email"
							name="identifier"
							defaultValue="test@test.com"
						/>
						<FormInput
							type="password"
							name="password"
							defaultValue="secret"
						/>
						<SubmitButton
							text="Login"
							className="mt-4 w-full"
						/>
						<Button
							type="button"
							variant="outline"
							className="w-full mt-4 bg-blue-400"
							onClick={loginAsGuistUser}
						>
							Guest User
						</Button>
						<p>
							Not a member ?
							<Button
								type="button"
								variant="link"
							>
								<Link to="/register">Register</Link>
							</Button>
						</p>
					</Form>
				</CardContent>
			</Card>
		</section>
	);
}

export default LoginUser;

import { ActionFunction, Form, Link, redirect } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import FormInput from "../../components/FormInput";
import { Button } from "../../components/ui/button";
import { customFetch } from "../../utils/customFetch";
import { toast } from "../../hooks/use-toast";
import { AxiosError } from "axios";
import SubmitButton from "../../components/SubmitButton";

// hussain123 hussain123@test.com 123123
export const action: ActionFunction = async ({ request }): Promise<Response | null> => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	console.log(data);
	try {
		await new Promise(resolve => setTimeout(resolve, 2000));
		const result = await customFetch.post("/auth/local/register", data);
		console.log(result);
		toast({ description: "Registered" });
		return redirect("/login");
	} catch (error) {
		console.log(error);
		const errorMsg = error instanceof AxiosError ? error.response?.data.error.message : "Registration failed";
		toast({ description: errorMsg });
		return null;
	}

	return null;
};
function RegisterUser() {
	return (
		<section className="grid h-screen place-content-center">
			<Card className="bg-muted">
				<CardHeader>
					<CardTitle className="text-center -mb-2">Register</CardTitle>
				</CardHeader>
				<CardContent>
					<Form
						className="w-[400px]"
						method="post"
					>
						<FormInput
							type="text"
							name="username"
							defaultValue="test"
						/>
						<FormInput
							type="email"
							name="email"
							defaultValue="test@test.com"
						/>
						<FormInput
							type="password"
							name="password"
							defaultValue="secret"
						/>
						<SubmitButton
							text="Register"
							className="mt-4 w-full"
						/>

						<p>
							Already a member ?
							<Button
								type="button"
								variant="link"
							>
								<Link to="/login">Login</Link>
							</Button>
						</p>
					</Form>
				</CardContent>
			</Card>
		</section>
	);
}

export default RegisterUser;

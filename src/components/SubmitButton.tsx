import { useNavigation } from "react-router-dom";
import { Button } from "./ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

function SubmitButton({ text, className }: { text: string; className: string }) {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	return (
		<Button
			type="submit"
			disabled={isSubmitting}
			className={className}
		>
			{isSubmitting ? (
				<span className="flex">
					<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
					Submitting....
				</span>
			) : (
				text
			)}
		</Button>
	);
}

export default SubmitButton;

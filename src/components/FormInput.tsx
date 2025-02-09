import { Input } from "./ui/input";
import { Label } from "./ui/label";

type FormInputProps = {
	label?: string;
	name: string;
	type: string;
	defaultValue?: string;
};
function FormInput({ label, name, type, defaultValue }: FormInputProps) {
	return (
		<div>
			<Label
				htmlFor={name}
				className="capitalize my-3 block"
			>
				{" "}
				{label || name}
			</Label>
			<Input
				id={name}
				name={name}
				type={type}
				defaultValue={defaultValue}
			/>
		</div>
	);
}

export default FormInput;

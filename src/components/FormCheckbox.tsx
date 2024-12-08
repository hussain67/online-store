import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

type FormCheckboxProps = {
	label?: string;
	name: string;
	defaultValue?: string;
};
function FormCheckbox({ label, name, defaultValue }: FormCheckboxProps) {
	const defaultChecked = defaultValue === "on" ? true : false;
	return (
		<div className="flex self-end justify-between capitalize">
			<Label htmlFor={name}>{label}</Label>
			<Checkbox
				id={name}
				name={name}
				defaultChecked={defaultChecked}
			/>
		</div>
	);
}

export default FormCheckbox;

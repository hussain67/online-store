import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type SelectInputProps = {
	name: string;
	label?: string;
	defaultValue?: string;
	options: string[];
};
function FormSelect({ label, name, defaultValue, options }: SelectInputProps) {
	return (
		<div>
			<Label htmlFor={name}>{label || name}</Label>
			<Select
				defaultValue={defaultValue || options[0]}
				name={name}
			>
				<SelectTrigger>
					<SelectValue />
				</SelectTrigger>
				<SelectContent>
					{options.map(item => {
						return (
							<SelectItem
								key={item}
								value={item}
							>
								{item}
							</SelectItem>
						);
					})}
				</SelectContent>
			</Select>
		</div>
	);
}

export default FormSelect;

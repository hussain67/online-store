import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { formatAsPound } from "../utils/formatAsPound";
import { useState } from "react";

type FormRangeProps = {
	label: string;
	name: string;
	defaultValue?: string;
};

function FormRange({ label, name, defaultValue }: FormRangeProps) {
	const maxPrice = 100000;
	const step = 1000;
	const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;
	const [selectedPrice, setSelectedPrice] = useState(defaultPrice);
	return (
		<div>
			<Label className="flex justify-between capitalize">
				{label || name}
				<span>{formatAsPound(selectedPrice)}</span>
			</Label>
			<Slider
				id={name}
				defaultValue={[defaultPrice]}
				max={maxPrice}
				step={step}
				name={name}
				value={[selectedPrice]}
				onValueChange={value => setSelectedPrice(value[0])}
				className="mt-4"
			/>
		</div>
	);
}

export default FormRange;

type SelectProductColorProps = {
	colors: string[];
	productColor: string;
	setProductColor: React.Dispatch<React.SetStateAction<string>>;
};

function SelectProductColor({ colors, productColor, setProductColor }: SelectProductColorProps) {
	return (
		<section className="mt-6">
			<h2>Colors</h2>
			<div>
				{colors.map(color => (
					<button
						key={color}
						type="button"
						className={`rounded-full w-6 h-6 mr-2 border-solid border-2 ${color === productColor && "border-primary"}`}
						style={{ backgroundColor: color }}
						onClick={() => setProductColor(color)}
					></button>
				))}
			</div>
		</section>
	);
}

export default SelectProductColor;

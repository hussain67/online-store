function SectionTitle({ text }: { text: string }) {
	return (
		<div>
			<h1 className="border-solid border-b-2 w-full pb-3 text-3xl font-medium tracking-wider mb-4">{text}</h1>
		</div>
	);
}

export default SectionTitle;

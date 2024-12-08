import { Form, Link, useLoaderData } from "react-router-dom";

import { Button } from "../ui/button";
import { type ProductResponseWithParams } from "../../types/productTypes";
import FormSelect from "../../components/FormSelect";
import FormInput from "../FormInput";
import FormRange from "../FormRange";
import FormCheckbox from "../FormCheckbox";
// import { SearchCodeIcon } from "lucide-react";
function Filters() {
	const { meta, params } = useLoaderData() as ProductResponseWithParams;
	const { search, category, company, order, price, shipping } = params;
	return (
		<Form className="border-2 rounded-md px-8 py-4 grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center mb-2">
			<div>
				<FormInput
					type="search"
					label="search product"
					name="search"
					defaultValue={search}
				/>
			</div>
			<FormSelect
				label="select category"
				name="category"
				options={meta.categories}
				defaultValue={category}
			/>
			<FormSelect
				label="select company"
				name="company"
				options={meta.companies}
				defaultValue={company}
			/>
			<FormSelect
				label="select order"
				name="order"
				options={["a-z", "z-a", "high", "low"]}
				defaultValue={order}
			/>
			<FormRange
				label="price"
				name="price"
				defaultValue={price}
			/>
			<FormCheckbox
				label="free shipping"
				name="shiping"
				defaultValue={shipping}
			/>
			<Button
				type="submit"
				size="sm"
				className="self-end "
			>
				Search
			</Button>
			<Button
				type="button"
				size="sm"
				className="self-end "
				asChild
				variant="outline"
			>
				<Link to="/products">Reset</Link>
			</Button>
		</Form>
	);
}

export default Filters;

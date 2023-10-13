import { IFormInputProps } from "./types";

const FormInput = ({
	label,
	name,
	register,
	error,
	...rest
}: IFormInputProps) => {
	return (
		<div className="w-[95%]">
			<label className="text-royal text-sm" htmlFor={name}>
				<strong>{label}</strong>
			</label>
			<input
				className={`w-full px-3 py-2 drop-shadow-md text-sm h-10 text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline ${
					error && "border-red-500"
				}`}
				{...rest}
				{...register(name)}
				aria-invalid={error}
			/>
		</div>
	);
};

export default FormInput;

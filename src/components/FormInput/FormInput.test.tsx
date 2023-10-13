import { render } from "@testing-library/react";
import RenderWrapper from "../../helpers/RenderWrapper";
import FormInput from "./FormInput";

describe("<FormInput/> test", () => {
	const regsiter = jest.fn();
	const error = true;
	test("should render input value", () => {
		const { getByRole } = render(
			<RenderWrapper>
				<FormInput
					label="firstName"
					error={error}
					register={regsiter}
					name="firstName"
				/>
			</RenderWrapper>
		);
		const element = getByRole("textbox");
		expect(element).toBeInTheDocument();
	});
});

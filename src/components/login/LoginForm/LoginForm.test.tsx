import { render, within } from "@testing-library/react";
import RenderWrapper from "../../../helpers/RenderWrapper";
import LoginForm from "./LoginForm";

describe("<LoginForm/> test", () => {
	test("test to check if there are two input fields", () => {
		const { getByRole } = render(
			<RenderWrapper>
				<LoginForm />
			</RenderWrapper>
		);
		const form = getByRole("form");
		const formWithChildren = within(form).getAllByRole("group");
		expect(formWithChildren.length).toBe(2);
	});
});

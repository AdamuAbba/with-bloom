import { expect, test, describe } from "@jest/globals";
import { render } from "@testing-library/react";
import RenderWrapper from "../../../helpers/RenderWrapper";
import SignUpScreen from "./SignUpScreen";

describe("<SignUpScreen/> test", () => {
	test("Should show sign up screen title", () => {
		const { getByText } = render(
			<RenderWrapper>
				<SignUpScreen />
			</RenderWrapper>
		);
		const element = getByText(/Hi there, register below/i);
		expect(element).toBeInTheDocument();
	});
});

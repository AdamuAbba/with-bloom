import { render } from "@testing-library/react";
import RenderWrapper from "../../../helpers/RenderWrapper";
import LoginScreen from "./LoginScreen";

describe("<LoginScreen/> test", () => {
	test("Should show login title", () => {
		const { getByText } = render(
			<RenderWrapper>
				<LoginScreen />
			</RenderWrapper>
		);
		const element = getByText(/Welcome Back/i);
		expect(element).toBeInTheDocument();
	});
});

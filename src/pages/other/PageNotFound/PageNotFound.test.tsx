import { render } from "@testing-library/react";
import RenderWrapper from "../../../helpers/RenderWrapper";
import PageNotFound from "./PageNotFound";

describe("<PageNotFound/> test", () => {
	test("shoud render page not found", () => {
		const { getByText } = render(
			<RenderWrapper>
				<PageNotFound />
			</RenderWrapper>
		);
		const element = getByText(/Oops! a bit awkward/i);
		expect(element).toBeInTheDocument();
	});
});

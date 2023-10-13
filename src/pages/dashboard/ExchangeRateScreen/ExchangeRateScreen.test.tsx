import { render } from "@testing-library/react";
import RenderWrapper from "../../../helpers/RenderWrapper";
import ExchangeRateScreen from "./ExchangeRateScreen";

describe("<ExchangeRateScreen/> test", () => {
	test("should render exchange rate screen", () => {
		const { getByText } = render(
			<RenderWrapper>
				<ExchangeRateScreen />
			</RenderWrapper>
		);
		const element = getByText(/Exchange Rate Calulator/i);
		expect(element).toBeInTheDocument();
	});
});

import { render } from "@testing-library/react";
import ExchangeRateScreen from "./ExchangeRateScreen";

describe("<ExchangeRateScreen/> test", () => {
	test("should render exchange rate screen", () => {
		const { getByText } = render(<ExchangeRateScreen />);
		const element = getByText(/ExchangeRateScreen/);
		expect(element).toBeInTheDocument();
	});
});

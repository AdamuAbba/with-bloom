import { render } from "@testing-library/react";
import RenderWrapper from "../../../helpers/RenderWrapper";
import CoinListScreen from "./CoinListScreen";

describe("<CoinListScreen/> test", () => {
	test("shoud render the Coin Exchange text on the screen", () => {
		const { getByText } = render(
			<RenderWrapper>
				<CoinListScreen />
			</RenderWrapper>
		);
		const element = getByText(/Coin Exchange/i);
		expect(element).toBeInTheDocument();
	});
});

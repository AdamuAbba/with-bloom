import { screen, render } from "@testing-library/react";
import RenderWrapper from "../../../helpers/RenderWrapper";
import CoinTile from "./CoinTile";

describe("render test", () => {
	test("should render <Cointile/>", () => {
		render(
			<RenderWrapper>
				<CoinTile coin="AUGBSD" rate={233444} _key="233444_AGAuULHH" />
			</RenderWrapper>
		);
		const { getByTestId } = screen;
		const element = getByTestId("coin-tile");
		expect(element).toBeInTheDocument();
	});
});

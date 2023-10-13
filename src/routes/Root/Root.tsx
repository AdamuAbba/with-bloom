import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginScreen, SignUpScreen } from "../../pages/authentication";
import { CoinListScreen, ExchangeRateScreen } from "../../pages/dashboard";
import { PageNotFound } from "../../pages/other";

const Root = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/signup" element={<SignUpScreen />} />
				<Route path="/" element={<LoginScreen />} />
				<Route path="/coin" element={<CoinListScreen />} />
				<Route path="/coin/exchange-rate" element={<ExchangeRateScreen />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Root;

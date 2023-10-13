import { ExchangeRateCalculator } from "../../../components/exchange/ExchangeRateCalculator";
import { useAuth } from "../../../hooks";

const ExchangeRateScreen = () => {
	useAuth();
	return (
		<div className="justify-start items-center pt-32 bg-red-400 h-screen flex flex-col">
			<p className="text-white shadow-black text-shadow-sm lg:text-2xl text-lg">
				Exchange Rate Calulator
			</p>
			<ExchangeRateCalculator />
		</div>
	);
};

export default ExchangeRateScreen;

import { ExchangeRateCalculator } from "../../../components/exchange/ExchangeRateCalculator";
import { useAuth } from "../../../hooks";
import { IoArrowUndo } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ExchangeRateScreen = () => {
	useAuth();
	const navigate = useNavigate();
	const handleOnBackPress = () => {
		navigate("/coin");
	};
	return (
		<div className="justify-center items-center space-y-5 bg-red-400 h-screen flex flex-col">
			<p className="text-white shadow-black text-shadow-sm font-display lg:text-2xl text-lg">
				Exchange Rate Calulator
			</p>
			<div
				onClick={handleOnBackPress}
				className="cursor-pointer group flex flex-row items-center space-x-5"
			>
				<IoArrowUndo className="fill-white group-hover:fill-royal h-auto w-8" />
				<p className="group-hover:text-royal font-display text-white text-lg shadow-black text-shadow-sm">
					Coin List
				</p>
			</div>
			<ExchangeRateCalculator />
		</div>
	);
};

export default ExchangeRateScreen;

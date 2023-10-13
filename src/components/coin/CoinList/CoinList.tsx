import { useGetCoinQuery } from "../../../services/endpoints/v3";
import { CoinTile } from "../CoinTile";
import Lottie from "lottie-react";
import BallAnimation from "../../../assets/animations/coinLoading.json";

const CoinList = () => {
	const { data, isLoading } = useGetCoinQuery();
	const RatesObj = data?.data?.rates;
	if (isLoading) {
		return (
			<div className="h-screen flex flex-col justify-center items-center">
				<Lottie
					className="h-auto w-48"
					animationData={BallAnimation}
					loop={true}
				/>
				;
			</div>
		);
	}
	return (
		<div className="space-y-8 h-screen py-8 items-center flex flex-col justify-start overflow-y-scroll rounded-lg">
			{
				// @ts-expect-error
				Object.keys(RatesObj).map((key, index) => {
					// @ts-expect-error
					const rate = RatesObj[key].rate;
					// @ts-expect-error
					const _key = RatesObj[key].key;
					return <CoinTile key={index} coin={key} rate={rate} _key={_key} />;
				})
			}
		</div>
	);
};

export default CoinList;

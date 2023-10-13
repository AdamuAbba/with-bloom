import { ICointTile } from "./types";

const CoinTile = ({ coin, rate, _key }: ICointTile) => {
	return (
		<div
			className="bg-white w-[90%] self-center text-sm font-display shadow-lg text-black p-5 rounded-lg"
			data-testid="coin-tile"
		>
			<p className="drop-shadow-lg text-black">
				<strong>Coin : </strong>
				{coin}
			</p>
			<p className="drop-shadow-lg text-black">
				<strong>Rate : </strong>
				{rate}
			</p>
			<p className="drop-shadow-lg text-black">
				<strong>key : </strong>
				{_key}
			</p>
		</div>
	);
};

export default CoinTile;

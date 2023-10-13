import ReactiveButton from "reactive-button";

const ExchangeRateCalculator = () => {
	const buttonState = "idle";

	return (
		<div className="bg-white lg:w-96 w-[90%] py-10 rounded-md drop-shadow-xl mt-8 space-y-7 justify-center items-center flex flex-col">
			<div className="w-[90%]">
				<input
					placeholder="coin"
					className="w-[67%] pl-2 rounded-l-md h-10 border-t border-b border-l border-black"
				/>
				<select className="border bg-royal text-white text-xs text-shadow-sm shadow-black h-10 w-[30%] rounded-r-md border-black">
					<option>BUSD</option>
				</select>
			</div>
			<div className="w-[90%]">
				<input
					placeholder="coin"
					className="w-[67%] pl-2 rounded-l-md h-10 border-t border-b border-l border-black"
				/>
				<select className="border bg-royal text-white text-xs text-shadow-sm shadow-black h-10 w-[30%] rounded-r-md border-black">
					<option>BUSD</option>
				</select>
			</div>
			<ReactiveButton
				style={{
					borderRadius: 18,
				}}
				buttonState={buttonState}
				idleText="Submit"
				loadingText="Loading"
				successText="Done"
				errorText="Error"
				type="submit"
				size="large"
				shadow
			/>
		</div>
	);
};

export default ExchangeRateCalculator;

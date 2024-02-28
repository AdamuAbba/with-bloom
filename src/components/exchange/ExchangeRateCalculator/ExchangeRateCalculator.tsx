import Lottie from "lottie-react";
import ReactiveButton from "reactive-button";
import { useGetCoinQuery } from "../../../services/endpoints/v3";
import BallAnimation from "../../../assets/animations/coinLoading.json";
import { MdSwapVert } from "react-icons/md";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { IButtonState } from "../../../utils/global/types";
import { FormInput } from "../../FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	ExchangeRateFormType,
	EXCHANGE_RATE_FORM_SCHEMA,
} from "../../../utils/schemas/exchange-rate";

const ExchangeRateCalculator = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<ExchangeRateFormType>({
		defaultValues: {
			amount: "",
		},
		resolver: zodResolver(EXCHANGE_RATE_FORM_SCHEMA),
	});

	const [buttonState, setButtonState] = useState<IButtonState>("idle");
	const { data, isLoading } = useGetCoinQuery();
	const [from, setFrom] = useState("BNBNGN");
	const [to, setTo] = useState("BNBNGN");
	const [finalConvertedValue, setFinalConvertedValue] = useState<string>("");
	const RatesObj = data?.data?.rates;

	const exchangeValueCalculator = (
		base: number,
		compare: number,
		amount: number
	): string => {
		setButtonState("loading");
		const finalValue = (Number(base) / Number(compare)) * amount;
		setButtonState("success");
		return finalValue.toFixed(4);
	};

	const getRate = (coin: string) => {
		// @ts-expect-error
		return RatesObj[coin].rate;
	};

	const handleOnClickConvert: SubmitHandler<ExchangeRateFormType> = (
		values
	) => {
		const answer = exchangeValueCalculator(
			getRate(from),
			getRate(to),
			Number(values.amount)
		);
		setFinalConvertedValue(answer);
	};

	const handleOnFromChange = () => {
		const fromCoin = document.querySelector("#fromCoin") as HTMLSelectElement;
		setFrom(fromCoin.value);
	};
	const handleOnToChange = () => {
		const toCoin = document.querySelector("#toCoin") as HTMLSelectElement;
		setTo(toCoin.value);
	};

	if (isLoading) {
		return (
			<div className="h-screen flex flex-col justify-center items-center">
				<Lottie
					className="h-auto w-48"
					animationData={BallAnimation}
					loop={true}
				/>
			</div>
		);
	}
	return (
		<div className="bg-white lg:w-96 w-[90%] py-10 rounded-md drop-shadow-xl space-y-2 justify-center items-center flex flex-col">
			<div className="flex-col flex w-[90%]">
				<h4 className="font-display font-semibold">
					<u>Rates</u>
				</h4>
				<div className="flex flex-row space-x-3 items-center">
					<p className="font-display">(1) = </p>
					<p className="text-royal font-display">{from}</p>
					<BsArrowRightShort className="fill-royal h-auto w-7" />
					<p>{getRate(from)}</p>
				</div>

				<div className="flex flex-row space-x-3 items-center">
					<p className="font-display">(1) = </p>
					<p className="text-royal font-display">{to}</p>
					<BsArrowRightShort className="fill-royal h-auto w-7" />
					<p>{getRate(to)}</p>
				</div>
			</div>
			<div className="flex flex-row justify-between w-[90%]">
				<div className="w-[48%]">
					<h4 className="font-display font-semibold">from</h4>
					<select
						onChange={handleOnFromChange}
						id="fromCoin"
						className="border font-display bg-royal text-white text-xs text-shadow-sm shadow-black h-10 rounded-md w-full border-black"
					>
						{
							// @ts-expect-error
							Object.keys(RatesObj).map((key, index) => {
								return (
									<option value={key} key={index}>
										{key}
									</option>
								);
							})
						}
					</select>
				</div>
				<div role="group" className="w-[48%]">
					<FormInput
						register={register}
						error={errors.amount ? true : false}
						label="Amount"
						name="amount"
						type="number"
					/>
					{errors.amount?.message && (
						<p className="text-xs italic text-red-500 mt-2">
							{errors.amount?.message}
						</p>
					)}
				</div>
			</div>
			<MdSwapVert className="fill-royal h-auto w-10" />
			<div className="w-[90%] justify-between flex flex-row items-center">
				<div className="w-[48%]">
					<p className="font-display font-semibold">to</p>
					<select
						onChange={handleOnToChange}
						id="toCoin"
						className="border bg-royal text-white text-xs font-display text-shadow-sm shadow-black h-10 w-full rounded-md border-black"
					>
						{
							// @ts-expect-error
							Object.keys(RatesObj).map((key, index) => {
								return (
									<option value={key} key={index}>
										{key}
									</option>
								);
							})
						}
					</select>
				</div>
				<div className="justify-center w-[48%] items-center  flex flex-col">
					<h3 className="font-display font-semibold">Value:</h3>
					<p>{finalConvertedValue}</p>
				</div>
			</div>
			<ReactiveButton
				style={{
					borderRadius: 18,
					marginTop: 4,
				}}
				buttonState={buttonState}
				onClick={handleSubmit(handleOnClickConvert)}
				idleText="Convert"
				loadingText="calculating..."
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

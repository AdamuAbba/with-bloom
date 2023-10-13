import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../../utils";
import {
	LoginFormType,
	LOGIN_SCHEMA,
} from "../../../utils/schemas/authentication";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactiveButton from "reactive-button";
import { FormInput } from "../../FormInput";
import { IButtonState } from "../../../utils/global/types";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
	const [buttonState, setButtonState] = useState<IButtonState>("idle");
	const navigate = useNavigate();

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<LoginFormType>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(LOGIN_SCHEMA),
	});

	const handleLogin = async ({ email, password }: LoginFormType) => {
		try {
			setButtonState("loading");
			const response = await signInWithEmailAndPassword(auth, email, password);
			const token = response.user.refreshToken;
			sessionStorage.setItem("auth_token", token);
			navigate("/coin");
			setButtonState("success");
			toast.success("Welcome back");
		} catch (error: any) {
			setButtonState("error");
			toast.error(error.message);
		}
	};

	const handleOnClickLogin: SubmitHandler<LoginFormType> = (values) => {
		handleLogin({ ...values });
	};

	return (
		<form
			role="form"
			className="space-y-8 font-display bg-white drop-shadow-2xl py-8 lg:w-80 rounded-lg justify-center items-center flex flex-col"
			onSubmit={handleSubmit(handleOnClickLogin)}
		>
			<div role="group" className="w-[90%]">
				<FormInput
					register={register}
					error={errors.email ? true : false}
					label="email"
					name="email"
					type="email"
				/>
				{errors.email?.message && (
					<p className="text-xs italic text-red-500 mt-2">
						{errors.email?.message}
					</p>
				)}
			</div>
			<div className="w-[90%]" role="group">
				<FormInput
					register={register}
					error={errors.password ? true : false}
					label="password"
					name="password"
					type="password"
				/>
				{errors.password?.message && (
					<p className="text-xs italic text-red-500 mt-2">
						{errors.password?.message}
					</p>
				)}
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
			/>
			<p className="text-xs">
				Don&apos;t have an account ?{" "}
				<Link className="text-royal" to="/signup">
					<strong>Sign Up</strong>
				</Link>
			</p>
		</form>
	);
};

export default LoginForm;

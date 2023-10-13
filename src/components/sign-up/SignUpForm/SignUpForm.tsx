import { zodResolver } from "@hookform/resolvers/zod";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ReactiveButton from "reactive-button";
import { auth, db } from "../../../utils";
import { IButtonState } from "../../../utils/global/types";
import {
	SignUpFormType,
	SIGNUP_SCHEMA,
} from "../../../utils/schemas/authentication";
import { FormInput } from "../../FormInput";

const SignUpForm = () => {
	const [buttonState, setButtonState] = useState<IButtonState>("idle");
	const navigate = useNavigate();

	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<SignUpFormType>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
		resolver: zodResolver(SIGNUP_SCHEMA),
	});

	const handleSignUp = async ({ email, password, ...rest }: SignUpFormType) => {
		try {
			setButtonState("loading");
			await createUserWithEmailAndPassword(auth, email, password);
			const loginResponse = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const token = loginResponse.user.refreshToken;
			sessionStorage.setItem("auth_token", token);
			const userDocRef = doc(db, "USERS", loginResponse.user.uid);
			await setDoc(userDocRef, {
				email,
				password,
				...rest,
			});
			toast.success("Account created");
			setButtonState("success");
			navigate("/coin");
		} catch (error: any) {
			toast.error(error.message);
			setButtonState("error");
		}
	};

	const handleOnClickSubmit: SubmitHandler<SignUpFormType> = (values) => {
		handleSignUp({ ...values });
	};

	return (
		<form
			className="space-y-3 font-display bg-white drop-shadow-2xl w-[90%] lg:w-auto rounded-lg justify-center items-center flex flex-col py-8"
			onSubmit={handleSubmit(handleOnClickSubmit)}
		>
			<div className="flex flex-row w-[95%]  justify-between">
				<div className="w-[48%]">
					<FormInput
						register={register}
						error={errors.firstName ? true : false}
						label="First Name"
						name="firstName"
						type="text"
					/>
					{errors.firstName?.message && (
						<p className="text-xs italic text-red-500 ">
							{errors.firstName?.message}
						</p>
					)}
				</div>
				<div className="w-[48%]">
					<FormInput
						register={register}
						error={errors.lastName ? true : false}
						label="lastName"
						name="lastName"
						type="lastName"
					/>
					{errors.lastName?.message && (
						<p className="text-xs italic text-red-500">
							{errors.lastName?.message}
						</p>
					)}
				</div>
			</div>

			<div className="flex flex-row w-[95%]  justify-between">
				<div className="w-[48%]">
					<FormInput
						register={register}
						error={errors.email ? true : false}
						label="email"
						name="email"
						type="email"
					/>
					{errors.email?.message && (
						<p className="text-xs italic text-red-500 ">
							{errors.email?.message}
						</p>
					)}
				</div>
				<div className="w-[48%]">
					<FormInput
						register={register}
						error={errors.password ? true : false}
						label="password"
						name="password"
						type="password"
					/>
					{errors.password?.message && (
						<p className="text-xs italic text-red-500 ">
							{errors.password?.message}
						</p>
					)}
				</div>
			</div>
			<div className="lg:w-auto w-[95%]">
				<FormInput
					register={register}
					error={errors.confirm_password ? true : false}
					label="Confirm Password"
					name="confirm_password"
					type="password"
				/>
				{errors.confirm_password?.message && (
					<p className="text-xs italic text-red-500 ">
						{errors.confirm_password?.message}
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
				Already have an account ?{" "}
				<Link className="text-blue-600" to="/">
					<strong>Login</strong>
				</Link>
			</p>
		</form>
	);
};

export default SignUpForm;

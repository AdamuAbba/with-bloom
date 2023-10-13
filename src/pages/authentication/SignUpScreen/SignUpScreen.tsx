import { SignUpForm } from "../../../components/sign-up";
import { useAuth } from "../../../hooks";

const SignUpScreen = () => {
	useAuth();
	return (
		<div className="bg-red-400 h-screen flex flex-col justify-center items-center">
			<h1 className="text-white mb-3 shadow-black text-shadow-sm text-xl font-display drop-shadow">
				<strong>Hi there, register below</strong>
			</h1>
			<SignUpForm />
		</div>
	);
};

export default SignUpScreen;

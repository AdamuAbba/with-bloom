import { LoginForm } from "../../../components/login";
import { useAuth } from "../../../hooks";

const LoginScreen = () => {
	useAuth();
	return (
		<div className="bg-red-400 h-screen flex flex-col justify-center items-center">
			<h1 className="text-white text-shadow-sm shadow-black mb-3 text-xl font-display drop-shadow">
				<strong>Welcome Back</strong>
			</h1>
			<LoginForm />
		</div>
	);
};

export default LoginScreen;

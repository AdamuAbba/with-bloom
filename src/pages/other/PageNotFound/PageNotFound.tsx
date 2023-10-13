import Error404Animation from "../../../assets/animations/404.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
	return (
		<div className="flex flex-col lg:flex-row justify-center items-center h-screen space-x-2 bg-red-400">
			<Lottie
				className="h-auto w-96"
				animationData={Error404Animation}
				loop={true}
			/>
			<p className="text-xl lg:text-2xl text-center lg:text-start text-shadow-sm text-white shadow-black font-bold font-display">
				Oops! a bit awkward
				<br />
				that page doesn&apos;t seem to exist <br /> let&apos;s get you back{" "}
				<Link to="/coin" className="text-royal underline font-extrabold">
					On Track
				</Link>
			</p>
		</div>
	);
};

export default PageNotFound;

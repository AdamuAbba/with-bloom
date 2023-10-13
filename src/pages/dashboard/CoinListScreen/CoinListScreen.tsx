import { CoinList } from "../../../components/coin";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../utils";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks";

const CoinListScreen = () => {
	useAuth();
	const navigate = useNavigate();
	const handleExit = () => {
		try {
			signOut(auth);
			sessionStorage.clear();
			navigate("/");
			toast.success("logout success");
		} catch (error: any) {
			toast.error(error.message);
		}
	};
	return (
		<div className="flex font-display flex-col justify-start lg:justify-center items-center h-screen bg-red-400">
			<div className="justify-center pt-10 items-center flex flex-col  lg:w-[40%] w-[90%]">
				<div className="flex flex-row w-full justify-between">
					<h4 className="hover:text-royal text-white mb-3 text-shadow-sm shadow-black">
						<Link to="/coin/exchange-rate">
							<strong>Coin Exchange</strong>
						</Link>
					</h4>
					<h4
						onClick={handleExit}
						className="hover:text-royal text-shadow-sm shadow-black text-white cursor-pointer drop-shadow-xl mb-3"
					>
						<strong>Sign Out</strong>
					</h4>
				</div>
				<h4 className="text-shadow-sm shadow-black text-white drop-shadow-xl mb-3">
					<strong>Available Coins</strong>
				</h4>
			</div>
			<CoinList />
		</div>
	);
};

export default CoinListScreen;

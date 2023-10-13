import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useAuth = () => {
	const navigate = useNavigate();
	const location = useLocation();
	return useEffect(() => {
		const authToken = sessionStorage.getItem("auth_token");
		if (authToken && location.pathname === "/coin") {
			navigate("/coin");
		}
		if (authToken && location.pathname === "/") {
			navigate("/coin");
		}
		if (authToken && location.pathname === "/signup") {
			navigate("/coin");
		}
		if (authToken && location.pathname === "/coin/exchange-rate") {
			navigate("/coin/exchange-rate");
		}
		if (!authToken && location.pathname !== "/coin") {
			navigate("/");
		}
		if (!authToken && location.pathname !== "/coin/exchange-rate") {
			navigate("/");
		}
		if (!authToken && location.pathname === "/signup") {
			navigate("/signup");
		}
		if (!authToken && location.pathname === "/") {
			navigate("/");
		}
	}, [navigate, location.pathname]);
};

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useAuth = () => {
	const navigate = useNavigate();
	const location = useLocation();
	return useEffect(() => {
		const authToken = sessionStorage.getItem("auth_token");
		if (authToken) {
			navigate("/coin");
		}
		if (!authToken && location.pathname !== "/signup") {
			navigate("/");
		}
		if (!authToken && location.pathname === "/signup") {
			return;
		}
	}, [navigate, location.pathname]);
};

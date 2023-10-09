import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginScreen, SignUpScreen } from "../../pages/authentication";
import { PageNotFound } from "../../pages/other";

const Root = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route path="/sign-up" element={<SignUpScreen />} />
					<Route path="/login" element={<LoginScreen />} />
					<Route path="*" element={<PageNotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Root;

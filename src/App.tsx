import { Provider } from "react-redux";
import { store } from "./store";
import { Root } from "./routes/Root";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<Provider store={store}>
			<Root />
			<ToastContainer />
		</Provider>
	);
};

export default App;

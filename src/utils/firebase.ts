import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAFr-_MYw7iP32jyxtODzIbRbddrMLyRwE",
	authDomain: "withbloom-ddbe3.firebaseapp.com",
	projectId: "withbloom-ddbe3",
	storageBucket: "withbloom-ddbe3.appspot.com",
	messagingSenderId: "32815598261",
	appId: "1:32815598261:web:c24e96fd55cbe9fee54cfc",
	measurementId: "G-B7S0QE4448",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { analytics, auth };

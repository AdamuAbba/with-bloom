import * as z from "zod";
import { EMAIL, GENERIC_STRING, PASSWORD } from "../shared";

const SIGNUP_SCHEMA = z
	.object({
		firstName: GENERIC_STRING,
		lastName: GENERIC_STRING,
		email: EMAIL,
		password: PASSWORD,
		confirm_password: PASSWORD,
	})
	.refine(({ password, confirm_password }) => password === confirm_password, {
		message: "password fields must match",
		path: ["confirm_password"],
	});

export { SIGNUP_SCHEMA };

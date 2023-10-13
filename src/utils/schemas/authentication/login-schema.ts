import * as z from "zod";
import { EMAIL, PASSWORD } from "../shared";

const LOGIN_SCHEMA = z.object({
	email: EMAIL,
	password: PASSWORD,
});

export { LOGIN_SCHEMA };

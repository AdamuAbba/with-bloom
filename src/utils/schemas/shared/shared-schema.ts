import * as z from "zod";

const GENERIC_STRING = z
	.string({ required_error: "field is required" })
	.refine((val) => val.trim());
const EMAIL = z
	.string({ required_error: "email is required" })
	.min(1)
	.email({ message: "invalid email" })
	.refine((val) => val.trim());
const PASSWORD = z
	.string({ required_error: "password is required" })
	.min(4, { message: "password is too short" })
	.refine((val) => val.trim());

export { EMAIL, PASSWORD, GENERIC_STRING };

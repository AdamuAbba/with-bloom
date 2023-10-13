import * as z from "zod";
import { LOGIN_SCHEMA } from "./login-schema";
import { SIGNUP_SCHEMA } from "./sign-up-schema";

type LoginFormType = z.infer<typeof LOGIN_SCHEMA>;
type SignUpFormType = z.infer<typeof SIGNUP_SCHEMA>;

export type { LoginFormType, SignUpFormType };

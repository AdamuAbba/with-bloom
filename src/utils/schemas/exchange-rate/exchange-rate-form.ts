import * as z from "zod";

const EXCHANGE_RATE_FORM_SCHEMA = z.object({
	amount: z
		.string({ required_error: "amount cannot be empty" })
		.min(1, { message: "please enter a number" }),
});

export { EXCHANGE_RATE_FORM_SCHEMA };

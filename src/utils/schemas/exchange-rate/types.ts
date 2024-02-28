import * as z from "zod";
import { EXCHANGE_RATE_FORM_SCHEMA } from "./exchange-rate-form";

type ExchangeRateFormType = z.infer<typeof EXCHANGE_RATE_FORM_SCHEMA>;

export type { ExchangeRateFormType };

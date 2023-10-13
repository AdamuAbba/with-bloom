import { InputHTMLAttributes } from "react";

interface props extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	register: any;
	error: boolean;
}

type IFormInputProps = Partial<props>;

// type IFormInput = {
//   lable : string;
//   name : string;
// }

export type { IFormInputProps };

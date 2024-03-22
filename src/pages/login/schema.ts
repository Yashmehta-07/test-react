import * as yup from "yup";
import { emailRegex } from "../../utils/constant";

export interface ILogin {
    email: string;
    password: string;
  }

const emailValidator = yup.string()
  .email()
  .required("Please enter your email")
  .matches(emailRegex, "Please enter valid email");

export const LoginSchema = yup.object({
  email: emailValidator,
  password: yup.string().required('Please enter your password'),
});

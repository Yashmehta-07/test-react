import * as yup from "yup";
import { emailRegex, passwordRegex } from "../../utils/constant";

export const ForgotPasswordSchema = (createPasswordSteps: string) =>
  yup.object({
    email: yup.string().when([], {
      is: () => createPasswordSteps === "email",
      then: (schema) =>
        schema
          .email()
          .required("Please enter your email")
          .matches(emailRegex, "Please enter valid email"),
      otherwise: (schema) => schema.notRequired(),
    }),
    newPassword: yup.string().when([], {
      is: () => createPasswordSteps === "new-password",
      then: (schema) =>
        schema
          .min(8, "Password must be at least 8 characters long")
          .matches(
            passwordRegex,
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
          )
          .required("Password is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

export const InitialvalueForgotPassword = {
  email: "",
  newPassword: "",
};

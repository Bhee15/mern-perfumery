import * as yup from "yup";

export const signUpSchema = yup
  .object({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    email: yup
      .string()
      .required("email is required")
      .email("invalid email format"),
    password: yup
      .string()
      .required("password is required")
      .min(8, "min length of password should be at least 8 chrs"),
    confirmPassword: yup
      .string()
      .required("confirm password is required")
      .min(8, "min length of password should be at least 8 chrs")
      .oneOf([yup.ref("password")], "password do not match"),
  })
  .required();
  
export const signInSchema = yup
  .object({
    email: yup
      .string()
      .required("email is required")
      .email("invalid email format"),
    password: yup
      .string()
      .required("password is required")
      .min(8, "min length of password should be at least 8 chrs"),
  })
  .required();

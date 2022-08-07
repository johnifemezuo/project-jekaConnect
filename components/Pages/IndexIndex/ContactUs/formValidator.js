import * as yup from "yup";


export const formValidatorSchema = yup
  .object({
    emailId: yup.string().email().required(),
  })
  .required();
import * as yup from "yup";


export const formValidatorSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
    phone: yup.string().required(),
  })
  .required();
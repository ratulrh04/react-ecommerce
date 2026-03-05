import * as yup from 'yup';

export const singUpSchema = yup.object({
   name : yup.string().min(2).max(25).required('Please Enter Your Name'),
   email: yup.string().email().required("Please Enter Your Email"),
   password: yup.string().min(6).required("Please Enter Your Password"),
   confirm_password: yup.string().required().oneOf([yup.ref('password'),null],'password must match')
 })
import * as Yup from "yup";

export const signupSchema=Yup.object({
    name: Yup.string()
        .required("Please enter your name !!")
        .min(2)
        .max(25),
    email: Yup.string()
        .required("Please enter your email !!")
        .matches("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}","Please Enter a valid email !!"),
    password: Yup.string()
        .required("Please enter password!!")
        .min(8)
        .max(15)
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,"Password must have at least one uppercase letter, one lowercase letter, and one number !!")
});
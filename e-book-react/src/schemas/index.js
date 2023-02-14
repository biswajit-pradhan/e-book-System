import * as Yup from "yup";

export const addBookSchema=Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name!!").matches("^[a-zA-Z\\s]*$"),
    price: Yup.string().max(8).required("Please enter price!!"),
    version: Yup.string().max(8).required("Please enter version!!"),
    authorName: Yup.string().min(2).max(25).required("Please enter author name!!").matches("^[a-zA-Z\\s]*$")
});
import * as Yup from "yup";

export const publisherSchema=Yup.object({
    publisherName: Yup.string()
        .required("Please enter publisher name!").min(2),

    BookTitle: Yup.string()
        .required("Please enter valid book title").min(2),
        
    
    BookAuthorName: Yup.string()
        .required("Please enter book author name").min(2),

    BookLanguage: Yup.string()
        .required("Please enter book language"),

    PublishYear: Yup.string()
        .required("Please enter publisher year")
        .matches("^[12][0-9]{3}$","Please enter publisher year"),

    BookPrice: Yup.string()
        .required("Please enter Book Price")
        .matches("^[0-9]","Please enter Book Price"),

    UploadBook: Yup.string()
        .required("Please select pdf folder")
        .matches("[.][0-9A-Za-z]+[.][Pp][Dd][Ff]","Please select pdf folder")
              
    
});
import { useFormik } from "formik";
import Navbar from "../Navbar";
import { publisherSchema } from "./schema";
import "./style.css";

const Publisher = () => {
  const initialValues = {
    "publisherName": "",
    "BookTitle": "",
    "BookAuthorName": "",
    "BookLanguage": "",
    "PublishYear": "",
    "BookCategory": "",
    "BookPrice": "",
    "UploadBook": ""
  }
  const { values, touched, errors, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: publisherSchema,
    onSubmit: (value, action) => {
      console.log(values);
      alert("Book Added Successfully");
      action.resetForm();
    }
  })

  const handlePublisher = (event) => {
    handleChange(event);
  }


  return (
    <div>
      <Navbar />
      <div id="publisher">
        <h3 className="text-center text-white pt-5">Publish Book</h3>
        <div className="container">
          <div id="publisher-row" className="row justify-content-center align-items-center">
            <div id="publisher-column" className="col-md-6">
              <div id="publisher-box" className="col-md-12">

                <form id="publisher-form" className="form" action="" method="post">
                  <h3 className="text-center text-info">Publish Book</h3>

                  <div className="form-group">
                    <label htmlFor="publisherName" className="text-info">Publisher Name</label><br />
                    <input type="text" name="publisherName" id="publisherName" className="form-control"
                      value={values.publisherName}
                      onChange={handlePublisher}
                      onBlur={handleBlur} />
                    {errors.publisherName && touched.publisherName ? (<p className="form-error" style={{ color: "red" }}>
                      {errors.publisherName}</p>) :
                      null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="BookTitle" className="text-info">Book Title :</label><br />
                    <input type="text" name="BookTitle" id="BookTitle" className="form-control"
                      value={values.BookTitle}
                      onChange={handlePublisher}
                      onBlur={handleBlur} />
                    {errors.BookTitle && touched.BookTitle ? (<p className="form-error" style={{ color: "red" }}>
                      {errors.BookTitle}</p>) :
                      null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="BookAuthorName" className="text-info">Book Author Name :</label><br />
                    <input type="text" name="BookAuthorName" id="BookAuthorName" className="form-control"
                      value={values.BookAuthorName}
                      onChange={handlePublisher}
                      onBlur={handleBlur} />
                    {errors.BookAuthorName && touched.BookAuthorName ? (<p className="form-error" style={{ color: "red" }}>
                      {errors.BookAuthorName}</p>) :
                      null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="BookLanguage" className="text-info">Book Language :</label><br />
                    <input type="text" name="BookLanguage" id="BookLanguage" className="form-control" 
                     value={values.BookLanguage}
                     onChange={handlePublisher}
                     onBlur={handleBlur} />
                     {errors.BookLanguage && touched.BookLanguage ? (<p className="form-error" style={{ color: "red" }}>
                      {errors.BookLanguage}</p>) :
                      null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="PublishYear" className="text-info">Publish Year:</label><br />
                    <input type="text" name="PublishYear" id="PublishYear" className="form-control" 
                    value={values.PublishYear}
                    onChange={handlePublisher}
                    onBlur={handleBlur} />
                    {errors.PublishYear && touched.PublishYear ? (<p className="form-error" style={{ color: "red" }}>
                      {errors.PublishYear}</p>) :
                      null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="BookCategory" className="text-info">Book Category :</label><br />
                    <select className="form-control">
                      <option>FICTION</option>
                      <option>NONFICTION</option>
                      <option>TECHNOLOGY</option>
                      <option>SCIENCE</option>
                      <option>HISTORY</option>
                      <option>BUSINESS</option>
                    </select>
                    {errors.userType && touched.userType  ? (<p className="form-error" style={{ color: "red" }}>
                                            {errors.userType}</p>) :
                                            null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="BookPrice" className="text-info">Book Price :</label><br />
                    <input type="text" name="BookPrice" id="BookPrice" className="form-control" 
                    value={values.BookPrice}
                    onChange={handlePublisher}
                    onBlur={handleBlur} />
                    {errors.BookPrice && touched.BookPrice ? (<p className="form-error" style={{ color: "red" }}>
                      {errors.BookPrice}</p>) :
                      null}
                  </div>

                  <div className="form-group">
                    <label htmlFor="UploadBook" className="text-info">Upload Book :</label><br />
                    <input type="text" name="UploadBook" id="UploadBook" className="form-control" 
                    value={values.UploadBook}
                    onChange={handlePublisher}
                    onBlur={handleBlur} />
                    {errors.UploadBook && touched.UploadBook ? (<p className="form-error" style={{ color: "red" }}>
                      {errors.UploadBook}</p>) :
                      null}
                  </div>
                  <div className="form-group">
                    <br />
                    <button type="submit" name="submit" className="btn btn-info btn-md" onClick={handleSubmit} value="Submit">Submit</button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publisher;
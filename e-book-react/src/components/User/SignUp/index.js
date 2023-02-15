import { useFormik } from "formik";
import "./style.css";
import Navbar from "../../Navbar";
import { signupSchema } from "./schema";

const SignUp=()=>{

    const initialValues={
        "name": "",
        "email":"",
        "userType":"",
        "password":""
    }

    const {values,touched,errors,handleBlur,handleSubmit,handleChange}=useFormik({
        initialValues:initialValues,
        validationSchema:signupSchema,
        onSubmit:(value,action)=>{
            console.log(values);
            alert("Book Added Successfully");
            action.resetForm();
        }
    })
    const handleSignup=(event)=>{
        handleChange(event)
    }


        return (
            <div>
                <Navbar/>
            <div id="signup">
                <div className="container">
                    <div id="signup-row" className="row justify-content-center align-items-center">
                        <div id="signup-column" className="col-md-6">
                            <div id="signup-box" className="col-md-12">
                                <form id="signup-form" className="form" action="" method="post">
                                    <h3 className="text-center text-info">Sign Up</h3>
                                    <div className="form-group">
                                        <label htmlFor="name" className="text-info">Name:</label><br />
                                        <input type="text" 
                                            name="name"
                                            id="name"
                                            className="form-control"
                                            value={values.name}
                                            onChange={handleSignup}
                                            onBlur={handleBlur} />
                                            {errors.name && touched.name ? (<p className="form-error" style={{ color: "red" }}>
                                            {errors.name}</p>) :
                                            null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">Email:</label><br />
                                        <input type="text" 
                                            name="email" 
                                            id="email" 
                                            className="form-control" 
                                            value={values.email}
                                            onChange={handleSignup}
                                            onBlur={handleBlur}/>
                                            {errors.email && touched.email ? (<p className="form-error" style={{ color: "red" }}>
                                            {errors.email}</p>) :
                                            null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="userType" className="text-info">Select User Type:</label><br />
                                        <select className="form-control">
                                            <option value="reader">READER</option>
                                            <option value="publisher">PUBLISHER</option>
                                            <option value="author">AUTHOR</option>
                                        </select>
                                        {errors.userType && touched.userType  ? (<p className="form-error" style={{ color: "red" }}>
                                            {errors.userType}</p>) :
                                            null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">Password:</label><br />
                                        <input type="password" 
                                        name="password" 
                                        id="password" 
                                        className="form-control" 
                                        value={values.password}
                                        onChange={handleSignup}
                                        onBlur={handleBlur}/>
                                        {errors.password && touched.password ? (<p className="form-error" style={{ color: "red" }}>
                                            {errors.password}</p>) :
                                            null}
                                    </div>
                                    <div className="form-group">
                                        <br/>
                                        <button type="submit" name="submit" className="btn btn-info btn-md" onClick={handleSubmit}>Sign Up</button>
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
export default SignUp;

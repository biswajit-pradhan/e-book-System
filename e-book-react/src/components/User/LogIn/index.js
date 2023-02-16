// import { useFormik } from "formik";
// import { loginSchema } from "./schema";
// import "./style.css";
// import Navbar from "../../Navbar";


// const LogIn=()=>{


//     const initialValues={
//         "username": "",
//         "password":""
//     }

//     const {values,touched,errors,handleBlur,handleSubmit,handleChange}=useFormik({
//         initialValues:initialValues,
//         validationSchema:loginSchema,
//         onSubmit:(value,action)=>{
//             console.log(values);
//             alert("Book Added Successfully");
//             action.resetForm();
//         }
//     })

//     const handleLogin=(event)=>{
//         handleChange(event);
//     }

//     return (
//         <div>
//             <Navbar/>
//         <div id="login">
//             <div className="container">
//                 <div id="login-row" className="row justify-content-center align-items-center">
//                     <div id="login-column" className="col-md-6">
//                         <div id="login-box" className="col-md-12">
//                             <form id="login-form" className="form" action="" method="post">
//                                 <h3 className="text-center text-info">Sign In</h3>
//                                 <div className="form-group">
//                                     <label htmlFor="username" className="text-info">Email:</label><br />
//                                     <input type="text"
//                                         name="username"
//                                         id="username"
//                                         className="form-control"
//                                         value={values.username}
//                                         onChange={handleLogin}
//                                         onBlur={handleBlur} />
//                                         {errors.username && touched.username ? (<p className="form-error" style={{ color: "red" }}>
//                                             {errors.username}</p>) :
//                                             null}
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="password" className="text-info">Password:</label><br />
//                                     <input type="password" 
//                                     name="password" 
//                                     id="password" 
//                                     className="form-control" 
//                                     value={values.password}
//                                     onChange={handleChange} 
//                                     onBlur={handleBlur}/>
//                                     {errors.password && touched.password ? (<p className="form-error" style={{ color: "red" }}>
//                                             {errors.password}</p>) :
//                                             null}
//                                 </div>
//                                 <div className="form-group">
//                                     <br />
//                                     <button type="submit" name="submit" className="btn btn-info btn-md" onClick={handleSubmit}>Submit</button>
//                                     <span>&nbsp;&nbsp;<a href="/signup" className="text-info">Register Here</a></span>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//     )
// }
// export default LogIn;
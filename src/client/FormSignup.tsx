import React from 'react';
import { ImportsNotUsedAsValues } from 'typescript';
// import useForm from './useForm'
// import validate from './validateInfo'

const FormSignup = ({submitForm}) => {
    // const{ handleChange, values, handleSubmit,errors } 
    // = useForm(submitForm, validate);

return (
            // <>
        //     <div className="form-content-right">
        //         <form className="form" onSubmit={handleSubmit}>
        //             <h1>Sign-Up & Start Saving!</h1>
        //             <div className="form-inputs">
        //                 <label htmlFor="username" className="form-label">
        //                 Username: 
        //                 </label>
        //                     <input  
        //                             id="username"
        //                             type="text" 
        //                             name ="username" 
        //                             className="form-input" 
        //                             placeholder="Enter your username"
        //                             value={values.username}
        //                             onChange={handleChange}
        //                      />
        //                 {/* {errors.username && <p>{errors.username}</p>} */}
        //             </div>
        //             <div className="form-inputs">
        //                 <label htmlFor="email" className="form-label">
        //                 Email:
        //                 </label>
        //                     <input
        //                             id="email"
        //                             type="email" 
        //                             name ="email" 
        //                             className="form-input" 
        //                             placeholder="Enter your email"
        //                             value={values.email}
        //                             onChange={handleChange}
        //                     />
        //                 {/* {errors.email && <p>{errors.email}</p>} */}
        //             </div>
        //             <div className="form-inputs">
        //                 <label htmlFor="password" className="form-label">
        //                 Password:
        //                 </label>
        //                     <input
        //                             id="password"
        //                             type="password" 
        //                             name ="password" 
        //                             className="form-input" 
        //                             placeholder="Enter your password"
        //                             value={values.password}
        //                             onChange={handleChange}
        //                     />
        //                 {/* {errors.password && <p>{errors.password}</p>} */}
        //             </div>
        //             <div className="form-inputs">
        //                 <label htmlFor="password2" className="form-label">
        //                 Confirm Password:
        //                 </label>
        //                     <input
        //                             id="password2"
        //                             type="password" 
        //                             name ="password2" 
        //                             className="form-input" 
        //                             placeholder="Confirm your password"
        //                             onChange={handleChange}
        //                     />
        //                 {/* {errors.password2 && <p>{errors.password2}</p>} */}
        //             </div>

        //             <button className="form-input-btn" type="submit">Sign-Up</button> 
        //             <span className="form-input-login">
        //                 Already have an account? Login <a href="#">here</a>
        //             </span>
        //         </form>

        //     </div>

        // </>

<form>
  <div className="form-group mb-3">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
  </div>
  <div className="form-group mb-3">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div className="form-check mb-3">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  <span className="form-input-login"> Don't have an account? Register <a href="#">here</a> </span>
</form>
    );
};


export default FormSignup;
import React, {useState} from "react";
import '../../assets/css/SignUp.css'
import signup from '../../assets/images/SignUp image.jpg'
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
const SignUp = () =>{


      const navigate = useNavigate() ;

    const[signUpFormData,setSignUpFormData]=React.useState({
       name:"",
       email:"",
       password:"",
       role:""

    })

    const [selectedValue, setSelectedValue] = useState('');

    // Function to handle the change event of the dropdown
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    
    const handleSignUpFormChange=(e)=>{
        const [name,value]=[e.target.name,e.target.value];
        setSignUpFormData({
            ...signUpFormData,
            [name]: value
        })
    }


    const submitSignUpForm = (e) => 
    {
       e.preventDefault();
        console.log(signUpFormData);
      
       alert("Register Successfully") ;
       navigate("/login") ;
    }

      return(
            <form onSubmit={submitSignUpForm}>
                  <div className="main">
                        <div>
                             <img src={signup} alt="" /> 
                        </div>
                        <div className="container-sign">
                              <h1 className="text-warning"><strong>SIGN</strong> UP</h1>
                              <input type="text" placeholder="NAME" name="name" onChange={handleSignUpFormChange} required></input>
                              <input type="email" placeholder="EMAIL ID" name="email" onChange={handleSignUpFormChange} required ></input>
                              <input type="password" placeholder="PASSWORD" name="password" onChange={handleSignUpFormChange} required></input>
                              <label  htmlFor="cars">Select a Role :</label>
                              <select id="category" name="jobs" required value={selectedValue} onChange={handleChange}>
                                <option value="select">Role:</option>
                                <option value="user">Applicant</option>
                                <option value="admin">Admin</option>
                              </select>
                              
                              <Link to="/login" className="btn btn-primary w-25">SignUp</Link>
                              <p>Already have an account? <Link to='/login' className="signin-btn btn btn-secondary">Login</Link></p>
                        </div>    
                  </div>

            </form>
      )
}

export default SignUp;
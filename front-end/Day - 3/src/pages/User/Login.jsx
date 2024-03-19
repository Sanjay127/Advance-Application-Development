import React, { useState } from 'react'
import loginimg from '../../assets/images/login image.jpg'
import '../../assets/css/Login.css'
import { Link, useNavigate} from 'react-router-dom'



const Login = () => {
  const navigate = useNavigate();
 

  const[loginFormData,setLoginFormData]=React.useState({
      email:"",
      password:""
  })
  const [selectedValue, setSelectedValue] = useState('');

    // Function to handle the change event of the dropdown
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  const handleLoginFormChange=(e)=>{
      const [name,value]=[e.target.name,e.target.value];
      setLoginFormData({
          ...loginFormData,
          [name]: value
      })
  }
  
  const submitLoginForm = async (e) => {
      e.preventDefault();
      if(!loginFormData.email || !loginFormData.password){
          console.log("Please enter details");
      }
      
  }

      if(loginFormData.email ==="admin"||loginFormData.password ==="admin"){

          navigate('/adminsidebar');
      
      }
    
    
  return (
    <div>
       <div className="login-page" onSubmit={(e) => submitLoginForm(e)}>
            <img src={loginimg} alt="" />
            <form>
                  <div className="login-con">
                        <label className="heading">LOGIN</label>
                        <input type="email" name ="email"
                        value={loginFormData.email}
                        onChange={handleLoginFormChange} placeholder='EMAIL' required />
                        <input type="password" name ="password" 
                        value={loginFormData.password}
                        onChange={handleLoginFormChange} placeholder='PASSWORD' required/>
                        <label  className="" htmlFor="cars">Select a Role :</label>
                              <select id="category" name="jobs" required value={selectedValue} onChange={handleChange}>
                                <option value="select">Role:</option>
                                <option value="user">Applicant</option>
                                <option value="admin">Admin</option>
                              </select>
                        <Link to="/home" className="btn btn-warning w-25">Login</Link>
                        <label className="sign-btn">Does not has an account? <Link to='/signup' className="btn btn-secondary">SignUp</Link></label>
                  </div>
            </form>
      </div>

    </div>
  )
}

export default Login
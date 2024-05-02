import { useState } from "react";
import '../../assets/css/SignUp.css';
import signup from '../../assets/images/SignUp image.jpg';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const SignUp = () => {

  const navigate = useNavigate();
  
  const [signUpFormData, setSignUpFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });
  
  const [selectedValue, setSelectedValue] = useState('');
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
  const handleSignUpFormChange = (e) => {
    const { name, value } = e.target;
    setSignUpFormData({
      ...signUpFormData,
      [name]: value
    });
  };
  
  
  const submitSignUpForm = async (e) => {
    e.preventDefault();
  
    if (!signUpFormData.name || !signUpFormData.email || !signUpFormData.password || !selectedValue) {
      alert("Please enter all details");
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(signUpFormData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8181/api/v1/auth/register", {
        name: signUpFormData.name,
        email: signUpFormData.email,
        password: signUpFormData.password,
        role: selectedValue,
      });

      console.log("Selected value:", selectedValue);

      if (selectedValue === "Admin") {     
        console.log("API response:", response.data);
        alert("Admin registered successfully");
      } else if (selectedValue === "User") {
        console.log("API response:", response.data);
        alert("User registered successfully");
      } else {
        alert("Registered Successfully");
      }
      
      navigate("/login");
    } catch (error) {
      console.error("Error registering:", error);
    }
  };
  
  return (
    <form onSubmit={submitSignUpForm}>
      <div className="main">
        <div>
          <img src={signup} alt="" />
        </div>
        <div className="container-sign">
          <h1 className="text-warning"><strong>SIGN</strong> UP</h1>
          <input type="text" placeholder="NAME" name="name" onChange={handleSignUpFormChange} required />
          <input type="email" placeholder="EMAIL ID" name="email" onChange={handleSignUpFormChange} required />
          <input type="password" placeholder="PASSWORD" name="password" onChange={handleSignUpFormChange} required />
          <label htmlFor="cars">Select a Role :</label>
          <select id="category" name="role" required value={selectedValue} onChange={handleChange}>
            <option value="">Role:</option>
            <option value="User">USER</option>
            <option value="Admin">Admin</option>
          </select>
          <button type="submit" className="btn btn-primary w-25">SignUp</button>
          <p>Already have an account? <Link to='/login' className="signin-btn btn btn-secondary">Login</Link></p>
        </div>
      </div>
    </form>
  );
}

export default SignUp;

import React from 'react';
import "../../assets/css/ApplicantApplications.css";
import jobposting from "../../assets/images/jobposting.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from 'axios'; 

const FreeApplications = () => {

  const [registerData, setRegisterData] = React.useState({
    applicationname: "",
    contactnumber: "",
    email: "",
    jobtitle: "",
    role: ""
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value
    });
  };

  const handleApply = async () => {
    try {
      await axios.post('/api/freeapplications/createfreeapplications', registerData);
      alert("Successfully Submitted Application.");
    } catch (error) {
      console.error('Error submitting application:', error);
      alert("Failed to Submit Application. Please try again later.");
    }
  };
 
  return (
    <div>
    <div className="job-container">
      <img className="img1" src={jobposting} alt="" />
  
      <div className="job-form-container">
          <div className="job-form-header">Apply for job</div>
          <form className="form-post">
          <div className="input-group">
              <label className="sr-only" htmlFor="Application Name">Application Name</label>
              <input type="text" placeholder="APPLICATION NAME" className="input" name='applicationname' onChange={handleOnChange} required/>
          </div>
          <div className="input-group">
              <label className="sr-only" htmlFor="Contact Number">Contact Number</label>
              <input type="number" placeholder="CONTACT NUMBER" className="input" name='contactnumber' onChange={handleOnChange} required/>
          </div>
          <div className="input-group">
              <label className="sr-only" htmlFor="Email">Email</label>
              <input type="email" placeholder="EMAIL" className="input" name='EMAIL' onChange={handleOnChange} required/>
          </div>
          <select name="jobtitle">
            <option value="software" hidden>Job Title</option>
            <option value="software">Software Engineer</option>
            <option value="manager">Manager</option>
            <option value="bi-analyst">BI Analyst</option>
            <option value="data">Data Scientist</option>
          </select>
         
          <select name="role">
          <option value="software" hidden>Role</option>
            <option value="free">Free User</option>
            <option value="premium">Premium User</option>
          </select>
          <div className="d-flex flex-row">
            <button type="button" className="mt-3 btn btn-primary" onClick={handleApply}>
              Submit
            </button>
            <Link to="/jobcategory" className="mt-3 btn btn-cancel">Cancel</Link>
          </div>

         
    </form>
  </div>
      
  </div>
</div>

  );
};

export default FreeApplications;
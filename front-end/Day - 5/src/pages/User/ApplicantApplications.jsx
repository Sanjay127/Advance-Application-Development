import "../../assets/css/ApplicantApplications.css";
import jobposting from "../../assets/images/jobposting.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
const ApplicantApplications = () => {

  return (
    <div>
    <div className="job-container">
      <img className="img1" src={jobposting} alt="" />
  
      <div className="job-form-container">
          <div className="job-form-header">Apply for job</div>
          <form className="form-post">
          <div className="input-group">
              <label className="sr-only" htmlFor="Application Name">Application Name</label>
              <input
              id="Application Name"
              type="text"
              autoComplete="Application Name"
              required
              placeholder="Application Name"
              />
          </div>
          <div className="input-group">
              <label className="sr-only" htmlFor="Contact Number">Contact Number</label>
              <input
              id="Contact Numbe"
              type="Contact Number"
              autoComplete="Contact Number"
              required
              placeholder="Contact Number"
              />
          </div>
          <div className="input-group">
              <label className="sr-only" htmlFor="Email">Email</label>
              <input
              id="Emai"
              type="Emai"
              autoComplete="Email"
              required
              placeholder="Email"
              />
          </div>
          <div className="input-group">
              <label className="sr-only" htmlFor="Amount">Amount</label>
              <input
              id="Amount"
              type="Amount"
              autoComplete="Amount"
              required
              placeholder="Amount"
              />
          </div>
          {/* <label htmlFor="job">Job Title:</label> */}
          <select name="job" id="job">
            <option value="software" hidden>Job Title</option>
            <option value="software">Software Engineer</option>
            <option value="manager">Manager</option>
            <option value="bi-analyst">BI Analyst</option>
            <option value="data">Data Scientist</option>
          </select>

          <div className="d-flex flex-row">
            <Link to="/jobcategory" className="btn btn-warning">Submit</Link>
            <button className="btn-cancel">Cancel</button>
            
          </div>
          </form>
      </div>
  </div>
</div>

  );
};

export default ApplicantApplications;
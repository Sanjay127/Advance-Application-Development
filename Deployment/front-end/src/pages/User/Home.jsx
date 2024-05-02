import "../../assets/css/Home.css";
import job1 from "../../assets/images/Job.jpg"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
  return (
    <div>
      <div className="bg-container">
        <nav>
          <div className="nav__logo"><Link to="#">Job Finder</Link></div>
          <ul className="nav__links">
            <li className="link"><Link to="/#">Home</Link></li>
            <li className="link"><Link to="/jobcategory">Job Listing</Link></li>
            <li className="link"><Link to="/login" className="nav__btn">Login</Link></li>
            <li className="link"><Link to="/signup" className="nav__btn">SignUp</Link></li>
          </ul>
        </nav>
        <section className="container">
          <div className="content__container">
            <h1>     
              <span className="heading__1">Best Job Seeker Platform</span><br />
              <span className="heading__2">in The World</span>
            </h1>
            <p>
            Unleash your full career potential with our innovative online job application platform. 
            Seamlessly merging technology and professional development, we offer a dynamic 
            job-seeking experience that integrates interactive job listings, virtual interviews, and personalized feedback.
            </p>
            <div className="apply-btn">
              <Link to="/jobcategory"><button className="btn btn-primary">Apply a Job</button></Link>
            </div>
          </div>
          <div className="image__container">
            <img src={job1} alt="header" />
          </div>
        </section>
        </div>
        <footer className="footer bg-secondary w-130">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Useful Links</h3>
            <ul>
              <li><Link to="#">About Us</Link></li>
              <li><Link to="#">Applicants Application</Link></li>
              <li><Link to="#">Companies</Link></li>
              <li><Link to="#">Applicant</Link></li>
              <li><Link to="/jobcategory">Job Category</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Service Plus</h3>
            <ul>
              <li><Link to="/jobcategory">Offering Job</Link></li>
              <li><Link to="#">Posting a Job</Link></li>
              <li><Link to="#">Application</Link></li>
          
            </ul>
          </div>
          <div className="footer-section">
            <h3>Main Links</h3>
            <ul>
              <li><Link to="/blog1">Job Category</Link></li>
              <li><Link to="/jobcategory">Job Applying</Link></li>
              <li><Link to="/payment">Payment</Link></li>
              <li><Link to="/jobcategory">Premium Category</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Job Finder. All Rights Reserved.</p>
        </div>
      </footer>
      </div>

  

  );
}

export default Home;
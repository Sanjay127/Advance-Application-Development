import "../../assets/css/Home.css";
import job1 from "../../assets/images/Job.jpg"
import { Link } from "react-router-dom";
import Footer from "./Footer"

const Home = () => {
  return (
    <div>
    <div className="bg-container">
      <nav>
        <div className="nav__logo"><Link to="#">Job Finder</Link></div>
        <ul className="nav__links">
          <li className="link"><Link to="/#">Home</Link></li>
          <li className="link"><Link to="/jobcategory">Job Listing</Link></li>
          <li className="link"><Link to="/company">Companies</Link></li>
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
      <Footer></Footer>
  </div>

  );
}

export default Home;
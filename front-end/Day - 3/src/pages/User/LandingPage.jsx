import "../../assets/css/LandingPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import video from "../../assets/videos/production_id_3945141 (2160p).mp4"
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
        <div className="background-video-container">
            <video autoPlay loop muted className="background-video">
                <source src={video} type="video/mp4" />
            </video>
            <div className="landing-container text-center d-flex flex-column justify-content-center">
                <h1 className="welcome-h1">Welcome to Job Application Portal</h1>
                <p className="welcome-p">Streamline your job search with our intuitive online portal, connecting you to the perfect opportunities effortlessly.</p>
                <div className="text-center">
                    <Link to="/home"><button className="mt-3 btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;

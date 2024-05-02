
import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../../assets/css/Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  return (
    <footer className="bg-footer bg-secondary">
      <div className="footer-col">
        <h4>Job Finder</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Job Listing</a></li>
          <li><a href="#">Applications</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>network</h4>
        <div className="icon-footer">
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

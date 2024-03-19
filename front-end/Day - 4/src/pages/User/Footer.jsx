import { FaLinkedinIn, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import "../../assets/css/Footer.css"

const Footer = () => {
  return (
    <footer className="bg-footer">
      <div className="footer-col">
        <h4>products</h4>
        <ul>
          <li><a href="#">teams</a></li>
          <li><a href="#">advertising</a></li>
          <li><a href="#">talent</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>network</h4>
        <ul>
          <li><a href="#">technology</a></li>
          <li><a href="#">science</a></li>
          <li><a href="#">business</a></li>
          <li><a href="#">professional</a></li>
          <li><a href="#">API</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>company</h4>
        <ul>
          <li><a href="#">about</a></li>
          <li><a href="#">legal</a></li>
          <li><a href="#">contact us</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow us</h4>
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

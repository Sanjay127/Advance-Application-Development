import "../../assets/css/Navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar= () => {
  return (
    <>
     <nav>
      <div className="nav__logo"><span>Job</span>Finder</div>
      <ul className="nav__links">
        <a href="#"><li className="link">Home</li></a>
        <a href="#guides"><li className="link">Job Listing</li></a>
        <a href="#plans"><li className="link">Aboutus</li></a>
        <a href="#about"><li className="link">Companies</li></a>
        <a href="#review"><li className="link">Reviews</li></a>
        <a href="#contact"><li className="link btn">Login</li></a>
        <a href="#contact"><li className="link btn">SignUp</li></a>
      </ul>
    </nav>
    </>
  
      
    
  );
}

export default Navbar;

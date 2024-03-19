import '../../../assets/css/AdminSidebar.css';
import adminlogo from "../../../assets/images/admin-logo.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const AdminSidebar=()=> {
  return (
    <div className="sidebar-container">
      <aside className="sidebar">
        <div className="logo">
          <img src={adminlogo} alt="logo" />
          <h2>Job Finder</h2>
        </div>
        <ul className="links">
          <li>
            <span className="material-symbols-outlined">dashboard</span>
            <Link to="/admindashboard">Dashboard</Link>
          </li>
          <br/>
          
          <li>
            <span className="material-symbols-outlined">notes</span>
            <Link to="/adminapplications">Applications</Link>
          </li>
          <br/>
          <li>
            <span className="material-symbols-outlined">work</span>
            <a href="#">Companies</a>
          </li>
          <br/>
          <li>
            <span className="material-symbols-outlined">man</span>
            <a href="#">Applicant</a>
          </li>
          <br/>
          <li>
            <span className="material-symbols-outlined">mail</span>
            <a href="#">Review Applications</a>
          </li>
          <br/>
          <li className=" logout-link">
            <span className="material-symbols-outlined">logout</span>
            <Link to="/login">Logout</Link>
          </li>
          <br/>
        </ul>
      </aside>
    </div>
  );
}

export default AdminSidebar;

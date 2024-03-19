import "../../../assets/css/AdminDashboard.css"
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill} from 'react-icons/bs'
import "./AdminSidebar"
import AdminSidebar from "./AdminSidebar";

const AdminDashboard=()=>{
return (
<div>
    <main className='main-container-admin'>
        <div className='main-title-dash '>
            <h1 className="text-center">DASHBOARD</h1>
        </div>
        <div className='main-cards-dash'>
            <div className='card-admin'>
                <div className='card-inner'>
                    <h3>Applicant</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h3>10</h3>
            </div>
            <div className='card-admin'>
                <div className='card-inner'>
                    <h3>Categories</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h3>2</h3>
            </div>
            <div className='card-admin'>
                <div className='card-inner'>
                    <h3>Applications</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h3>33</h3>
            </div>
            <div className='card-admin'>
                <div className='card-inner'>
                    <h3>Available Jobs </h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h3>10</h3>
            </div>
        </div>
    </main>
    <AdminSidebar></AdminSidebar>
</div>
    );
}

export default AdminDashboard;

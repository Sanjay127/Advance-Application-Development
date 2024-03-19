import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/JobListing.css"
import { Link } from 'react-router-dom';

const PremiumList = () => {
    const [showModal, setShowModal] = useState(null);
    
    const handleModalToggle = (jobId) => {
        setShowModal(jobId);
    };
    const renderModalPremiumContent = (jobPremiumId) => {
        switch (jobPremiumId) {
            case 101:
                return (
                    <div className="job-list">
                        <p><span>Job Id: </span>101</p>
                        <p><span>Job Title: </span>Senior Software Engineer</p>
                        <p><span>Department: </span>IT</p>
                        <p><span>Location: </span>San Francisco</p>
                        <p><span>Responsibility: </span>Lead development teams, architect solutions</p>
                        <p><span>Qualification: </span>5+ years of experience, advanced degree preferred</p>
                        <p><span>Category: </span>Premium</p>

                    </div>
                );
            case 102:
                return (
                    <div  className="job-list">
                       <p><span>Job Id: </span>102</p>
                       <p><span>Job Title: </span>Data Scientist</p>
                       <p><span>Department: </span>Data Science</p>
                       <p><span>Location: </span>New York City</p>
                       <p><span>Responsibility: </span>Analyze large datasets, develop machine learning models</p>
                       <p><span>Qualification: </span>PhD in Computer Science or related field, 3+ years of experience</p>
                       <p><span>Category: </span>Premium</p>

                    </div>
                );
            case 103:
                return (
                    <div  className="job-list">
                       <p><span>Job Id: </span>103</p>
                       <p><span>Job Title: </span>Product Manager</p>
                       <p><span>Department: </span>Product Management</p>
                       <p><span>Location: </span>Seattle</p>
                       <p><span>Responsibility: </span>Define product roadmap, work with cross-functional teams</p>
                       <p><span>Qualification: </span>Bachelors degree, strong communication skills, 5+ years of experience</p>
                       <p><span>Category: </span>Premium</p>
                    </div>
                );
            case 104:
                return (
                    <div  className="job-list">
                        <p><span>Job Id: </span>104</p>
                        <p><span>Job Title: </span>Senior UX Designer</p>
                        <p><span>Department: </span>Design</p>
                        <p><span>Location: </span>Los Angeles</p>
                        <p><span>Responsibility: </span>Create user-centered designs, lead design projects</p>
                        <p><span>Qualification: </span>Portfolio demonstrating UX/UI design skills, 7+ years of experience</p>
                        <p><span>Category: </span>Premium</p>
                    </div>
                );
            case 105:
                return (
                    <div  className="job-list">
                        <p><span>Job Id: </span>105</p>
                        <p><span>Job Title: </span>Finance Manager</p>
                        <p><span>Department: </span>Finance</p>
                        <p><span>Location: </span>London</p>
                        <p><span>Responsibility: </span>Oversee financial operations, budgeting, forecasting</p>
                        <p><span>Qualification: </span>CPA or equivalent certification, 8+ years of finance experience</p>
                        <p><span>Category: </span>Premium</p>
                    </div>
                );
            default:
                return null;
        }
    };
    const getPremiumJobTitle = (jobPremiumId) => {
        switch (jobPremiumId) {
            case 101:
                return "Senior Software Engineer";
            case 102:
                return "Data Scientist";
            case 103:
                return "Product Manager";
            case 104:
                return "Senior UX Designer";
            case 105:
                    return "Finance Manager";
            default:
                return "";
        }
    };

    const getPremiumDepartment = (jobPremiumId) => {
        switch (jobPremiumId) {
            case 101:
                return "IT";
            case 102:
                return "Data Science";
            case 103:
                return "Product Management";
            case 104:
                return "Design";
            case 105:
                return "Finance";
            default:
                return "";
        }
    };
  return (
    <div className="mt-5">
      <h3>Premium Job Available List</h3>
                <div className="d-flex flex-row flex-wrap">
                    {[101, 102, 103, 104, 105].map(jobPremiumId => (
                        <div key={jobPremiumId} className="card mt-4 p-3 shadow d-flex flex-column ">
                            <p><span>Job Id: </span>{jobPremiumId}</p>
                            <p><span>Job Title: </span>{getPremiumJobTitle(jobPremiumId)}</p>
                            <p><span>Department: </span>{getPremiumDepartment(jobPremiumId)}</p>
                            <div className="more-btn text-center d-flex flex-row">
                                <Link to="/payment"><button className="text-center btn btn-primary">Apply</button></Link>
                                <button type="button" className="btn btn-primary" onClick={() => handleModalToggle(jobPremiumId)}>
                                    More Info
                                </button>
                            </div>
                        </div>
                    ))}
                    
                </div>

                {showModal && (
                    <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Premium Jobs</h5>
                                        <button type="button" className="close ms-auto" onClick={() => handleModalToggle(null)}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                </div>
                                <div className="modal-body">
                                    {renderModalPremiumContent(showModal)}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => handleModalToggle(null)}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default PremiumList;

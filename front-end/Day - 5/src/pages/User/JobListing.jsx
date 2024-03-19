import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../assets/css/JobListing.css"
import "./PremiumList"
import { Link } from 'react-router-dom';
import PremiumList from './PremiumList';

const JobListing = () => {
    const [showModal, setShowModal] = useState(null);
    
    const handleModalToggle = (jobId) => {
        setShowModal(jobId);
    };

    const renderModalContent = (jobId) => {
        switch (jobId) {
            case 1:
                return (
                    <div className="job-list">
                        <p><span>Job Id: </span>{jobId}</p>
                        <p><span>Job Title: </span>Software Engineer</p>
                        <p><span>Department: </span>IT</p>
                        <p><span>Location: </span>Chennai</p>
                        <p><span>Responsibility: </span>Develop a new Software</p>
                        <p><span>Qualification: </span>2 Years experience in the IT Field</p>
                        <p><span>Category: </span>Free</p>
                    </div>
                );
            case 2:
                return (
                    <div  className="job-list">
                        <p><span>Job Id: </span>2</p>
                        <p><span>Job Title: </span>Marketing Manager</p>
                        <p><span>Department: </span>Marketing</p>
                        <p><span>Location: </span>Chennai</p>
                        <p><span>Responsibility: </span>Analyzing Information to identify a new market</p>
                        <p><span>Qualification: </span>2 Years experience in the Market Field</p>
                        <p><span>Category: </span>Free</p>
                    </div>
                );
            case 3:
                return (
                    <div  className="job-list">
                        <p><span>Job Id: </span>3</p>
                        <p><span>Job Title: </span>Bussiness Analyst</p>
                        <p><span>Department: </span>BI Department</p>
                        <p><span>Location: </span>Bangalore</p>
                        <p><span>Responsibility: </span>Analyzing complex sets of data within a company to determine recommendations for business growth.</p>
                        <p><span>Qualification: </span>Undergraduates should look for degrees in information systems, computer science, data science, business administration and Analytical Skills.</p>
                        <p><span>Category: </span>Free</p>
                    </div>
                );
            case 4:
                return (
                    <div  className="job-list">
                        <p><span>Job Id: </span>4</p>
                        <p><span>Job Title: </span>Frontend Developer</p>
                        <p><span>Department: </span>IT</p>
                        <p><span>Location: </span>Chennai</p>
                        <p><span>Responsibility: </span>To Develop a Responsive Front-end Websites.</p>
                        <p><span>Qualification: </span>A Bachelors or any Arts degree in a computer science and Front-End Skills</p>
                        <p><span>Category: </span>Free</p>
                    </div>
                );
            case 5:
                return (
                    <div  className="job-list">
                        <p><span>Job Id: </span>5</p>
                        <p><span>Job Title: </span>Software Tester</p>
                        <p><span>Department: </span>IT</p>
                        <p><span>Location: </span>Coimbatore</p>
                        <p><span>Responsibility: </span>To testing a Software for Delivering a software. </p>
                        <p><span>Qualification: </span>A Bachelors or any Arts degree in a computer science.</p>
                        <p><span>Category: </span>Free</p>
                    </div>
                );
            default:
                return null;
        }
    };
    const getJobTitle = (jobId) => {
        switch (jobId) {
            case 1:
                return "Software Engineer";
            case 2:
                return "Marketing Manager";
            case 3:
                return "Business Analyst";
            case 4:
                return "Front-End Developer";
            case 5:
                    return "Software Tester";
            default:
                return "";
        }
    };

    const getDepartment = (jobId) => {
        switch (jobId) {
            case 1:
                return "IT";
            case 2:
                return "Marketing";
            case 3:
                return "BI Department";
            case 4:
                return "IT";
            case 5:
                return "Tester";
            default:
                return "";
        }
    };

    
    return (
        <div>
           <div className="d-flex flex-row">
                <Link to="/home"><button className="mr-4 btn btn-primary">Back</button></Link>
            </div>
                <div className="text-center">  
                    <h3>Free Job Available List</h3>
            </div>
            
                <div className="m-3 d-flex flex-row flex-wrap">
                    {[1, 2, 3, 4,5].map(jobId => (
                        <div key={jobId} className="card mt-4 p-3 shadow d-flex flex-column ">
                            <p><span>Job Id: </span>{jobId}</p>
                            <p><span>Job Title: </span>{getJobTitle(jobId)}</p>
                            <p><span>Department: </span>{getDepartment(jobId)}</p>
                            <div className="more-btn text-center d-flex flex-row">
                                <Link to="/applicantapplications"><button className="text-center btn btn-primary">Apply</button></Link>
                                <button type="button" className="btn btn-primary" onClick={() => handleModalToggle(jobId)}>
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
                                    <h5 className="modal-title">Free Jobs</h5>
                                        <button type="button" className="close ms-auto" onClick={() => handleModalToggle(null)}>
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                </div>
                                <div className="modal-body">
                                    {renderModalContent(showModal)}
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={() => handleModalToggle(null)}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {showModal && <div className="modal-backdrop fade show"></div>}

                <PremiumList></PremiumList>
            
               
        </div>
    
    );
}

export default JobListing;

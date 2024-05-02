import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import "../../../assets/css/Applications.css";
import AdminSidebar from './AdminSidebar';

const AdminApplicant = () => {
  const [applicants, setApplicants] = useState([
    { id: 1, name: 'Sanjay', email: 'sanjay76@gmail.com', password: 'sanjay#23'},
    { id: 2, name: 'Arun', email: 'arun23@gmail.com', password: 'arun#432'},
    { id: 3, name: 'Kishore', email: 'kishore98@gmail.com', password: 'kishore@983'},
  ]);

  const [newApplicant, setNewApplicant] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [editApplicant, setEditApplicant] = useState(null);

  const addApplicant = () => {
    const id = applicants.length + 1; // Generate new id
    setApplicants([...applicants, { id, ...newApplicant }]);
    setShowModal(false); // Close modal after adding applicant
    // Reset new applicant state for next entry
    setNewApplicant({
      name: '',
      email: '',
      password: ''
    });
  };

  const deleteApplicant = (id) => {
    setApplicants(applicants.filter(applicant => applicant.id !== id));
  };

  const editApplicantData = (applicant) => {
    setEditApplicant(applicant);
    setNewApplicant(applicant);
    setShowModal(true);
  };

  const handleEdit = () => {
    const updatedApplicants = applicants.map(applicant => {
      if (applicant.id === editApplicant.id) {
        return newApplicant;
      }
      return applicant;
    });
    setApplicants(updatedApplicants);
    setShowModal(false);
    setEditApplicant(null);
    setNewApplicant({
      name: '',
      email: '',
      password: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewApplicant(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h3 className="text-center">Manage Applicants</h3>
      <div className="d-flex justify-content-center mt-5">
        <button className="mr-3 btn btn-primary" onClick={() => setShowModal(true)}>Add Applicant</button>
      </div>
      <div className="admin-applications-container mt-3">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant, index) => (
                <tr key={index}>
                  <th scope="row">{applicant.id}</th>
                  <td>{applicant.name}</td>
                  <td>{applicant.email}</td>
                  <td>{applicant.password}</td>
                  <td>
                    <div className="d-flex flex-row">
                      <button className="btn btn-outline-primary mx-2" onClick={() => editApplicantData(applicant)}>Edit</button>
                      <button className="btn btn-secondary mx-2" onClick={() => deleteApplicant(applicant.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AdminSidebar />
      {/* Bootstrap Modal for Adding New Applicant */}
      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{editApplicant ? 'Edit Applicant' : 'Add Applicant'}</h5>
              <button type="button" className="close" onClick={() => { setShowModal(false); setEditApplicant(null); }}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" name="name" value={newApplicant.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={newApplicant.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" name="password" value={newApplicant.password} onChange={handleInputChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => { setShowModal(false); setEditApplicant(null); }}>Cancel</button>
              <button type="button" className="btn btn-primary" onClick={editApplicant ? handleEdit : addApplicant}>{editApplicant ? 'Save Changes' : 'Add Applicant'}</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`}></div>
    </div>
  );
}

export default AdminApplicant;

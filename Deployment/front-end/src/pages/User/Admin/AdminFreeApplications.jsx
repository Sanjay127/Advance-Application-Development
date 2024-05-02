import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import "../../../assets/css/Applications.css";
import axios from 'axios'; // Import Axios for making HTTP requests

const AdminFreeApplications = () => {
  const [users, setUsers] = useState([]);
  const [newApplication, setNewApplication] = useState({
    applicationname: '',
    contactnumber: '',
    email: '',
    jobtitle: '',
    role: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  useEffect(() => {
    // Fetch free applications from backend when the component mounts
    fetchFreeApplications();
  }, []);

  const fetchFreeApplications = async () => {
    try {
      // Make a GET request to fetch free applications from the backend
      const response = await axios.get('/api/freeapplications');
      if (Array.isArray(response.data)) {
        setUsers(response.data); // Update the state with fetched free applications
      } else {
        console.error('Invalid response format for free applications:', response.data);
      }
    } catch (error) {
      console.error('Error fetching free applications:', error);
    }
  };
  
  const addUser = async () => {
    try {
      // Make a POST request to add a new free application
      await axios.post('/api/freeapplications', newApplication);
      setShowModal(false); // Close modal after adding user
      // Refresh the list of free applications after adding a new application
      fetchFreeApplications();
      // Reset new application state for next entry
      setNewApplication({
        applicationname: '',
        contactnumber: '',
        email: '',
        jobtitle: '',
        role: ''
      });
    } catch (error) {
      console.error('Error adding free application:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      // Make a DELETE request to delete a free application
      await axios.delete(`/api/freeapplications/${id}`);
      // Refresh the list of free applications after deleting an application
      fetchFreeApplications();
    } catch (error) {
      console.error('Error deleting free application:', error);
    }
  };

  const editUserData = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  const handleEdit = async () => {
    try {
      // Make a PUT request to update a free application
      await axios.put(`/api/freeapplications/${editUser.id}`, editUser);
      setShowModal(false);
      setEditUser(null);
      // Refresh the list of free applications after updating an application
      fetchFreeApplications();
    } catch (error) {
      console.error('Error updating free application:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h3 className="text-center">Manage Free Applications</h3>
      <div className="d-flex justify-content-center mt-5">
        <button className="mr-3 btn btn-primary" onClick={() => setShowModal(true)}>Add Free Application</button>
      </div>
      <div className="admin-applications-container mt-3">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Application Name</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Email</th>
                <th scope="col">Job Title</th>
                <th scope="col">Role</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{user.id}</th>
                  <td>{user.applicationname}</td>
                  <td>{user.contactnumber}</td>
                  <td>{user.email}</td>
                  <td>{user.jobtitle}</td>
                  <td>{user.role}</td>
                  <td>
                    <div className="d-flex flex-row">
                      <button className="btn btn-outline-primary mx-2" onClick={() => editUserData(user)}>Edit</button>
                      <button className="btn btn-secondary mx-2" onClick={() => deleteUser(user.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <AdminSidebar />
      </div>
      <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showModal ? 'block' : 'none' }}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{editUser ? 'Edit Application' : 'Add Free Application'}</h5>
              <button type="button" className="close" onClick={() => { setShowModal(false); setEditUser(null); }}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="applicationname">Application Name</label>
                  <input type="text" className="form-control" id="applicationname" name="applicationname" value={editUser ? editUser.applicationname : newApplication.applicationname} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="contactNumber">Contact Number</label>
                  <input type="text" className="form-control" id="contactnumber" name="contactnumber" value={editUser ? editUser.contactNumber : newApplication.contactNumber} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={editUser ? editUser.email : newApplication.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="jobtitle">Job Title</label>
                  <input type="text" className="form-control" id="jobtitle" name="jobtitle" value={editUser ? editUser.jobtitle : newApplication.jobtitle} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <input type="text" className="form-control" id="role" name="role" value={editUser ? editUser.role : newApplication.role} onChange={handleInputChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => { setShowModal(false); setEditUser(null); }}>{editUser ? 'Cancel' : 'Close'}</button>
              <button type="button" className="btn btn-primary" onClick={editUser ? handleEdit : addUser}>{editUser ? 'Save Changes' : 'Add Application'}</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`}></div>
    </div>
  );
}

export default AdminFreeApplications;

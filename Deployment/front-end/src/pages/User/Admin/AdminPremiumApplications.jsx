import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import "../../../assets/css/Applications.css";

const AdminPremiumApplications = () => {
  const [users, setUsers] = useState([
    { id: 1, applicationname: 'DataScientist Job', contactNumber: '9395353288', email: 'sanjay76@gmail.com', amount: 5000, jobtitle: 'DataScientist', role: 'Data Analyst' },
    { id: 2, applicationname: 'Senior Manager Job', contactNumber: '9944334234', email: 'arun23@gmail.com', amount: 6000, jobtitle: 'Senior Manager', role: 'Managing work process ' },
    { id: 3, applicationname: 'Data Engineer Job', contactNumber: '9583456321', email: 'kishore98@gmail.com', amount: 2000, jobtitle: 'Senior Data Engineer', role: 'Data Collecting' },
    { id: 4, applicationname: 'Data Architect Job', contactNumber: '9845683293', email: 'akshay73@gmail.com', amount: 4000, jobtitle: 'Data Architect', role: 'Data processing' },
    { id: 5, applicationname: 'Cloud Engineer Job', contactNumber: '8534582937', email: 'kumar45@gmail.com', amount: 9000, jobtitle: 'Cloud Engineer', role: 'Senior Cloud data manager ' },
  ]);

  const [newApplication, setNewApplication] = useState({
    applicationname: '',
    contactNumber: '',
    email: '',
    amount: '',
    jobtitle: '',
    role: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const addUser = () => {
    const id = users.length + 1;
    setUsers([...users, { id, ...newApplication }]);
    setShowModal(false);
    setNewApplication({
      applicationname: '',
      contactNumber: '',
      email: '',
      amount: '',
      jobtitle: '',
      role: ''
    });
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const editUserData = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  const handleEdit = () => {
    const index = users.findIndex(u => u.id === editUser.id);
    const updatedUsers = [...users];
    updatedUsers[index] = editUser;
    setUsers(updatedUsers);
    setShowModal(false);
    setEditUser(null);
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
      <h3 className="text-center">Manage Premium Applications</h3>
      <div className="d-flex justify-content-center mt-5">
        <button className="mr-3 btn btn-primary" onClick={() => setShowModal(true)}>Add Premium Application</button>
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
                <th scope="col">Amount</th>
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
                  <td>{user.contactNumber}</td>
                  <td>{user.email}</td>
                  <td>{user.amount}</td>
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
              <h5 className="modal-title">{editUser ? 'Edit Application' : 'Add Premium Application'}</h5>
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
                  <input type="text" className="form-control" id="contactNumber" name="contactNumber" value={editUser ? editUser.contactNumber : newApplication.contactNumber} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={editUser ? editUser.email : newApplication.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="amount">Amount</label>
                  <input type="number" className="form-control" id="amount" name="amount" value={editUser ? editUser.amount : newApplication.amount} onChange={handleInputChange} />
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

export default AdminPremiumApplications;

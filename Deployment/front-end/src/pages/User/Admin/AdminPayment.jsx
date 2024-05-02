import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import "../../../assets/css/Applications.css";

const AdminPayment = () => {
  const [payments, setPayments] = useState([
    { id: 1, modeOfPayment: 'Credit Card', cardNumber: '1234 5678 9012 3456', expiryDate: '12/25', cvv: '123', paymentDate: '2024-04-20', amount: 100 },
    { id: 2, modeOfPayment: 'Debit Card', cardNumber: '9876 5432 1098 7654', expiryDate: '06/23', cvv: '456', paymentDate: '2024-04-19', amount: 90 },
    { id: 3, modeOfPayment: 'PayPal', cardNumber: '9884 6473 5474', expiryDate: '09/22', cvv: '854', paymentDate: '2024-04-18', amount: 200 },
    { id: 4, modeOfPayment: 'Debit Card', cardNumber: '9483 4573 8677', expiryDate: '07/23', cvv: '976', paymentDate: '2023-04-10', amount: 120 },
    { id: 5, modeOfPayment: 'PayPal', cardNumber: '9587 6353 8376', expiryDate: '02/22', cvv: '653', paymentDate: '2021-12-18', amount: 140 },
  ]);

  const [newPayment, setNewPayment] = useState({
    modeOfPayment: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentDate: '',
    amount: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [editPayment, setEditPayment] = useState(null);

  const addPayment = () => {
    const id = payments.length + 1; // Generate new id
    setPayments([...payments, { id, ...newPayment }]);
    setShowModal(false); // Close modal after adding payment
    // Reset new payment state for next entry
    setNewPayment({
      modeOfPayment: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      paymentDate: '',
      amount: ''
    });
  };

  const deletePayment = (id) => {
    setPayments(payments.filter(payment => payment.id !== id));
  };

  const editPaymentData = (payment) => {
    setEditPayment(payment);
    setShowModal(true);
  };

  const handleEdit = () => {
    const index = payments.findIndex(p => p.id === editPayment.id);
    const updatedPayments = [...payments];
    updatedPayments[index] = editPayment;
    setPayments(updatedPayments);
    setShowModal(false);
    setEditPayment(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditPayment(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h3 className="text-center">Manage Payments</h3>
      <div className="d-flex justify-content-center mt-5">
        <button className="mr-3 btn btn-primary" onClick={() => setShowModal(true)}>Add Payment</button>
      </div>
      <div className="admin-applications-container mt-3">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Mode of Payment</th>
                <th scope="col">Card Number</th>
                <th scope="col">Expiry Date</th>
                <th scope="col">CVV</th>
                <th scope="col">Payment Date</th>
                <th scope="col">Amount</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index}>
                  <th scope="row">{payment.id}</th>
                  <td>{payment.modeOfPayment}</td>
                  <td>{payment.cardNumber}</td>
                  <td>{payment.expiryDate}</td>
                  <td>{payment.cvv}</td>
                  <td>{payment.paymentDate}</td>
                  <td>${payment.amount}</td>
                  <td>
                    <div className="d-flex flex-row">
                      <button className="btn btn-outline-primary mx-2" onClick={() => editPaymentData(payment)}>Edit</button>
                      <button className="btn btn-secondary mx-2" onClick={() => deletePayment(payment.id)}>Delete</button>
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
              <h5 className="modal-title">{editPayment ? 'Edit Payment' : 'Add Payment'}</h5>
              <button type="button" className="close" onClick={() => { setShowModal(false); setEditPayment(null); }}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="modeOfPayment">Mode of Payment</label>
                  <input type="text" className="form-control" id="modeOfPayment" name="modeOfPayment" value={editPayment ? editPayment.modeOfPayment : newPayment.modeOfPayment} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input type="text" className="form-control" id="cardNumber" name="cardNumber" value={editPayment ? editPayment.cardNumber : newPayment.cardNumber} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input type="text" className="form-control" id="expiryDate" name="expiryDate" value={editPayment ? editPayment.expiryDate : newPayment.expiryDate} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" className="form-control" id="cvv" name="cvv" value={editPayment ? editPayment.cvv : newPayment.cvv} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="paymentDate">Payment Date</label>
                  <input type="text" className="form-control" id="paymentDate" name="paymentDate" value={editPayment ? editPayment.paymentDate : newPayment.paymentDate} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="amount">Amount</label>
                  <input type="number" className="form-control" id="amount" name="amount" value={editPayment ? editPayment.amount : newPayment.amount} onChange={handleInputChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => { setShowModal(false); setEditPayment(null); }}>{editPayment ? 'Cancel' : 'Close'}</button>
              <button type="button" className="btn btn-primary" onClick={editPayment ? handleEdit : addPayment}>{editPayment ? 'Save Changes' : 'Add Payment'}</button>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal-backdrop fade ${showModal ? 'show' : ''}`}></div>
    </div>
  );
}

export default AdminPayment;

import "../../assets/css/Payment.css";
import payment from "../../assets/images/Payment.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import {useState} from "react";

const Payment = () => {
  const [showModal, setShowModal] = useState(false);
  const [paymentData, setPaymentData] = useState({
    paymentMode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    paymentDate: '',
    amount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitted Payment Data:', paymentData);
  
    setPaymentData({
      paymentMode: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      paymentDate: '',
      amount: ''
    });
   
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    
    window.location.reload();
  };
  
  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="d-flex flex-row">
      <div>
        <img className="payment-img" src={payment} alt="/"/>
      </div>
      <div className="payment-page shadow">
        <h2 className="text-center">Payment </h2>
        <form className="payment-form" onSubmit={handleSubmit}>
          <div>
            <label>Payment Mode:</label>
            <select name="paymentMode" value={paymentData.paymentMode} onChange={handleChange}>
              <option value="">Select Payment Mode</option>
              <option value="credit">Credit Card</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label>Card Number:</label>
            <input type="text" name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} />
          </div>
          <div>
            <label>Expiry Date:</label>
            <input type="text" name="expiryDate" value={paymentData.expiryDate} onChange={handleChange} />
          </div>
          <div>
            <label>CVV:</label>
            <input type="text" name="cvv" value={paymentData.cvv} onChange={handleChange} />
          </div>
          <div>
            <label>Payment Date:</label>
            <input type="date" name="paymentDate" value={paymentData.paymentDate} onChange={handleChange} />
          </div>
          <div>
            <label>Amount:</label>
            <input type="text" name="amount" value={paymentData.amount} onChange={handleChange} />
          </div>
          <div className="d-flex flex-row justify-content-center">
            <div>
              <button type="button" className="p-2 w-100 btn btn-primary" onClick={handleShowModal}>
                Submit
              </button>
            </div>
            <div>
              <Link to="/jobcategory" className="button-cancel p-2 w-100 btn btn-secondary">Cancel</Link>
            </div>
          </div>
        </form>
        </div>

          {showModal && (
        <div className="modal fade show" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5 fw-bold" id="exampleModalLabel">Payment</h1>
                <button type="button" className="btn-close" onClick={handleCloseModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                Successfully Paid Payment...
                Fill the Application Form for applying job...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                <Link to="/applicantapplications" className="btn btn-secondary">Submit</Link>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>

    



  );
};

export default Payment;
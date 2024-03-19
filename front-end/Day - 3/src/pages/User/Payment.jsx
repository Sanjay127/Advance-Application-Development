
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Payment = () => {
    return (
        <div className="container">
            <h1>Payment Form</h1>
            <div className="first-row">
                <div className="owner">
                    <h3>Owner</h3>
                    <div className="input-field">
                        <input type="text" />
                    </div>
                </div>
                <div className="cvv">
                    <h3>CVV</h3>
                    <div className="input-field">
                        <input type="password" />
                    </div>
                </div>
            </div>
            <div className="second-row">
                <div className="card-number">
                    <h3>Card Number</h3>
                    <div className="input-field">
                        <input type="text" />
                    </div>
                </div>
            </div>
            <div className="third-row">
                <h3>Expiration Date</h3>
                <div className="selection">
                    <div className="date">
                        <select name="months" id="months">
                            <option value="Jan">Jan</option>
                            <option value="Feb">Feb</option>
                            <option value="Mar">Mar</option>
                            <option value="Apr">Apr</option>
                            <option value="May">May</option>
                            <option value="Jun">Jun</option>
                            <option value="Jul">Jul</option>
                            <option value="Aug">Aug</option>
                            <option value="Sep">Sep</option>
                            <option value="Oct">Oct</option>
                            <option value="Nov">Nov</option>
                            <option value="Dec">Dec</option>
                        </select>
                        <select name="years" id="years">
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row">
                <Link to="/jobcategory" className="btn btn-primary">Submit</Link>
                <Link to="/jobcategory" className="btn btn-info">Cancel</Link>
            </div>

        </div>
    );
};

export default Payment;

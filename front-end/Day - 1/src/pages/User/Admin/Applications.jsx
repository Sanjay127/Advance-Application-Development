import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../assets/css/Applications.css"
import AdminSidebar from './AdminSidebar';
const Applications = () => {
  return (
    <div className="bg-table">
      <h1 className="text-center">Applications</h1>
      <table className=" w-75 p-4 table table-striped">
        <thead>
          <tr>
            <th scope="col">Application Name</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Email</th>
            <th scope="col">Amount</th>
            <th scope="col">Job Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          
            <td>Premium Category</td>
            <td>9432242103</td>
            <td>user123@gmail.com</td>
            <td>900</td>
            <td>Data Scientist</td>
          </tr>
          <tr>
            <td>Premium Category</td>
            <td>9475654322</td>
            <td>customer243@gmail.com</td>
            <td>1000</td>
            <td>Data Scientist</td>
          </tr>
          <tr>
            <td>Premium Category</td>
            <td>9422322123</td>
            <td>user100@gmail.com</td>
            <td>1500</td>
            <td>Data Scientist</td>
          </tr>
        </tbody>
      </table>
      <AdminSidebar></AdminSidebar>
    </div>

  );
}

export default Applications;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminTable() {
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    fetchAdminList();
  }, []);

  const fetchAdminList = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/getAdmin');
      setAdminList(response.data); // Update adminList state with the fetched data
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  };

  const navigate = useNavigate();

 // In AdminTable.js
const handleEdit = async (adminId) => {
  try {
    const response = await axios.get(`http://localhost:9000/api/getAdmin/${adminId}`);
    const adminToUpdate = response.data;
    console.log("Admin to update:", adminToUpdate);

    // Navigate to the /form route with the admin data for editing
    navigate('/form', { state: { adminToUpdate } });
  } catch (error) {
    console.error('Error fetching admin details:', error);
  }
};


  const handleDelete = async (adminId) => {
    try {
      // Display a confirmation dialog
      const shouldDelete = window.confirm("Are you sure you want to delete this Admin?");

      if (!shouldDelete) {
        return; // Do nothing if the user cancels the deletion
      }

      const response = await axios.delete(`http://localhost:9000/api/deleteAdmin/${adminId}`);
      alert(response.data.message); // Adjust property name based on the server response

      // Refresh the product list after deletion
      fetchAdminList();
    } catch (error) {
      console.error('Error deleting Admin:', error);
      alert('Error deleting Admin. Please try again.');
    }
  };
  


  return (
    <>
      <div class="content">
        <div class="animated fadeIn">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header">
                  <strong class="card-title">Admin Table</strong>
                </div>
                <div class="table-stats order-table ov-h">
                  <table class="table ">
                    <thead>
                      <tr>
                        <th class="serial">S/N</th>

                        <th>Fullname</th>
                        <th>Phone Number</th>
                        <th>Rank</th>

                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
  {adminList.map((product, index) => (
    <tr key={product.id}>
      <td className="serial"> {index + 1} </td>
      <td>{product.fullname}</td>
      <td> {product.phone_number} </td>
      <td>
        {" "}
        <span className="product">{product.rank}</span>{" "}
      </td>
      <td>
        <button className="btn btn-warning" onClick={() => handleEdit(product.id)}>
          Edit
        </button>{" "}
        &ensp;&ensp;
        <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>
          Delete
        </button>
      </td>
    </tr>
  ))}
</tbody>

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminTable;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductListTable() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/getProduct');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  };

  const navigate = useNavigate();

  const handleEdit = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:9000/api/getProduct/${productId}`);
      const productToUpdate = response.data;

      // Navigate to the /addProduct route with the product data for editing
      navigate('/addProduct', { state: { productToUpdate } });
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      // Display a confirmation dialog
      const shouldDelete = window.confirm("Are you sure you want to delete this product?");
  
      if (!shouldDelete) {
        return; // Do nothing if the user cancels the deletion
      }
  
      const response = await axios.delete(`http://localhost:9000/api/deleteProduct/${productId}`);
      alert(response.data.message); // Adjust property name based on the server response
  
      // Refresh the product list after deletion
      fetchProductList();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product. Please try again.');
    }
  };
  

  const filteredImages = images.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="content">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <strong className="card-title">Admin Table</strong>
                  <div className="row">
                    <div className="col-md-6 pb-4">
                      <div className="d-flex">
                        <input
                          className="form-control"
                          type="search"
                          placeholder="Search for fertilizer...."
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-stats order-table ov-h">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="serial">S/N</th>
                        <th>Product Pic</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredImages.map((product, index) => (
                        <tr key={product.id}>
                          <td className="serial">{index + 1}</td>
                          <td className="avatar">
                            <div className="round-img">
                              <a href={`http://localhost:9000/public/upload/${product.image}`}>
                                <img
                                  className="rounded-circle"
                                  src={`http://localhost:9000/public/upload/${product.image}`}
                                  alt={product.name}
                                />
                              </a>
                            </div>
                          </td>
                          <td>{product.name}</td>
                          <td>{product.price}</td>
                          <td>
                            <span className="product">{product.description}</span>
                          </td>
                          <td>
                            <button
                              className="btn btn-warning"
                              onClick={() => handleEdit(product.id)}
                            >
                              Edit
                            </button>{' '}
                            &ensp;&ensp;
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(product.id)}
                            >
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

export default ProductListTable;

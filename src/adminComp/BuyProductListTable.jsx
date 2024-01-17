import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BuyProductListTable() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    try {
      const response = await axios.get('http://localhost:9000/api/getBuyProduct');
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching product list:', error);
    }
  };

  const filteredImages = images.filter((product) =>
    product.fullname && product.fullname.toLowerCase().includes(searchQuery.toLowerCase())
  );


  
  const handleReviewClick = async (index) => {
    const confirmReview = window.confirm(
      "Are you sure you want to review this data?"
    );

    if (confirmReview) {
      const retireeData = images[index];

      try {
        // Send a request to the server to review the retiree
        const response = await axios.post(
          "http://localhost:9000/api/history",
          retireeData
        );

        if (response.data.success) {
          alert("Retiree data reviewed successfully!");
          fetchProductList(); // Fetch the updated retiree list after the review
        } else {
          console.error("Error reviewing retiree:", response.data.error);
          alert("Error reviewing retiree. Please try again.");
        }
      } catch (error) {
        console.error("Unexpected error reviewing retiree:", error);
        alert("Error reviewing retiree. Please try again.");
      }
    }
  };
  const navigate = useNavigate();

  return (
    <>
      <div class="content">
        <div class="animated fadeIn">
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-header">
                  <strong class="card-title">History Table</strong>
                  <div class="form-group col-md-6 mb-3">
                    <input
                      type="search"
                      class="form-control mt-1 "
                      onChange={(e) => setSearchQuery(e.target.value)}
                      id="search"
                      placeholder="Search......."
                    />
                  </div>
                </div>
                <div class="table-stats order-table ov-h">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="serial">S/N</th>
                        <th class="avatar">Evidence</th>
                        <th>Full name</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>goods</th>
                        <th>Amount</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredImages.map((product, index) => (
                        <tr key={product.id}>
                          <td class="serial">{index + 1}</td>
                          <td class="avatar">
                            <div class="round-img">
                              <a href={`http://localhost:9000/public/evidence/${product.image}`}>
                                <img
                                  className="rounded-circle"
                                  src={`http://localhost:9000/public/evidence/${product.image}`}
                                  alt={product.fullname}
                                />
                              </a>
                            </div>
                          </td>
                          <td>{product.fullname}</td>
                          <td>{product.phone_number}</td>
                          <td>{product.address}</td>
                          <td>{product.goods}</td>
                          <td>{product.amount}</td>
                          <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleReviewClick(index)}
                          >
                            Review
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

export default BuyProductListTable;

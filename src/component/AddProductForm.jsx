import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";

function AddProductForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const productToUpdate = location.state && location.state.productToUpdate;

    if (productToUpdate) {
      setName(productToUpdate.name || "");
      setPrice(productToUpdate.price || "");
      setDescription(productToUpdate.description || "");
    }
  }, [location.state]);

  // Check if it's in edit mode
  const isEditMode = location.state && location.state.productToUpdate !== undefined;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (!name || !price || !description || (!isEditMode && !image)) {
        alert("Please fill in all fields");
        return;
      }
  
      let formData = new FormData();
      formData.append("imgfile", image);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
  
      const endpoint = isEditMode
        ? `http://localhost:9000/api/editProduct/${location.state.productToUpdate.id}`
        : "http://localhost:9000/api/addProduct";
  
      const response = await axios.post(endpoint, formData);
      alert(response.data.message); // Adjust property name based on the server response
  
      navigate('/productList');
    } catch (error) {
      console.error("Error handling product:", error.message);
      alert("Error handling product. Please try again.");
    }
  };
  
  return (
    <>
      <div className="content">
        <div className="animated fadeIn">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <strong className="card-title">{isEditMode ? "Edit Product" : "Add Product"}</strong>
                </div>

                <br />
                <br />
                <form className="col-md-9 m-auto" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group col-md-6 mb-3">
                      <label htmlFor="inputName">Name of Product</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        id="inputName"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6 mb-3">
                      <label htmlFor="inputPrice">Price</label>
                      <input
                        type="text"
                        className="form-control mt-1"
                        id="inputPrice"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-12 mb-3">
                      <label htmlFor="inputImage">Product Image</label>
                      <input
                        type="file"
                        className="form-control mt-1"
                        id="inputImage"
                        name="image"
                        disabled={isEditMode} // Disable the file input in edit mode
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="mb-3">
                      <label htmlFor="inputDescription">Product Description</label>
                      <textarea
                        className="form-control mt-1"
                        id="inputDescription"
                        name="description"
                        placeholder="Goods & Amount"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col text-end mt-2">
                      <button type="submit" className={`btn ${isEditMode ? "btn-warning" : "btn-success"} btn-lg px-3`}>
                        {isEditMode ? "Update" : "Register"}
                      </button>
                    </div>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProductForm;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AddAdminForm() {


  const navigate = useNavigate();
  const location = useLocation();

  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rank, setRank] = useState("");
  const [password, setPassword] = useState("");

 // In AddAdminForm.js
useEffect(() => {
  const adminToUpdate = location.state && location.state.adminToUpdate;
  console.log("Product to update:", adminToUpdate);

  if (adminToUpdate) {
    setFullname(adminToUpdate.fullname || "");
    setPhoneNumber(adminToUpdate.phone_number || "");
    setRank(adminToUpdate.rank || "");
    setPassword(adminToUpdate.password || "");
  }
}, [location.state]);


  // Check if it's in edit mode
  const isEditMode = location.state && location.state.adminToUpdate !== undefined;

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (!fullname || !phoneNumber || !rank || !password ) {
        alert("Please fill in all fields");
        return;
      }
  
      let formData = new FormData();
      formData.append("fullname", fullname);
      formData.append("phoneNumber", phoneNumber);
      formData.append("rank", rank);
      formData.append("password", password);
      
      const endpoint = isEditMode
      ? `http://localhost:9000/api/editAdmin/${location.state.adminToUpdate.id}`
      : "http://localhost:9000/api/addAdmin";
    
      const response = await axios.post(endpoint, formData);
      alert(response.data.message);
  
      navigate('/admin');
    } catch (error) {
      console.error("Error handling product:", error.message);
      alert("Error handling product. Please try again.");
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
                <strong className="card-title">{isEditMode ? "Edit Admin" : "Add Admin"}</strong>
                </div>

                <br />
                <br />
                <form class="col-md-9 m-auto" onSubmit={handleSubmit}>
                  <div class="row">
                    <div class="form-group col-md-6 mb-3">
                      <label for="inputname">Fullname</label>
                      <input
                        type="text"
                        class="form-control mt-1"
                        id="fullname"
                        name="fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                      />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                      <label for="inputemail">Phone number</label>
                      <input
                        type="text"
                        class="form-control mt-1"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group col-md-6 mb-3">
                      <label for="inputname">Rank</label>
                      <input
                        type="text"
                        class="form-control mt-1"
                        id="rank"
                        name="rank"
                        value={rank}
                        onChange={(e) => setRank(e.target.value)}
                      />
                    </div>
                    <div class="form-group col-md-6 mb-3">
                      <label for="inputemail">Password</label>
                      <input
                        type="password"
                        class="form-control mt-1"
                        id="passsword"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col text-end mt-2">
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

export default AddAdminForm;

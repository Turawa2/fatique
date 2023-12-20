import React, { useEffect, useState } from 'react';

function Fertilizers() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch("http://localhost:9000/api/getProduct")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredImages = images.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
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
            <div className="row">
              {filteredImages.map((product, index) => (
                <div className="col-md-4" key={product.id}>
                  <div className="card mb-4 product-wap rounded-0">
                    <div className="card rounded-0">
                      <img
                        className="card-img rounded-0 img-fluid"
                        src={`http://localhost:9000/public/upload/${product.image}`}
                        alt={product.name}
                        style={{ height: '400px' }}  
                      />
                      <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                        <ul className="list-unstyled">
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href={`http://localhost:9000/public/upload/${product.image}`}
                            >
                              <i className="far fa-eye"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="btn btn-success text-white mt-2"
                              href="/contact"
                            >
                              <i className="fas fa-cart-plus"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="card-body">
                      <a href="#" className="h3 text-decoration-none">
                        {product.name}
                      </a>
                      <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                        <li style={{ color: "#bbb" }}>{product.description}</li>
                      </ul>
                      <ul className="list-unstyled d-flex justify-content-center mb-1">
                        <li>
                          <i className="text-success fa fa-star"></i>
                          <i className="text-success fa fa-star"></i>
                          <i className="text-success fa fa-star"></i>
                          <i className="text-success fa fa-star"></i>
                          <i className="text-success fa fa-star"></i>
                        </li>
                      </ul>
                      <p className="text-center mb-0">N{product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fertilizers;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CONSTANTS } from "../constants/constant";
import "../assets/Styles/ProductPage.css";
import img1 from "../assets/Images/Home/Hero/1.webp";
import img2 from "../assets/Images/Home/Hero/2.webp";
import img3 from "../assets/Images/Home/Hero/3.webp";

export default function ProductPage() {
  const navigate = useNavigate();
  const images = [
    img1,
    img2,
    img3
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeMainImage = (src) => {
    const index = images.indexOf(src);
    if (index !== -1) setCurrentIndex(index);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="container mt-4">
        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a onClick={() => navigate(CONSTANTS.ROUTES.HOME)}>Home</a>
            </li>
            <li className="breadcrumb-item">
              <a onClick={() => navigate(CONSTANTS.ROUTES.ALL_PRODUCT)}>Batch Coding Machine</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              12.7mm Plastic Body Without Cartridge
            </li>
          </ol>
        </nav>

        {/* Main Product Section */}
        <div className="row">
          <div className="col-12">
            <h2>12.7mm Plastic Body Without Cartridge</h2>
          </div>

          <div className="col-md-6 product-details">
            <p className="fw-bold">Short Description</p>
            <h5 style={{ lineHeight: '30px' }}>
              This portable, cartridge-free mini printer is designed for printing
              up to four lines of information (like dates, MRP, and batch numbers)
              with a maximum print height of 12.7mm onto round and irregular
              surfaces. It boasts a high print resolution of up to 600 dpi and
              supports printing on various materials like boards, cartons, pipes,
              cables, metal, plastic, and concave/convex surfaces. It operates on
              a 9V/2A power input with a fast charge adapter.
            </h5>
          </div>



          {/* Image Slider */}
          <div className="col-md-5 text-center position-relative main-product-img-section">
            <button className="slider-btn left" onClick={prevImage}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <img
              id="mainImage"
              src={images[currentIndex]}
              className="img-fluid main-product-img"
              alt="Main"
            />
            <button className="slider-btn right" onClick={nextImage}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Thumbnails */}
          <div className="col-md-1 d-none d-md-block">
            <div className="thumbnail-list">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  className="img-thumbnail mb-2"
                  onClick={() => changeMainImage(src)}
                  alt={`Thumbnail ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <br /><br />

      {/* Tabs Section */}
      <div className="container py-4">
        <div className="row">
          <div className="col-md-3 mb-3">
            <ul className="nav flex-column nav-pills custom-tab-menu" id="tabMenu" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="description-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#description"
                  type="button"
                  role="tab"
                >
                  Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="shipping-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#shipping"
                  type="button"
                  role="tab"
                >
                  Shipping
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="return-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#return"
                  type="button"
                  role="tab"
                >
                  Return Policies
                </button>
              </li>
            </ul>
          </div>

          <div className="col-md-9">
            <div className="tab-content" id="tabContent">
              {/* Description */}
              <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                <p><strong>Short Description:</strong> Commercial Handheld 12mm Inkjet Printer</p>
                <ul>
                  <li><strong>Printing Area:</strong> 12mm</li>
                  <li><strong>Printing Speed:</strong> Up to 50m/min</li>
                  <li><strong>Country of Origin:</strong> China</li>
                </ul>
                <hr />
                <p><strong>Product Description:</strong> The Handheld 12.7mm Intelligent TIJ Printer...</p>
                <hr />
                <p><strong>Key Features:</strong></p>
                <ul>
                  <li><strong>Compact & Portable Design</strong></li>
                  <li><strong>Durable Construction</strong></li>
                  <li><strong>User-Friendly Interface</strong></li>
                  <li><strong>High-Resolution Printing</strong></li>
                </ul>
              </div>

              {/* Shipping */}
              <div className="tab-pane fade" id="shipping" role="tabpanel" aria-labelledby="shipping-tab">
                <div className="card border-0">
                  <div className="card-body px-0">
                    <h5><strong>How do I place an order?</strong></h5>
                    <p>
                      Ordering at Universal Seal is easy. Just select the items, enter your shipping address, and payment info.
                      For assistance, call +91 9810471166. <br />
                      <strong>Call Timings:</strong> 10:30 AM - 4:30 PM (Mon - Sat)
                    </p>
                    <h5 className="mt-4"><strong>Does Universal Seal sell the products?</strong></h5>
                    <p>
                      Yes, all products are sold directly by Universal Seal and protected under the buyer protection policy.
                    </p>
                    <h5 className="mt-4"><strong>How will my order be delivered?</strong></h5>
                    <p>
                      Through reputed couriers. Bulk or heavy orders may take longer (10+ days).
                    </p>
                    <h5 className="mt-4"><strong>Order confirmation?</strong></h5>
                    <p>
                      You’ll receive a confirmation via email and SMS, and can also track via your account.
                    </p>
                    <h5 className="mt-4"><strong>Platform Fee & Delivery Fee?</strong></h5>
                    <p>
                      <strong>Platform Fee:</strong> Non-refundable fee in case of cancellation/return.<br />
                      <strong>Fast Delivery Fee:</strong> Non-refundable, ensures 24hr/next-day shipping.
                    </p>
                  </div>
                </div>
              </div>

              {/* Returns */}
              <div className="tab-pane fade" id="return" role="tabpanel" aria-labelledby="return-tab">
                <div className="card p-4 shadow-sm">
                  <p>Thank you for shopping at UniversalSeal. If you're not satisfied, here’s our return policy.</p>
                  <h6 className="mt-4">1. Returns</h6>
                  <ul>
                    <li>Unused and in original condition</li>
                    <li>In original packaging</li>
                    <li>Proof of purchase required</li>
                  </ul>
                  <h6 className="mt-4">2. Refunds</h6>
                  <p>
                    Refunds are initiated after inspection and credited as per your card issuer’s policy.
                  </p>
                  <h6 className="mt-4">3. Shipping</h6>
                  <p>
                    Return shipping is the customer’s responsibility and non-refundable.
                  </p>
                  <h6 className="mt-4">4. Sale Items</h6>
                  <p>Sale items are non-refundable.</p>
                  <h6 className="mt-4">5. Exchanges</h6>
                  <p>
                    Exchange only for defective items. Email: support@universalseal.com<br />
                    Return Address: 24-A, Street No.2, Ishwar Colony, Arjun Park, Najafgarh, New Delhi-110043
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}
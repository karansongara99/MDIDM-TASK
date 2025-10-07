import "../../assets/Styles/Home/BestSeller.css"
import img1 from "../../assets/Images/Home/Hero/1.webp"
import img2 from "../../assets/Images/Home/Hero/2.webp"
import img3 from "../../assets/Images/Home/Hero/3.webp"
import img4 from "../../assets/Images/Home/Hero/4.webp"
import img5 from "../../assets/Images/Home/Hero/5.webp"
import img6 from "../../assets/Images/Home/Hero/5.webp"
import { useNavigate } from "react-router-dom"
import { CONSTANTS } from "../../constants/constant"

export default function BestSeller() {
    const navigate = useNavigate();
    return (
        <>
            <div className="best-seller-section">
                <div className="container">
                    <div className="text-center mb-4">
                        <h2 className="section-title">Best Seller</h2>
                        <p className="section-subtitle">Top brands and Related Category</p>
                    </div>
                    <div id="bestSellerCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {/* Slide 1 */}
                            <div className="carousel-item active">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                        <div className="product-card">
                                            <div className="product-image">
                                                <img src={img1} alt="Printer" />
                                            </div>
                                            <div className="product-info">
                                                <h6 className="product-title">12.7mm Plastic Body Without Cartridge Handheld Printer</h6>
                                                <button className="add-cart" onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}>Enquiry</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                        <div className="product-card">
                                            <div className="product-image">
                                                <img src={img2} alt="Printer" />
                                            </div>
                                            <div className="product-info">
                                                <h6 className="product-title">12.7mm Plastic Body with Water Based Cartridge</h6>
                                                <button className="add-cart" onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}>Enquiry</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                        <div className="product-card">
                                            <div className="product-image">
                                                <img src={img3} alt="Printer" />
                                            </div>
                                            <div className="product-info">
                                                <h6 className="product-title">12.7mm Metal Body with Solvent Cartridge Printer</h6>
                                                <button className="add-cart" onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}>Enquiry</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                        <div className="product-card">
                                            <div className="product-image">
                                                <img src={img4} alt="Printer" />
                                            </div>
                                            <div className="product-info">
                                                <h6 className="product-title">25.4mm Plastic Body with Solvent Cartridge Printer</h6>
                                                <button className="add-cart" onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}>Enquiry</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 2 */}
                            <div className="carousel-item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                        <div className="product-card">
                                            <div className="product-image">
                                                <img src={img5} alt="Printer" />
                                            </div>
                                            <div className="product-info">
                                                <h6 className="product-title">Industrial Grade Handheld Inkjet Printer</h6>
                                                <button className="add-cart" onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}>Enquiry</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                        <div className="product-card">
                                            <div className="product-image">
                                                <img src={img6} alt="Printer" />
                                            </div>
                                            <div className="product-info">
                                                <h6 className="product-title">Portable Date Code Printer for Packaging</h6>
                                                <button className="add-cart" onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}>Enquiry</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                        <div className="product-card">
                                            <div className="product-image">
                                                <img src={img6} alt="Printer" />
                                            </div>
                                            <div className="product-info">
                                                <h6 className="product-title">High Resolution Handheld Printer</h6>
                                                <button className="add-cart" onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}>Enquiry</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                                        <div className="product-card">
                                            <div className="product-image">
                                                <img src={img6} alt="Printer" />
                                            </div>
                                            <div className="product-info">
                                                <h6 className="product-title">Compact Code Printer for Multiple Surfaces</h6>
                                                <button className="add-cart" onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}>Enquiry</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#bestSellerCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" />
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#bestSellerCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" />
                        </button>
                        <br />
                        <br />
                        {/* Indicators */}
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#bestSellerCarousel" data-bs-slide-to={0} className="active" />
                            <button type="button" data-bs-target="#bestSellerCarousel" data-bs-slide-to={1} />
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className="view-all-btn" onClick={() => navigate(CONSTANTS.ROUTES.ALL_PRODUCT)}>View All <i className="fas fa-arrow-right ms-2" /></button>
                    </div>
                </div>
            </div>

        </>
    )
}
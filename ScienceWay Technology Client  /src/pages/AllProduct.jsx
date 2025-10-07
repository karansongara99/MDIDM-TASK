import "../assets/Styles/AllProduct.css"
import { useNavigate } from "react-router-dom"
import img1 from "../assets/Images/Home/Hero/1.webp"
import img2 from "../assets/Images/Home/Hero/2.webp"
import img3 from "../assets/Images/Home/Hero/3.webp"
import img4 from "../assets/Images/Home/Hero/4.webp"
import img5 from "../assets/Images/Home/Hero/5.webp"
import img6 from "../assets/Images/Home/Hero/1.webp"
import { CONSTANTS } from "../constants/constant"

export default function AllProduct() {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <section className="products-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-center mb-3">Our Products</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb justify-content-center">
                                        <li className="breadcrumb-item">
                                            <a style={{ color: 'red', textDecoration: 'none' }} onClick={() => navigate(CONSTANTS.ROUTES.HOME)}>Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Products
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Products Section */}
                <section className="products-section">
                    <div className="container">
                        <div className="row">
                            {/* Products Column */}
                            <div className="col-lg-12 col-md-12">
                                <div className="row mb-4">
                                    <div className="col-md-12">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search products..." />
                                            <button className="btn btn-primary" type="button">
                                                <i className="fas fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* Product Card 1 */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product-card">
                                            <a onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}><img src={img1} alt="Batch Coding Machine" className="product-img" /></a>
                                            <div className="product-body">
                                                <h5 className="product-title">
                                                    Automatic Batch Coding Machine
                                                </h5>
                                                <div className="product-features">
                                                    The 12.7mm Metal Body Logo and Barcode Printing Machine is
                                                    a robust and efficient tool designed for high-quality
                                                    printing of logos, barcodes, and variable data on various
                                                    materials, particularly metal surfaces.
                                                </div>
                                                <div className="d-grid gap-2">
                                                    <button onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)} className="btn btn-primary">Inquiry Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Card 2 */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product-card">
                                            <a onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}><img src={img2} alt="Labelling Machine" className="product-img" /></a>
                                            <div className="product-body">
                                                <h5 className="product-title">
                                                    Semi-Automatic Labelling Machine
                                                </h5>
                                                <div className="product-features">
                                                    The 12.7mm Metal Body Logo and Barcode Printing Machine is
                                                    a robust and efficient tool designed for high-quality
                                                    printing of logos, barcodes, and variable data on various
                                                    materials, particularly metal surfaces.
                                                </div>
                                                <div className="d-grid gap-2">
                                                    <button onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)} className="btn btn-primary">Inquiry Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Card 3 */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product-card">
                                            <a onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}><img src={img3} alt="Sealing Machine" className="product-img" /></a>
                                            <div className="product-body">
                                                <h5 className="product-title">Automatic Sealing Machine</h5>
                                                <div className="product-features">
                                                    The 12.7mm Metal Body Logo and Barcode Printing Machine is
                                                    a robust and efficient tool designed for high-quality
                                                    printing of logos, barcodes, and variable data on various
                                                    materials, particularly metal surfaces.
                                                </div>
                                                <div className="d-grid gap-2">
                                                    <button onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)} className="btn btn-primary">Inquiry Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Card 4 */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product-card">
                                            <a onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}><img src={img4} alt="Pouch Filling Machine" className="product-img" /></a>
                                            <div className="product-body">
                                                <h5 className="product-title">Auto Pouch Filling Machine</h5>
                                                <div className="product-features">
                                                    The 12.7mm Metal Body Logo and Barcode Printing Machine is
                                                    a robust and efficient tool designed for high-quality
                                                    printing of logos, barcodes, and variable data on various
                                                    materials, particularly metal surfaces.
                                                </div>
                                                <div className="d-grid gap-2">
                                                    <button className="btn btn-primary">Inquiry Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Card 5 */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product-card">
                                            <a onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}><img src={img5} alt="Portable Coding Machine" className="product-img" /></a>
                                            <div className="product-body">
                                                <h5 className="product-title">Portable Batch Coding Machine</h5>
                                                <div className="product-features">
                                                    The 12.7mm Metal Body Logo and Barcode Printing Machine is
                                                    a robust and efficient tool designed for high-quality
                                                    printing of logos, barcodes, and variable data on various
                                                    materials, particularly metal surfaces.
                                                </div>
                                                <div className="d-grid gap-2">
                                                    <button onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)} className="btn btn-primary">Inquiry Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Card 6 */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="product-card">
                                            <a onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)}><img src={img6} alt="Industrial Labeller" className="product-img" /></a>
                                            <div className="product-body">
                                                <h5 className="product-title">Industrial Labelling Machine</h5>
                                                <div className="product-features">
                                                    The 12.7mm Metal Body Logo and Barcode Printing Machine is
                                                    a robust and efficient tool designed for high-quality
                                                    printing of logos, barcodes, and variable data on various
                                                    materials, particularly metal surfaces.
                                                </div>
                                                <div className="d-grid gap-2">
                                                    <button onClick={() => navigate(CONSTANTS.ROUTES.PRODUCT_PAGE)} className="btn btn-primary">Inquiry Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Pagination */}
                                <nav aria-label="Page navigation" className="mt-4">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" tabIndex={-1}>Previous</a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link text-white" href="#">1</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
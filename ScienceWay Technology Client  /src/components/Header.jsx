import "../assets/Styles/Header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../assets/Images/Img/Main-Logo.png"
import { CONSTANTS } from "../constants/constant"
import { useNavigate } from "react-router-dom"
export default function Header() {
    const navigate = useNavigate();
    return (
        <>
             <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 border-bottom shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" onClick={() => navigate(CONSTANTS.ROUTES.HOME)} role="button">
          <img src={logo} alt="Logo" className="logo-img me-2" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navMenu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate(CONSTANTS.ROUTES.HOME)} role="button">Home</a>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link btn btn-link dropdown-toggle"
                id="productsDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </button>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li><a className="dropdown-item" onClick={() => navigate(CONSTANTS.ROUTES.ALL_PRODUCT)} role="button">All Products</a></li>
                <li><a className="dropdown-item" onClick={() => navigate(CONSTANTS.ROUTES.BATCH_CODING_MACHINE)} role="button">Batch Coding Machine</a></li>
                <li><a className="dropdown-item" onClick={() => navigate(CONSTANTS.ROUTES.LABELING_MACHINE)} role="button">Labeling Machine</a></li>
                <li><a className="dropdown-item" onClick={() => navigate(CONSTANTS.ROUTES.SEALING_MACHINE)} role="button">Sealing Machine</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate(CONSTANTS.ROUTES.ABOUT)} role="button">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate(CONSTANTS.ROUTES.CONTACT)} role="button">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate(CONSTANTS.ROUTES.GALLERY)} role="button">Gallery</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate(CONSTANTS.ROUTES.VIDEO)} role="button">Video</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={() => navigate(CONSTANTS.ROUTES.BLOG)} role="button">Blog</a>
            </li>
           
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <div className="input-group me-3">
            <span className="input-group-text">
              <i className="fa fa-search" />
            </span>
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
        </div>
      </div>
    </nav>

        </>
    )
}
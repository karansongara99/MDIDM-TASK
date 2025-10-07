import "../assets/Styles/Footer.css"
import logo from "../assets/Images/Img/Main-Logo.png"
import { CONSTANTS } from "../constants/constant"
import { useNavigate } from "react-router-dom"
export default function Footer() {
    const navigate = useNavigate()
    return (
        <>
            {/* Footer */}
            <footer className="footer-section">
                <div className="container">
                    <div className="row footer-content">
                        {/* Logo & Description */}
                        <div className="footer-col animate-fade">
                            <img src={logo} alt="Logo" className="footer-logo" />
                            <h6 className="footer-title">Scienceway Technology</h6>
                            <p className="footer-text">
                                Specializing in innovative product identification, packaging
                                intelligence, and connected product solutions.
                            </p>
                        </div>
                        {/* Products */}
                        <div className="footer-col animate-slide">
                            <h6 className="footer-title">Products</h6>
                            <ul className="footer-links">
                                <li>
                                    <a onClick={() => navigate(CONSTANTS.ROUTES.ALL_COLLECTIONS)}>All Products</a>
                                </li>
                                <li><a onClick={() => navigate(CONSTANTS.ROUTES.BATCH_CODING_MACHINE)}>Batch Coding Machines</a></li>
                                <li><a onClick={() => navigate(CONSTANTS.ROUTES.SEALING_MACHINE)}>Sealing Machines</a></li>
                                <li><a onClick={() => navigate(CONSTANTS.ROUTES.LABELLING_MACHINE)}>Labelling Machines</a></li>
                                <li>
                                    <a onClick={() => navigate(CONSTANTS.ROUTES.ALL_COLLECTIONS)}>All Collections</a>
                                </li>
                            </ul>
                        </div>
                        {/* Quick Links */}
                        <div className="footer-col animate-slide">
                            <h6 className="footer-title">Quick Links</h6>
                            <ul className="footer-links">
                                <li><a onClick={() => navigate(CONSTANTS.ROUTES.ABOUT)}>About Us</a></li>
                                <li><a onClick={() => navigate(CONSTANTS.ROUTES.CONTACT)}>Contact Us</a></li>
                                <li><a onClick={() => navigate(CONSTANTS.ROUTES.GALLERY)}>Gallery</a></li>
                                <li><a onClick={() => navigate(CONSTANTS.ROUTES.VIDEO)}>Video</a></li>
                                <li><a onClick={() => navigate(CONSTANTS.ROUTES.BLOG)}>Blog</a></li>
                            </ul>
                        </div>
                        {/* Contact Info */}
                        <div className="footer-col animate-fade">
                            <h6 className="footer-title">Need Assistance?</h6>
                            <ul className="footer-contact">
                                <li>
                                    <i className="fas fa-map-marker-alt" />PLOT NO. 5, SHIV INSUDTRIAL ESTATE, NEAR SHIVAM COMPLEX, B/H PGVCL
                                    OFFICE, VAVDI MAIN ROAD, NEAR GONDAL CHOWKDI, RAJKOT 360004.
                                </li>
                                <li><i className="fas fa-phone" /> 9737242321</li>
                                <li><i className="fas fa-phone" /> 8866442321</li>
                                <li><i className="fas fa-envelope" /> sciencewaytech@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Copyright */}
                <div className="footer-bottom">
                    <p>
                        © 2025 Scienceway Technology — Developed with
                        <span className="heart">💖</span> by MDIDM INFOWAY
                    </p>
                </div>
                {/* WhatsApp Button */}
                <a href="https://wa.me/9737242321" className="whatsapp-btn" target="_blank" aria-label="Chat on WhatsApp">
                    <i className="fab fa-whatsapp" />
                </a>
            </footer>
        </>
    )
}
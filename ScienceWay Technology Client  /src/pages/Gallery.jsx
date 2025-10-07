import "../assets/Styles/Gallery.css"
import img1 from "../assets/Images/Home/Hero/1.webp"
import img2 from "../assets/Images/Home/Hero/2.webp"
import img3 from "../assets/Images/Home/Hero/3.webp"
import img4 from "../assets/Images/Home/Hero/4.webp"
import img5 from "../assets/Images/Home/Hero/5.webp"
import img6 from "../assets/Images/Home/Hero/1.webp"
import img7 from "../assets/Images/Home/Hero/2.webp"
import img8 from "../assets/Images/Home/Hero/3.webp"
export default function Gallery() {
    return (
        <>
            <div>
                {/* Gallery Section Start */}
                <section className="gallery-section">
                    <div className="container">
                        <div className="section-title">
                            <h2>Our Product Gallery</h2>
                            <p>Explore our high-quality machines and solutions</p>
                        </div>
                        <div className="gallery-container">
                            {/* Gallery Item 1 */}
                            <div className="gallery-item" onclick="openCarousel(0)">
                                <img src={img1} alt="Batch Coding Machine" />
                                <div className="gallery-item-caption">
                                    <h5>Batch Coding Machine</h5>
                                    <p>High precision coding for all your packaging needs</p>
                                </div>
                            </div>
                            {/* Gallery Item 2 */}
                            <div className="gallery-item" onclick="openCarousel(1)">
                                <img src={img2} alt="Labeling Machine" />
                                <div className="gallery-item-caption">
                                    <h5>Labeling Machine</h5>
                                    <p>Automated labeling solutions for various containers</p>
                                </div>
                            </div>
                            {/* Gallery Item 3 */}
                            <div className="gallery-item" onclick="openCarousel(2)">
                                <img src={img3} alt="Sealing Machine" />
                                <div className="gallery-item-caption">
                                    <h5>Sealing Machine</h5>
                                    <p>Professional sealing for perfect package closure</p>
                                </div>
                            </div>
                            {/* Gallery Item 4 */}
                            <div className="gallery-item" onclick="openCarousel(3)">
                                <img src={img4} alt="Industrial Printer" />
                                <div className="gallery-item-caption">
                                    <h5>Industrial Printer</h5>
                                    <p>High-speed printing for industrial applications</p>
                                </div>
                            </div>
                            {/* Gallery Item 5 */}
                            <div className="gallery-item" onclick="openCarousel(4)">
                                <img src={img5} alt="Pouch Filling Machine" />
                                <div className="gallery-item-caption">
                                    <h5>Pouch Filling Machine</h5>
                                    <p>Automated pouch filling with precision measurement</p>
                                </div>
                            </div>
                            {/* Gallery Item 6 */}
                            <div className="gallery-item" onclick="openCarousel(5)">
                                <img src={img6} alt="Inkjet Printer" />
                                <div className="gallery-item-caption">
                                    <h5>Inkjet Printer</h5>
                                    <p>Non-contact printing technology for various surfaces</p>
                                </div>
                            </div>
                            {/* Gallery Item 7 */}
                            <div className="gallery-item" onclick="openCarousel(6)">
                                <img src={img7} alt="Laser Marking Machine" />
                                <div className="gallery-item-caption">
                                    <h5>Laser Marking Machine</h5>
                                    <p>Permanent marking with laser technology</p>
                                </div>
                            </div>
                            {/* Gallery Item 8 */}
                            <div className="gallery-item" onclick="openCarousel(7)">
                                <img src={img8} alt="Thermal Printer" />
                                <div className="gallery-item-caption">
                                    <h5>Thermal Printer</h5>
                                    <p>High-resolution thermal printing solutions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Gallery Section End */}
                {/* Image Carousel Modal */}
                <div className="modal fade" id="imageCarouselModal" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Product Gallery</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner">
                                        {/* Carousel items will be added dynamically */}
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true" />
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
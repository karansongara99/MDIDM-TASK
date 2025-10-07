import React from 'react'
import "../assets/Styles/Video.css"
import img1 from "../assets/Images/Home/Hero/1.webp"
import img2 from "../assets/Images/Home/Hero/2.webp"
import img3 from "../assets/Images/Home/Hero/3.webp"
import img4 from "../assets/Images/Home/Hero/4.webp"
import img5 from "../assets/Images/Home/Hero/5.webp"
import img6 from "../assets/Images/Home/Hero/1.webp"
export default function Video() {
    return (
        <>
            {/* Videos Section */}
            <section className="videos-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Product Videos</h2>
                    </div>
                    <div className="row">
                        {/* Video 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="video-card">
                                <div className="video-thumbnail">
                                    <img src={img1} alt="Batch Coding Machine Demo" />
                                    <div className="play-icon">
                                        <i className="fas fa-play" />
                                    </div>
                                </div>
                                <div className="video-info">
                                    <h3>Batch Coding Machine Demo</h3>
                                    <p>
                                        Watch our high-speed batch coding machine in action, perfect
                                        for pharmaceutical packaging.
                                    </p>
                                    <a href="#" className="watch-btn">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        {/* Video 2 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="video-card">
                                <div className="video-thumbnail">
                                    <img src={img2} alt="Automatic Labelling Machine" />
                                    <div className="play-icon">
                                        <i className="fas fa-play" />
                                    </div>
                                </div>
                                <div className="video-info">
                                    <h3>Automatic Labelling Machine</h3>
                                    <p>
                                        See how our automatic labelling machine can increase your
                                        production efficiency by 40%.
                                    </p>
                                    <a href="#" className="watch-btn">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        {/* Video 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="video-card">
                                <div className="video-thumbnail">
                                    <img src={img3} alt="Sealing Machine Installation" />
                                    <div className="play-icon">
                                        <i className="fas fa-play" />
                                    </div>
                                </div>
                                <div className="video-info">
                                    <h3>Sealing Machine Installation</h3>
                                    <p>
                                        Step-by-step guide to installing and setting up your new
                                        sealing machine.
                                    </p>
                                    <a href="#" className="watch-btn">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        {/* Video 4 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="video-card">
                                <div className="video-thumbnail">
                                    <img src={img4} alt="7-Inch Screen Operation" />
                                    <div className="play-icon">
                                        <i className="fas fa-play" />
                                    </div>
                                </div>
                                <div className="video-info">
                                    <h3>7-Inch Screen Operation</h3>
                                    <p>
                                        Learn how to use the intuitive 7-inch touch screen interface
                                        on our latest models.
                                    </p>
                                    <a href="#" className="watch-btn">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        {/* Video 5 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="video-card">
                                <div className="video-thumbnail">
                                    <img src={img5} alt="Maintenance Tips" />
                                    <div className="play-icon">
                                        <i className="fas fa-play" />
                                    </div>
                                </div>
                                <div className="video-info">
                                    <h3>Maintenance Tips</h3>
                                    <p>
                                        Essential maintenance tips to keep your machines running
                                        smoothly for years.
                                    </p>
                                    <a href="#" className="watch-btn">Watch Now</a>
                                </div>
                            </div>
                        </div>
                        {/* Video 6 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="video-card">
                                <div className="video-thumbnail">
                                    <img src={img6} alt="Customer Testimonial" />
                                    <div className="play-icon">
                                        <i className="fas fa-play" />
                                    </div>
                                </div>
                                <div className="video-info">
                                    <h3>Customer Testimonial</h3>
                                    <p>
                                        Hear from our satisfied customers about their experience with
                                        our products.
                                    </p>
                                    <a href="#" className="watch-btn">Watch Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
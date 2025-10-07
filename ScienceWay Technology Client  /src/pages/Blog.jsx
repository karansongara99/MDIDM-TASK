import "../assets/Styles/Blog.css"
import img1 from "../assets/Images/Home/Hero/1.webp"
import img2 from "../assets/Images/Home/Hero/2.webp"
import img3 from "../assets/Images/Home/Hero/3.webp"
import img4 from "../assets/Images/Home/Hero/4.webp"
import img5 from "../assets/Images/Home/Hero/5.webp"
import img6 from "../assets/Images/Home/Hero/1.webp"
import img7 from "../assets/Images/Home/Hero/2.webp"
import img8 from "../assets/Images/Home/Hero/3.webp"
export default function Blog() {
    return (
        <>
            <div>
                {/* Blog Header Section */}
                <section className="blog-header">
                    <div className="container">
                        <h1 className="display-4 fw-bold">Our Blog</h1>
                        <p className="lead">
                            Latest news, tips and insights about packaging machinery
                        </p>
                    </div>
                </section>
                {/* Blog Content Section */}
                <section className="blog-content">
                    <div className="container">
                        <div className="row">
                            {/* Main Blog Content */}
                            <div className="col-lg-8">
                                <div className="row">
                                    {/* Blog Post 1 */}
                                    <div className="col-md-6">
                                        <div className="blog-card">
                                            <img src={img1} alt="Blog Post Image" />
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between mb-2">
                                                    <small className="text-muted"><i className="fas fa-calendar-alt me-1" /> June 15,
                                                        2023</small>
                                                    <small className="text-muted"><i className="fas fa-comments me-1" /> 5 Comments</small>
                                                </div>
                                                <h5 className="card-title">
                                                    Advancements in Batch Coding Technology
                                                </h5>
                                                <p className="card-text">
                                                    Explore the latest innovations in batch coding machines
                                                    that are revolutionizing product packaging across
                                                    industries.
                                                </p>
                                                <a href="blog-details.html" className="read-more">Read More <i className="fas fa-arrow-right ms-1" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Blog Post 2 */}
                                    <div className="col-md-6">
                                        <div className="blog-card">
                                            <img src={img2} alt="Blog Post Image" />
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between mb-2">
                                                    <small className="text-muted"><i className="fas fa-calendar-alt me-1" /> May 28,
                                                        2023</small>
                                                    <small className="text-muted"><i className="fas fa-comments me-1" /> 3 Comments</small>
                                                </div>
                                                <h5 className="card-title">
                                                    Choosing the Right Labeling Machine for Your Business
                                                </h5>
                                                <p className="card-text">
                                                    A comprehensive guide to selecting the perfect labeling
                                                    solution based on your production needs and budget.
                                                </p>
                                                <a href="blog-details.html" className="read-more">Read More <i className="fas fa-arrow-right ms-1" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Blog Post 3 */}
                                    <div className="col-md-6">
                                        <div className="blog-card">
                                            <img src={img3} alt="Blog Post Image" />
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between mb-2">
                                                    <small className="text-muted"><i className="fas fa-calendar-alt me-1" /> April 10,
                                                        2023</small>
                                                    <small className="text-muted"><i className="fas fa-comments me-1" /> 7 Comments</small>
                                                </div>
                                                <h5 className="card-title">
                                                    Maintenance Tips for Sealing Machines
                                                </h5>
                                                <p className="card-text">
                                                    Learn how proper maintenance can extend the lifespan of
                                                    your sealing equipment and ensure consistent performance.
                                                </p>
                                                <a href="blog-details.html" className="read-more">Read More <i className="fas fa-arrow-right ms-1" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Blog Post 4 */}
                                    <div className="col-md-6">
                                        <div className="blog-card">
                                            <img src={img4} alt="Blog Post Image" />
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between mb-2">
                                                    <small className="text-muted"><i className="fas fa-calendar-alt me-1" /> March 22,
                                                        2023</small>
                                                    <small className="text-muted"><i className="fas fa-comments me-1" /> 2 Comments</small>
                                                </div>
                                                <h5 className="card-title">
                                                    Automation in Packaging: What's Next?
                                                </h5>
                                                <p className="card-text">
                                                    Discover emerging trends in packaging automation and how
                                                    they might impact your production line in the coming
                                                    years.
                                                </p>
                                                <a href="blog-details.html" className="read-more">Read More <i className="fas fa-arrow-right ms-1" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Blog Post 5 */}
                                    <div className="col-md-6">
                                        <div className="blog-card">
                                            <img src={img5} alt="Blog Post Image" />
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between mb-2">
                                                    <small className="text-muted"><i className="fas fa-calendar-alt me-1" /> February 15,
                                                        2023</small>
                                                    <small className="text-muted"><i className="fas fa-comments me-1" /> 4 Comments</small>
                                                </div>
                                                <h5 className="card-title">
                                                    Cost-Effective Packaging Solutions for SMEs
                                                </h5>
                                                <p className="card-text">
                                                    Budget-friendly packaging machine options that deliver
                                                    professional results without breaking the bank.
                                                </p>
                                                <a href="blog-details.html" className="read-more">Read More <i className="fas fa-arrow-right ms-1" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Blog Post 6 */}
                                    <div className="col-md-6">
                                        <div className="blog-card">
                                            <img src={img6} alt="Blog Post Image" />
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between mb-2">
                                                    <small className="text-muted"><i className="fas fa-calendar-alt me-1" /> January 5,
                                                        2023</small>
                                                    <small className="text-muted"><i className="fas fa-comments me-1" /> 6 Comments</small>
                                                </div>
                                                <h5 className="card-title">
                                                    The Environmental Impact of Packaging Machines
                                                </h5>
                                                <p className="card-text">
                                                    How modern packaging equipment is becoming more
                                                    energy-efficient and environmentally friendly.
                                                    Cost-Effective Packaging Solutions for SMEs.
                                                </p>
                                                <a href="blog-details.html" className="read-more">Read More <i className="fas fa-arrow-right ms-1" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Pagination */}
                                <nav aria-label="Blog pagination">
                                    <ul className="pagination justify-content-center mt-5">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</a>
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
                            {/* Sidebar */}
                            <div className="col-lg-4">
                                <div className="blog-sidebar">
                                    {/* Search Widget */}
                                    <div className="mb-5">
                                        <h4>Search</h4>
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search blog..." />
                                            <button className="btn btn-danger" type="button">
                                                <i className="fas fa-search" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Categories Widget */}
                                    <div className="mb-5">
                                        <h4>Categories</h4>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                                                Batch Coding Machines
                                                <span className="badge bg-danger rounded-pill">8</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                                                Labeling Technology
                                                <span className="badge bg-danger rounded-pill">5</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                                                Sealing Solutions
                                                <span className="badge bg-danger rounded-pill">3</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                                                Industry News
                                                <span className="badge bg-danger rounded-pill">12</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent">
                                                Maintenance Tips
                                                <span className="badge bg-danger rounded-pill">7</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* Recent Posts Widget */}
                                    <div className="mb-5">
                                        <h4>Recent Posts</h4>
                                        <div className="recent-post">
                                            <a href="#">Advancements in Batch Coding Technology</a>
                                            <small>June 15, 2023</small>
                                        </div>
                                        <div className="recent-post">
                                            <a href="#">Choosing the Right Labeling Machine</a>
                                            <small>May 28, 2023</small>
                                        </div>
                                        <div className="recent-post">
                                            <a href="#">Maintenance Tips for Sealing Machines</a>
                                            <small>April 10, 2023</small>
                                        </div>
                                        <div className="recent-post">
                                            <a href="#">Automation in Packaging: What's Next?</a>
                                            <small>March 22, 2023</small>
                                        </div>
                                    </div>
                                    {/* Tags Widget */}
                                    <div className="mb-5">
                                        <h4>Tags</h4>
                                        <div className="tags">
                                            <a href="#">coding</a>
                                            <a href="#">labeling</a>
                                            <a href="#">sealing</a>
                                            <a href="#">automation</a>
                                            <a href="#">maintenance</a>
                                            <a href="#">technology</a>
                                            <a href="#">packaging</a>
                                            <a href="#">machines</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}
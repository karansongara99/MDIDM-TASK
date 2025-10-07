import "../../assets/Styles/Home/Testimonials.css"
export default function Testinomail() {
    return (
        <>
            {/* Testinomail Section */}
            <section className="testimonials py-5">
                <div className="container">
                    <h2 className="text-center fw-bold">What Our Customers Are Saying</h2>
                    <p className="text-center mb-5 text-muted">Testimonials</p>
                    <div className="row">
                        {/* Testimonial 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="card p-4">
                                <div className="card-body">
                                    <div className="stars text-warning mb-2">★★★★★</div>
                                    <h6 className="fw-bold mb-1">
                                        Amit K.
                                        <span className="text-muted fw-normal">/ Manufacturing Manager</span>
                                    </h6>
                                    <p className="text-muted">
                                        Universal Seal's machines have significantly improved our
                                        packaging efficiency. The sealing is airtight, and the build
                                        quality is top-notch!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="card p-4">
                                <div className="card-body">
                                    <div className="stars text-warning mb-2">★★★★☆</div>
                                    <h6 className="fw-bold mb-1">
                                        Rajesh Verma
                                        <span className="text-muted fw-normal">/ Production Supervisor</span>
                                    </h6>
                                    <p className="text-muted">
                                        Universal Seal's batch coding machine has made our production
                                        process faster and more reliable. The prints are clear,
                                        smudge-free, and perfectly aligned every time. Highly
                                        recommended for businesses looking for precision coding
                                        solutions!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="card p-4">
                                <div className="card-body">
                                    <div className="stars text-warning mb-2">★★★★★</div>
                                    <h6 className="fw-bold mb-1">
                                        Emily R.
                                        <span className="text-muted fw-normal">/ Operations Head</span>
                                    </h6>
                                    <p className="text-muted">
                                        We’ve streamlined our production process thanks to Universal
                                        Seal’s labeling machines. The precision and speed are
                                        unmatched!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
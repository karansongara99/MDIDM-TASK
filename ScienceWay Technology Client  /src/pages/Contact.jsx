import "../assets/Styles/Contact.css"
export default function Contact() {
    return (
        <>
            <div>
                <div className="contact-header">
                    <h1 className="contact-title">Contact Us</h1>
                </div>
                <div className="contact-section">
                    <div className="contact-card">
                        <h2>Support team ready to help</h2>
                        <p>
                            We're here to assist you. Fill out the form below, and we'll get back
                            to you shortly.
                        </p>
                        <form>
                            <div className="mb-2">
                                <label className="form-label" htmlFor="name">Full Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
                            </div>
                            <div className="mb-2">
                                <label className="form-label" htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
                            </div>
                            <div className="mb-2">
                                <label className="form-label" htmlFor="phone">Phone Number</label>
                                <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                            </div>
                            <div className="mb-2">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows={3} placeholder="Type your message here" required defaultValue={""} />
                            </div>
                            <button type="submit" className="btn btn-contact">Send Message</button>
                        </form>
                    </div>
                </div>
                {/*Get in touch*/}
                <div className="getintouch-section py-5">
                    <h2 className="text-center mb-2" style={{ fontWeight: 500 }}>Get in Touch</h2>
                    <p className="text-center mb-5" style={{ color: '#555' }}>
                        Choose your preferred way to get help from our support team:
                    </p>
                    <div className="container">
                        <div className="row justify-content-center g-4">
                            {/* Call Us */}
                            <div className="col-md-4">
                                <div className="getintouch-card text-center h-100">
                                    <div className="getintouch-icon mb-3">
                                        <i className="fa-solid fa-phone fa-2x" />
                                    </div>
                                    <h5 className="mb-2">Call Us</h5>
                                    <p className="mb-2" style={{ fontSize: '1rem' }}>
                                        Need immediate help? Call us now at <br /><b>+91 9737242321</b>
                                    </p>
                                    <a href="tel:+919737242321" className="btn getintouch-btn">Call Now</a>
                                </div>
                            </div>
                            {/* Email Us */}
                            <div className="col-md-4">
                                <div className="getintouch-card text-center h-100">
                                    <div className="getintouch-icon mb-3">
                                        <i className="fa-solid fa-envelope fa-2x" />
                                    </div>
                                    <h5 className="mb-2">Email Us</h5>
                                    <p className="mb-2" style={{ fontSize: '1rem' }}>
                                        Prefer email? Reach out to us at <br /><b>sciencewaytech@gmail.com</b>
                                    </p>
                                    <a href="mailto:sciencewaytech@gmail.com" className="btn getintouch-btn">Email Us</a>
                                </div>
                            </div>
                            {/* Chat with Us */}
                            <div className="col-md-4">
                                <div className="getintouch-card text-center h-100">
                                    <div className="getintouch-icon mb-3">
                                        <i className="fa-solid fa-comments fa-2x" />
                                    </div>
                                    <h5 className="mb-2">Chat with Us</h5>
                                    <p className="mb-2" style={{ fontSize: '1rem' }}>
                                        Have questions? Start a live chat with one of our agents right
                                        now.
                                    </p>
                                    <a href="#" className="btn getintouch-btn">Start Chat</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
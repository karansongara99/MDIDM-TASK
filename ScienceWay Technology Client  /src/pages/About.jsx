import { useEffect } from "react";
import "../assets/Styles/About.css";
import img1 from "../assets/Images/Home/Hero/1.webp";
import img2 from "../assets/Images/Home/Hero/2.webp";
import img3 from "../assets/Images/Home/Hero/3.webp";

export default function About() {
  useEffect(() => {
    const counters = document.querySelectorAll(".stat-value");
    const speed = 100; // Lower = faster

    counters.forEach(counter => {
      const targetText = counter.getAttribute("data-target");
      const isPercent = targetText.includes("%");
      const isPlus = targetText.includes("+");
      const target = parseInt(targetText.replace(/\D/g, ""));
      let count = 0;

      const updateCount = () => {
        const increment = Math.ceil(target / speed);
        count += increment;

        if (count < target) {
          counter.innerText = count + (isPercent ? "%" : isPlus ? "+" : "");
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target + (isPercent ? "%" : isPlus ? "+" : "");
        }
      };

      updateCount();
    });
  }, []);

  return (
    <>
      <div>
        {/* Header */}
        <div className="about-header">
          <h1 className="about-title">About Us</h1>
        </div>

        {/* Main Section */}
        <div className="about-main">
          {/* Card 1 */}
          <div className="about-card">
            <div className="about-content">
              <div className="about-label">WHO WE ARE</div>
              <h5>⚡ Pioneers in Sealing &amp; Labeling Solutions</h5>
              <p>
                At <b>Universal Seal</b>, we specialize in providing high-quality{" "}
                <b>sealing and labeling machines</b> for industries that demand
                precision and efficiency. With a commitment to innovation, we help
                businesses streamline their packaging processes with cutting-edge
                technology.
              </p>
            </div>
            <img src={img1} alt="Sealing & Labeling" className="about-img" />
          </div>

          {/* Card 2 */}
          <div className="about-card reverse">
            <div className="about-content">
              <div className="about-label">OUR MISSION</div>
              <h5>🎯 Delivering Excellence, Ensuring Efficiency</h5>
              <p>
                Our mission is to <b>empower businesses</b> by offering reliable,
                durable, and cost-effective sealing and labeling solutions. We
                strive to enhance productivity and reduce downtime through our
                high-performance machinery.
              </p>
            </div>
            <img src={img3} alt="Machinery" className="about-img" />
          </div>

          {/* Card 3 */}
          <div className="about-card">
            <div className="about-content">
              <div className="about-label">WHY CHOOSE UNIVERSAL SEAL?</div>
              <h5>✅ Your Trusted Partner for Quality &amp; Innovation</h5>
              <p>
                <b>Advanced Technology:</b> We offer the latest in sealing and
                labeling automation.<br />
                <b>Reliable Performance:</b> Built for durability and efficiency.<br />
                <b>Customer-Centric Approach:</b> We prioritize customer
                satisfaction with excellent support.
              </p>
            </div>
            <img src={img2} alt="Team" className="about-img" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          <div className="about-stat">
            <div className="stat-value" data-target="500+" data-start={0}>0</div>
            <div className="stat-label">Businesses Served</div>
          </div>
          <div className="about-stat">
            <div className="stat-value" data-target="20+" data-start={0}>0</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="about-stat">
            <div className="stat-value" data-target="100+" data-start={0}>0</div>
            <div className="stat-label">Machines Installed Worldwide</div>
          </div>
          <div className="about-stat">
            <div className="stat-value" data-target="99%" data-start={0}>0</div>
            <div className="stat-label">Customer Satisfaction Rate</div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="about-clients py-5">
          <h3 className="text-center mb-4" style={{ fontWeight: 600 }}>
            What Our Clients Say
          </h3>
          <div className="container">
            <div className="row justify-content-center g-4">
              <div className="col-md-4">
                <div className="client-card">
                  <p className="client-quote">
                    "The Batch Coding Machine has significantly improved our
                    production efficiency. The prints are clear, fast, and reliable.
                    Highly recommended!"
                  </p>
                  <div className="client-name">
                    - Rajesh Mehta, Manufacturing Unit Owner
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="client-card">
                  <p className="client-quote">
                    "We've been using the Sealing Machine for months, and it ensures
                    leak-proof packaging every time. Our product quality has
                    improved, and customers love it!"
                  </p>
                  <div className="client-name">
                    - Priya Sharma, FMCG Business Owner
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="client-card">
                  <p className="client-quote">
                    "The Labelling Machine has streamlined our workflow. Precise
                    labeling, high speed, and easy operation make it a game changer
                    for our business."
                  </p>
                  <div className="client-name">
                    - Amit Verma, Pharmaceutical Industry Manager
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

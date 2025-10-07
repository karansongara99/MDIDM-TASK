import img1 from "../../assets/Images/Brands we distribute/1.webp"
import img2 from "../../assets/Images/Brands we distribute/2.webp"
import img3 from "../../assets/Images/Brands we distribute/3.avif"
import img4 from "../../assets/Images/Brands we distribute/4.png"
import img5 from "../../assets/Images/Brands we distribute/5.webp"
import img6 from "../../assets/Images/Brands we distribute/6.png"
import "../../assets/Styles/Home/Brandswedistribute.css"
export default function Brand() {
    return (
        <>
            {/* Brand Section */}
            <div class="container brand-section">
                <h2>Brands we distribute</h2>
                <div class="brand-logo">
                    <img src={img1} alt="Adani Wilmar" />
                    <img src={img2} alt="Patanjali" />
                    <img src={img3} alt="Jaguar" />
                    <img src={img4} alt="Cargill" />
                    <img src={img5} alt="Gokul" />
                    <img src={img6} alt="Emami" />
                </div>
            </div>
        </>
    )
}
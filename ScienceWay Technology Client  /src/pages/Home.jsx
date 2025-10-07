import "../assets/Styles/Home/Brandswedistribute.css"
import "../assets/Styles/Home/Testimonials.css"
import Brand from "./Home/Brand"
import Testinomail from "./Home/Testinomail"
import BestSeller from "./Home/BestSeller"
import LabelingMachine from "./Home/LabelingMachine"
import SealingMachines from "./Home/SealingMachines"
import HeroSection from "./Home/HeroSection"
export default function Home() {
    return (
        <>
            <HeroSection />
            <BestSeller />
            <LabelingMachine />
            <SealingMachines />
            <Brand />
            <Testinomail />
        </>
    )
}
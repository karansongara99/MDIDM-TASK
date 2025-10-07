import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./constants/constant"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { CONSTANTS } from "./constants/constant"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Video from "./pages/Video"
import Gallery from "./pages/Gallery"
import ProductPage from "./pages/ProductPage"
import AllProduct from "./pages/AllProduct"
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={CONSTANTS.ROUTES.HOME} element={<Home />} />
          <Route path={CONSTANTS.ROUTES.ABOUT} element={<About />} />
          <Route path={CONSTANTS.ROUTES.CONTACT} element={<Contact />} />
          <Route path={CONSTANTS.ROUTES.BLOG} element={<Blog />} />
          <Route path={CONSTANTS.ROUTES.VIDEO} element={<Video />} />
          <Route path={CONSTANTS.ROUTES.GALLERY} element={<Gallery />} />
          <Route path={CONSTANTS.ROUTES.PRODUCT_PAGE} element={<ProductPage />} />
          <Route path={CONSTANTS.ROUTES.ALL_PRODUCT} element={<AllProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App

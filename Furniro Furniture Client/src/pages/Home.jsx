import '../App.css';

export const Home = () => {
  return (
    <>
      <div>
        {/* Hero Banner */}
        <section
          className='hero-banner text-center text-white d-flex align-items-center justify-content-end'
          style={{
            backgroundImage:
              'url("https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA==")',
            height: 500,
            backgroundSize: 'cover'
          }}
        >
          <div
            className='bg-light p-4 rounded shadow m-3'
            style={{ maxWidth: 400 }}
          >
            <p className='text-dark text-start'>New Arrival</p>
            <h2 className='fw-bold text-warning text-start'>
              Discover Our
              <br />
              New Collection
            </h2>
            <p className='text-muted text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className='btn btn-warning d-flex align-items-center justify-content-end p-3'>
              Buy Now
            </button>
          </div>
        </section>
        {/*Browse Photo*/}
        <section className='bg-light py-5'>
          <div className='container text-center'>
            <h3 className='fw-bold'>Browse The Range</h3>
            <p className='text-muted mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className='row g-3'>
              <div className='col-4'>
                <div className='gallery-wrapper position-relative'>
                  <img
                    src='https://thetimberguy.com/cdn/shop/products/Solid-Sheesham-Wood-Designer-Dining-table-with-Cushioned-Chair-Bench-furniture-set-CHOOSE-YOUR-COMBINATION.jpg?v=1739124530'
                    className='img-fluid rounded'
                  />
                  <div className='gallery-overlay'>Dining Table</div>
                </div>
              </div>
              <div className='col-4'>
                <div className='gallery-wrapper position-relative'>
                  <img
                    src='https://casaliving.in/cdn/shop/products/71_MhOLFvrL_1200x1200.jpg?v=1708074859'
                    className='img-fluid rounded'
                  />
                  <div className='gallery-overlay'>Living Room</div>
                </div>
              </div>
              <div className='col-4'>
                <div className='gallery-wrapper position-relative'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSdPFvi0OdahvDcYvsVcd0_0yQe7gMrjSug&s'
                    className='img-fluid rounded'
                  />
                  <div className='gallery-overlay'>Bedroom</div>
                </div>
              </div>
              {/* Add more images in same structure if needed */}
            </div>
          </div>
        </section>
        {/* Our Products */}
        <section className='bg-light py-5'>
          <div className='container'>
            <h3 className='text-center fw-bold mb-4'>Our Products</h3>
            <div className='row g-4'>
              {/* Product Card */}
              {/* Row - 1 */}
              <div className='col-md-3 col-sm-6'>
                <div className='product-card'>
                  <img
                    src='https://5.imimg.com/data5/SELLER/Default/2024/7/434252988/OB/VV/SK/65590730/1-2-500x500.jpg'
                    className='product-image'
                    alt='Syltherine'
                  />
                  <div className='product-overlay'>
                    <button className='overlay-btn'>Add to cart</button>
                    <div className='icon-group'>
                      <i className='fas fa-share' />
                      <i className='fas fa-exchange-alt' />
                      <i className='far fa-heart' />
                    </div>
                  </div>
                  <div className='product-details'>
                    <h5 className='fw-bold'>Syltherine</h5>
                    <p className='text-muted'>Stylish cafe chair</p>
                    <p className='fw-bold text-dark'>
                      Rp 2.500.000 <del>Rp 3.500.000</del>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className='product-card'>
                  <img
                    src='https://jacksonkiev.com/img/products/02.jpg'
                    className='product-image'
                    alt='Leviosa'
                  />
                  <div className='product-overlay'>
                    <button className='overlay-btn'>Add to cart</button>
                    <div className='icon-group'>
                      <i className='fas fa-share' />
                      <i className='fas fa-exchange-alt' />
                      <i className='far fa-heart' />
                    </div>
                  </div>
                  <div className='product-details'>
                    <h5 className='fw-bold'>Leviosa</h5>
                    <p className='text-muted'>Stylish cafe chair</p>
                    <p className='fw-bold text-dark'>Rp 2.500.000</p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className='product-card'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmS4jpUZiHK3z-YPKjgBVxuWZkm4xPylZJCisopBb6HLXDYJNeStnRuapZOnwIAlEIv4&usqp=CAU'
                    className='product-image'
                    alt='Syltherine'
                  />
                  <div className='product-overlay'>
                    <button className='overlay-btn'>Add to cart</button>
                    <div className='icon-group'>
                      <i className='fas fa-share' />
                      <i className='fas fa-exchange-alt' />
                      <i className='far fa-heart' />
                    </div>
                  </div>
                  <div className='product-details'>
                    <h5 className='fw-bold'>Lolito</h5>
                    <p className='text-muted'>Luxury big Sofa</p>
                    <p className='card-text fw-bold'>
                      Rp 7.000.000 &nbsp; <del>Rp 14.000.000</del>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className='product-card'>
                  <img
                    src='https://m.media-amazon.com/images/I/71V6ctZMvvL._UF894,1000_QL80_.jpg'
                    className='product-image'
                    alt='Leviosa'
                  />
                  <div className='product-overlay'>
                    <button className='overlay-btn'>Add to cart</button>
                    <div className='icon-group'>
                      <i className='fas fa-share' />
                      <i className='fas fa-exchange-alt' />
                      <i className='far fa-heart' />
                    </div>
                  </div>
                  <div className='product-details'>
                    <h5 className='card-title fw-bold'>Respira</h5>
                    <p className='text-secondary'>
                      Outdoor bar table and stools
                    </p>
                    <p className='card-text fw-bold'>Rp 500.000</p>
                  </div>
                </div>
              </div>
              {/* Row - 2 */}
              <div className='col-md-3 col-sm-6'>
                <div className='product-card'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7eizJWJmX8N2ZgZFgATa4e2lBqiffXTJfTQ&s'
                    className='product-image'
                    alt='Syltherine'
                  />
                  <div className='product-overlay'>
                    <button className='overlay-btn'>Add to cart</button>
                    <div className='icon-group'>
                      <i className='fas fa-share' />
                      <i className='fas fa-exchange-alt' />
                      <i className='far fa-heart' />
                    </div>
                  </div>
                  <div className='product-details'>
                    <h5 className='card-title fw-bold'>Grifo</h5>
                    <p className='text-secondary'>Night lamp</p>
                    <p className='card-text fw-bold'>Rp 1.500.000</p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className='product-card'>
                  <img
                    src='https://uk.ember.com/cdn/shop/files/ember_CM1910_00-black_374c47e8-a7cc-457a-be6f-5d22364e9433.jpg?v=1712773196'
                    className='product-image'
                    alt='Leviosa'
                  />
                  <div className='product-overlay'>
                    <button className='overlay-btn'>Add to cart</button>
                    <div className='icon-group'>
                      <i className='fas fa-share' />
                      <i className='fas fa-exchange-alt' />
                      <i className='far fa-heart' />
                    </div>
                  </div>
                  <div className='product-details'>
                    <h5 className='card-title fw-bold'>Muggo</h5>
                    <p className='text-secondary'>Small mug</p>
                    <p className='card-text fw-bold'>Rp 150.000</p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className='product-card'>
                  <img
                    src='https://m.media-amazon.com/images/I/81ZCI5biU4L._UF350,350_QL80_.jpg'
                    className='product-image'
                    alt='Syltherine'
                  />
                  <div className='product-overlay'>
                    <button className='overlay-btn'>Add to cart</button>
                    <div className='icon-group'>
                      <i className='fas fa-share' />
                      <i className='fas fa-exchange-alt' />
                      <i className='far fa-heart' />
                    </div>
                  </div>
                  <div className='product-details'>
                    <h5 className='card-title fw-bold'>Pingky</h5>
                    <p className='text-secondary'>Cute bed set</p>
                    <p className='card-text fw-bold'>
                      Rp 7.000.000 &nbsp; <del>Rp 14.000.000</del>
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-3 col-sm-6'>
                <div className='product-card'>
                  <img
                    src='https://www.kuberindustries.co.in/uploads/kuberindustries/products/kuber-industries-flower-pot-with-plate--18-inch-lightweight-polymers-indoor-outdoor-plant-pots--flow-188295443499156_l.jpg'
                    className='product-image'
                    alt='Leviosa'
                  />
                  <div className='product-overlay'>
                    <button className='overlay-btn'>Add to cart</button>
                    <div className='icon-group'>
                      <i className='fas fa-share' />
                      <i className='fas fa-exchange-alt' />
                      <i className='far fa-heart' />
                    </div>
                  </div>
                  <div className='product-details'>
                    <h5 className='card-title fw-bold'>Potty</h5>
                    <p className='text-secondary'>Minimalist flower pot</p>
                    <p className='card-text fw-bold'>Rp 500.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Room Inspiration */}
        <section className='py-5'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <h4 className='fw-bold'>
                  50+ Beautiful rooms <br />
                  inspiration
                </h4>
                <p className='text-muted'>
                  Our designer already made a lot of beautiful <br />
                  prototype rooms that inspire you
                </p>
                <button className='btn btn-warning'>Explore More</button>
              </div>
              <div className='col-md-6'>
                <img
                  src='https://media.istockphoto.com/id/943910360/photo/posters-in-cozy-apartment-interior.jpg?s=612x612&w=0&k=20&c=QzNjsxCNMcFNxpn4E2ocPvSU8Ud2S3B_mHyo5L-HOLo='
                  className='img-fluid rounded room-image'
                  alt='Room Inspiration'
                />
              </div>
            </div>
          </div>
        </section>
        {/* Gallery */}
        <section className='bg-light py-5'>
          <div className='container text-center'>
            <p>Share your setup with</p>
            <h4 className='fw-bold mb-4'>#FurniroFurniture</h4>
            <div className='row g-3'>
              <div className='col-4'>
                <div className='gallery-wrapper position-relative'>
                  <img
                    src='https://www.amerihome.com/wp-content/uploads/2024/07/Landing-page-Resizing-800-x-534-px.jpg'
                    className='img-fluid rounded'
                  />
                </div>
              </div>
              <div className='col-4'>
                <div className='gallery-wrapper position-relative'>
                  <img
                    src='https://www.worldfurnitureonline.com/wp-content/uploads/2021/10/World-Furniture-Online_39.jpg'
                    className='img-fluid rounded'
                  />
                </div>
              </div>
              <div className='col-4'>
                <div className='gallery-wrapper position-relative'>
                  <img
                    src='https://thumbs.dreamstime.com/b/urban-jungle-trendy-living-room-interior-white-couch-black-knot-pillow-wooden-furniture-copy-space-empty-wall-174228512.jpg'
                    className='img-fluid rounded'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home

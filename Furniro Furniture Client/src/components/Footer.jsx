import React from 'react'
import '../assets/styles/Footer.css'

export const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className='bg-dark text-light p-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <h5 className='fw-bold'>Furniro</h5>
              <p className='small'>
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
            <div className='col-md-3'>
              <h6>Links</h6>
              <ul className='list-unstyled small'>
                <li>
                  <a href='#' className='text-decoration-none text-light'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#' className='text-decoration-none text-light'>
                    Shop
                  </a>
                </li>
                <li>
                  <a href='#' className='text-decoration-none text-light'>
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-3'>
              <h6>Help</h6>
              <ul className='list-unstyled small'>
                <li>
                  <a href='#' className='text-decoration-none text-light'>
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href='#' className='text-decoration-none text-light'>
                    Returns
                  </a>
                </li>
                <li>
                  <a href='#' className='text-decoration-none text-light'>
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-3'>
              <h6>Newsletter</h6>
              <form className='d-flex'>
                <input
                  type='email'
                  className='form-control form-control-sm me-2'
                  placeholder='Enter Your Email'
                />
                <button className='btn btn-sm btn-warning'>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

import React from 'react'
import "../assets/styles/Header.css"

export const Header = () => {
  return (
    <>
      {/* Navbar */}
      <nav className='navbar navbar-expand-lg bg-white py-3 border-bottom shadow-sm sticky-top'>
        <div className='container'>
          {/* Logo on left */}
          <a className='navbar-brand fw-bold fs-4 text-dark' href='#'>
            <img
              src='https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/11/furniture-logo.jpg'
              height={50}
              className='me-2'
            />
            Furniro
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navmenu'
          >
            <span className='navbar-toggler-icon' />
          </button>
          {/* Center menu links and right icons */}
          <div className='collapse navbar-collapse' id='navmenu'>
            <ul className='navbar-nav mx-auto mb-2 mb-lg-0 gap-3'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Shop
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact
                </a>
              </li>
            </ul>
            {/* Icons on right */}
            <div className='d-flex gap-3 menu-icons'>
              <i className='fa-solid fa-magnifying-glass' />
              <i className='fa-solid fa-user' />
              <i className='fa-regular fa-heart' />
              <i className='fa-solid fa-cart-shopping' />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header

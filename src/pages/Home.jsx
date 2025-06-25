import React from 'react'

// import photo to home using style
import home1 from '../assets/home1.jpg'

// import HeroSection css 
import '../assets/HeroSection.css';

// import componet
import About from './About'
import Services from './Services';
import Portfolio from './Portfolio'
import Team from './Team'
import Contact from './Contact';


// import footer css
import '../assets/footer.css'
// import navlink to redirect the pages 
import { NavLink } from 'react-router-dom'


// footer icon import
import { FaTwitter,  FaInstagram, FaLinkedinIn, FaTelegram, FaFacebook } from 'react-icons/fa';





    const HeroSection = () => {
      return (
        <>
        <div
          className="hero-section d-flex align-items-center"
          style={{
            backgroundImage: `url(${home1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            width: '100%',
            color: '#fff',
            position: 'relative',
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1 className="display-4 font-weight-bold mb-3">
                  Bettter digital experience with Presento
                </h1>
                <p className="lead mb-4">
                  We are team of talented designers making websites with Bootstrap
                </p>
                <div className="d-flex align-items-center">
                  <button className="btn btn-danger btn-lg mr-3 ">
                    Get Started
                  </button>
                  <button className="btn btn-outline-light btn-lg d-flex align-items-center mx-3">
                    <span className="mr-2 mx-1">
                      <i className="bi bi-play-circle-fill"></i>
                    </span>
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Optional: Overlay for better text visibility */}
          <div className="hero-overlay"></div>
        </div>


{/* About Us Page Down side  */}


        <About/>
          


    {/* Services Page down side */}


          <Services/>


          {/* Portfolio Page down side  */}

          <Portfolio/>


          {/* Team Page down side  */}

            <Team/>


      {/* Contact Us page down side */}


          <Contact/>




          {/*  Footer down side  */}

          <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container text-md-left">
        <div className="row text-md-left">

          {/* Company Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Presento</h5>
            <p>A108 Adam Street<br />New York, NY 535022</p>
            <p><strong>Phone:</strong> +1 5589 55488 55</p>
            <p><strong>Email:</strong> info@example.com</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="footer-icon"><FaTwitter/></a>
              <a href="#" className="footer-icon"><FaFacebook /></a>
              <a href="#" className="footer-icon"><FaInstagram /></a>
              <a href="#" className="footer-icon"><FaLinkedinIn /></a>
              <a href="#" className="footer-icon"><FaTelegram /></a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="footer-link text-uppercase mb-4 font-weight-bold">Useful Links</h5>
            <p><NavLink  className="footer-link text-light text-decoration-none" to="/">Home</NavLink></p>
            <p><NavLink className="footer-link text-light text-decoration-none" to="/about">About us</NavLink></p>
            <p><NavLink className="footer-link text-light text-decoration-none" to="/services">Services</NavLink></p>
            <p><NavLink to="/" className="footer-link text-light text-decoration-none">Terms of service</NavLink></p>
            <p><NavLink to="/" className="footer-link text-light text-decoration-none">Privacy policy</NavLink></p>
          </div>

          {/* Our Services */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Our Services</h5>
            <p><a href="#" className="footer-link text-light text-decoration-none">Web Design</a></p>
            <p><a href="#" className="footer-link text-light text-decoration-none">Web Development</a></p>
            <p><a href="#" className="footer-link text-light text-decoration-none">Product Management</a></p>
            <p><a href="#" className="footer-link text-light text-decoration-none">Marketing</a></p>
            <p><a href="#" className="footer-link text-light text-decoration-none">Marketing</a></p>
            <p><a href="#" className="footer-link text-light text-decoration-none">Graphic Design</a></p>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Our Newsletter</h5>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form className="d-flex">
              <input type="email" className="form-control me-2" placeholder="Email" />
              <button className="btn btn-danger">Subscribe</button>
            </form>
          </div>

        </div>

        <hr className="my-3" />
        
        {/* Copyright */}
        <div className="text-center">
          <p>© Copyright <strong>Presento</strong>. All Rights Reserved</p>
          <p>Designed by <span style={{color:'#e74c3c'}}>Yash Tanmor</span></p>
        </div>
      </div>
    </footer>


        </>
      );
    };
    

    
  

export default HeroSection;
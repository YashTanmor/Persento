import React from 'react'

const Contact = () => {
  return (
    <>
        {/* <center className='pt-5 mt-4'>
            <h1>Contact Us Page</h1>
        </center> */}

<div className="container my-5 text-center pt-5">
      <h2 className="fw-bold">CONTACT</h2>
      <div className="underline mx-auto my-2 bg-danger " style={{height:'3px', width:'50px'}}></div>
      <p className="text-muted pt-3">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>

      <div className="row justify-content-center mb-4">
        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow-sm border-0">
            <div className="text-danger fs-3 mb-2">
              <i className="bi bi-geo-alt"></i>
            </div>
            <h6>Address</h6>
            <p className="mb-0">A108 Adam Street, New York, NY 535022</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow-sm border-0">
            <div className="text-danger fs-3 mb-2">
              <i className="bi bi-telephone"></i>
            </div>
            <h6>Call Us</h6>
            <p className="mb-0">+1 5589 55488 55</p>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card p-3 shadow-sm border-0">
            <div className="text-danger fs-3 mb-2">
              <i className="bi bi-envelope"></i>
            </div>
            <h6>Email Us</h6>
            <p className="mb-0">info@example.com</p>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4 shadow-sm border-0 text-start">
            <form>
              <div className="row mb-3">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="col">
                  <input type="email" className="form-control" placeholder="Your Email" />
                </div>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="4" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-danger">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Contact
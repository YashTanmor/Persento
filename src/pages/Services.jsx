import React from 'react'

// import services css 
import '../assets/Services.css'







const Services = () => {

  const servicesData = [
    {
      icon: "bi-briefcase",
      title: "Lorem Ipsum",
      desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
    },
    {
      icon: "bi-pencil-square",
      title: "Dolor Sittema",
      desc: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata"
    },
    {
      icon: "bi-bar-chart-line",
      title: "Sed ut perspiciatis",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    },
    {
      icon: "bi-binoculars",
      title: "Magni Dolores",
      desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
      icon: "bi-brightness-high",
      title: "Nemo Enim",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium deleniti atque"
    },
    {
      icon: "bi-calendar2-week",
      title: "Eiusmod Tempor",
      desc: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi"
    }
  ];

  return (
    <>
        {/* <center className='pt-5 mt-4'>
            <h1>Services Page</h1>
        </center> */}

<div className="services-section text-white pt-5 " style={{backgroundColor:'#1c1c1c'}}>
      <div className="container text-center py-5">
        <h2 className="fw-bold">SERVICES</h2>
        <div className="underline mx-auto my-2 bg-danger " style={{height:'3px', width:'50px'}}></div>
        <p className='pb-3 pt-3 '>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

        <div className="row mt-4 ">
          {servicesData.map((val, index) => (
            <div className="col-md-6 mb-4 " key={index}>
              <div className="service-box d-flex " style={{backgroundColor:'#2c2c2c', padding:'20px', borderRadius:'5px', color:'white'}}>
                <i className={`bi ${val.icon} icon me-3 `}></i>
                <div>
                  <h5>{val.title}</h5>
                  <p>{val.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    </>
  )
}

export default Services
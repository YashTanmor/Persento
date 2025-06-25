import React from 'react'

// import portfolio css 
import '../assets/portfolio.css'

import { FaSearchPlus, FaLink } from "react-icons/fa";





class Portfolio extends React.Component{

  constructor()
  {
    super()

    this.state=({
      Data_App:true,
      Data_Branding:true,
      Data_Books:true,
    })
  }

  App_Handler=()=>{
    this.setState({
        Data_App:true,
        Data_Branding:false,
        Data_Books:false
    })
}

Branding_Handler=()=>{
    this.setState({
        Data_App:false,
        Data_Branding:true,
        Data_Books:false
    })
}

Book_Handler=()=>{
    this.setState({
        Data_App:false,
        Data_Branding:false,
        Data_Books:true
    })
}

  render()
  {

    const Data_App=[
      {
          id:1,
          name:'App1',
          img:'/Assets/10025.jpg',
          text:'Lorem ipsum, dolor sit amet consectetur',
          btn:<i className="bi bi-zoom-in"></i>
      },
      {
          id:2,
          name:'App2',
          img:'/Assets/10029.jpg',
          text:'Lorem ipsum, dolor sit amet consectetur',
          btn:<i className="bi bi-zoom-in"></i>
      },
      {
          id:3,
          name:'App3',
          img:'/Assets/10033.jpg',
          text:'Lorem ipsum, dolor sit amet consectetur',
          btn:<i className="bi bi-zoom-in"></i>
      },    
  ]


  const Data_Branding=[
    {
        id:1,
        name:'Branding1',
        img:'/Assets/10027.jpg',
        text:'Lorem ipsum, dolor sit amet consectetur',
        btn:<i className="bi bi-zoom-in"></i>
    },

    {
        id:2,
        name:'Branding2',
        img:'/Assets/10031.jpg',
        text:'Lorem ipsum, dolor sit amet consectetur',
        btn:<i className="bi bi-zoom-in"></i>
    },
    {
        id:3,
        name:'Branding3',
        img:'/Assets/10030.jpg',
        text:'Lorem ipsum, dolor sit amet consectetur',
        btn:<i className="bi bi-zoom-in"></i>
    },
]


const Data_Books=[
  {
      id:1,
      name:'Book1',
      img:'/Assets/10028.jpg',
      text:'Lorem ipsum, dolor sit amet consectetur',
      btn:<i className="bi bi-zoom-in"></i>
  },

  {
      id:1,
      name:'Book2',
      img:'/Assets/10032.jpg',
      text:'Lorem ipsum, dolor sit amet consectetur',
      btn:<i className="bi bi-zoom-in"></i>
  },

  {
      id:1,
      name:'Book3',
      img:'/Assets/10036.jpg',
      text:'Lorem ipsum, dolor sit amet consectetur',
      btn:<i className="bi bi-zoom-in" ></i>
  },
]


    

    return(

      <>
        
        {/* <center className='pt-5 mt-4'>
            <h1>Portfolio Page</h1>
        </center> */}


<div className="services-section text-dark bg-white pt-5">
<div className="container text-center py-5">
        <h2 className="fw-bold">PORTFOLIO</h2>
         <div className="underline mx-auto my-2 bg-danger " style={{height:'3px', width:'50px'}}></div>
         <p className='pb-3 pt-3 '>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

          <button className='btn btn-port mx-1 fw-bold text-dark' style={{transition: 'background-color 0.3s, color 0.3s',}}> All </button>

          <button className='btn btn-port mx-1 text-dark fw-bold' style={{transition: 'background-color 0.3s, color 0.3s',}} onClick={(()=>this.App_Handler())}> App </button>

          <button className='btn btn-port mx-1 text-dark fw-bold' style={{transition: 'background-color 0.3s, color 0.3s',}} > Product </button>

          <button className='btn btn-port mx-1 text-dark fw-bold' style={{transition: 'background-color 0.3s, color 0.3s',}} onClick={(()=>this.Branding_Handler())}> Branding </button>

          <button className='btn btn-port mx-1 text-dark fw-bold' style={{transition: 'background-color 0.3s, color 0.3s',}} onClick={(()=>this.Book_Handler())}> Books </button>


          
          <div className="container-fluid col-md-12">

{/* ***************Data passed*************** */}
  <div className='row' >
      {
          this.state.Data_App &&
          Data_App.map((val,index)=>{
          return(
              <>
              <div className='col-md-4' key={val.id}>

                  <div className="card text-bg-dark text-dark">
                      <img src={val.img} class="card-img" alt="..."/>
                      <div className="card-img-overlay">
                          <h5 className="card-title">{val.name}</h5>
                          <p className="card-text">{val.text}</p>
                          
                      </div>
                  </div>
              </div>
              </>
          )
          })
      }
  </div>

  <div className='row' >
      {
          this.state.Data_Branding &&
          Data_Branding.map((val,index)=>{
          return(
              <>
              <div className='col-md-4' key={val.id}>

                  <div class="card text-bg-dark">
                      <img src={val.img} class="card-img" alt="..."/>
                      <div class="card-img-overlay">
                          <h5 class="card-title">{val.name}</h5>
                          <p class="card-text">{val.text}</p>
                          
                      </div>
                  </div>
              </div>
              </>
          )
          })
      }
  </div>

  <div className='row' >
      {
          this.state.Data_Books &&
          Data_Books.map((val,index)=>{
          return(
              <>
              <div className='col-md-4' key={val.id}>

                  <div class="card text-dark">
                      <img src={val.img} class="card-img" alt="..."/>
                      <div class="card-img-overlay">
                          <h5 class="card-title">{val.name}</h5>
                          <p class="card-text">{val.text}</p>
                          
                      </div>
                  </div>
              </div>
              </>
          )
          })
      }
      </div>
      </div>

        

              <div className="services-section text-dark bg-white pt-5">
                  <div className="container text-center py-5">
                      <h2 className="fw-bold">TESTIMONIALS</h2>
                        <div className="underline mx-auto my-2 bg-danger " style={{height:'3px', width:'50px'}}></div>
                            <p className='pb-3 pt-3 '>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

                      </div>
                    </div>

      </div>
    </div>


    


    
    </>
    )
  }
}

export default Portfolio














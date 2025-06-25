import React from 'react'

// importt team css
import '../assets/team.css'


// import photos in a array
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'
import team3 from '../assets/team3.jpg'
import team4 from '../assets/team4.jpg'






const Team = () => {

  const teamMembers = [
    {
      name: "Walter White",
      role: "Chief Executive Officer",
      img: team1 ,
    },
    {
      name: "Sarah Jhonson",
      role: "Product Manager",
      img: team2 ,
    },
    {
      name: "William Anderson",
      role: "CTO",
      img: team3 ,
    },
    {
      name: "Amanda Jepson",
      role: "Accountant",
      img: team4 ,
    },
  ]; 

  return (
    <>
        {/* <center className='pt-5 mt-4'>
            <h1>Team Page</h1>
        </center> */}

<div className="team-section text-center py-5 text-white  mt-5" style={{backgroundColor:'#1c1c1c'}}>
      <h2 className="mb-3 text-white">TEAM</h2>
      <div className="underline mx-auto bg-danger" style={{height:'3px', width:'50px'}}></div>
      <p className="text-white mb-5 pb-1 pt-4 ">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>

      <div className="container">
        <div className="row">
          {
          teamMembers.map((member, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="card bg-white text-dark team-card overflow-hidden">
                <div className="position-relative">
                  <img src={member.img} alt={member.name} className="card-img-top" />
                  <div className="social-icons d-flex justify-content-center">
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-linkedin"></i>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          )
          )
          }
        </div>
      </div>
    </div>


          
    </>
  )
}

export default Team
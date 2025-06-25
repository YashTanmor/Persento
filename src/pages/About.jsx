import React from 'react'

// Navlink to redirect to component
import { NavLink } from 'react-router-dom'





const About = () => {

  // cards 1 used as array data
const stats = [
  { icon: 'fa-smile', number: 232, label: 'Happy Clients' },
  { icon: 'fa-list-check', number: 521, label: 'Projects' },
  { icon: 'fa-headset', number: 1463, label: 'Hours Of Support' },
  { icon: 'fa-users', number: 15, label: 'Hard Workers' },
];

  return (
    <>
        {/* <center className='pt-5 mt-4'>
            <h1>About Us Page</h1>
        </center> */}


      <section className='about-section py-5' style={{ background: "#232323"}}>
           <div className='container'>
            <div className='row align-items-center pt-5'>
              {/* left side - heading, description, button */}
               <div className='col-lg-5 mb-4 mb-lg-0'>
                   <h2 className='fw-bold text-white mb-3' style={{ fontSize:"2.5rem"}}>
                 Voluptatem dignissimos  provident quasi
                 </h2>
                 <p className='text-white mb-4'>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                 tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor 
                 in reprehenderit
                 </p>
                 <NavLink to='/' className='btn btn-outline-danger text-white rounded-pill px-4 py-2 fw-bold '  >
                 ABOUT US 
                 </NavLink>
               </div>

          <div className="col-lg-6">
            <div className="row g-4">

              {/* Feature 1 */}
              <div className="col-md-6 align-items-start">
                <div>
                  <i className="bi bi-briefcase fs-1 text-danger mb-3"></i>
                  <h5 className="fw-bold text-white">Corporis voluptates sit</h5>
                  <p className="text-white-50">
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-md-6 align-items-start">
                <div>
                  <i className="bi bi-gem fs-1 text-danger mb-3"></i>
                  <h5 className="fw-bold text-white">Ullamco laboris nisi</h5>
                  <p className="text-white-50">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="col-md-6 align-items-start">
                <div>
                  <i className="bi bi-broadcast fs-1 text-danger mb-3"></i>
                  <h5 className="fw-bold text-white">Labore consequatur</h5>
                  <p className="text-white-50">Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="col-md-6 align-items-start">
                <div>
                  <i className="bi bi-easel fs-1 text-danger mb-3"></i>
                  <h5 className="fw-bold text-white">Beatae veritatis</h5>
                  <p className="text-white-50">Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


 

<section className="py-5 bg-light m-5">
      <div className="container">
        <div className="row text-center g-4">
          {stats.map((val, index) => (
            <div className="col-md-3" key={index}>
              <div className="bg-white p-4 rounded shadow-sm position-relative">
                {/* Circular Icon */}
                <div
                  className="bg-white border border-2 border-light shadow rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '60px',
                    height: '60px',
                    position: 'absolute',
                    top: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <i className={`fas ${val.icon} text-danger fs-4`}></i>
                </div>

                <div className="mt-5">
                  <h3 className="fw-bold">{val.number}</h3>
                  <p className="text-muted">{val.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


 
        
    </>
  );
};
                
  

export default About


// <section className='about-section py-5 pt-5 mt-5' style={{ background: "#232323"}}>
//           <div className='container'>
//             <div className='row align-items-center'>
//               {/* left side - heading, description, button */}
//               <div className='col-lg-5 mb-4 mb-lg-0'>
//                 <h2 className='fw-bold text-white mb-3' style={{ fontSize:"2.5rem"}}>
//                 Voluptatem dignissimos  provident quasi
//                 </h2>
//                 <p className='text-white mb-4'>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
//                 tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor 
//                 in reprehenderit
//                 </p>
//                 <NavLink to='/' className='btn btn-outline-danger text-white rounded-pill px-4 py-2 fw-bold bg-red'  >
//                 ABOUT US 
//                 </NavLink>
//               </div>

//               {/* Right side - features */}

//               <div className='col-md-6'>
//                 <div className='row gy-4 '>

//                   {/* Feature -1 */}

//                   <div className='col-md-6'>
//                     <div className='d-flex align-items-start icon-box'>
//                       <i className='bi bi-briefcase fs-1 text-danger mb-3'></i>
//                       <div>
//                         <h5 className='text-white fw-bold '>Corporis voluptates sit</h5>
//                         <p className='text-white-50 mb-0'> Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
//                       </div>
//                     </div>
//                   </div>

//                    {/* Feature 2 */}
//               <div className="col-md-6">
//                 <div className="d-flex align-items-start">
//                   <i className="bi bi-gem fs-1 text-danger me-3"></i>
//                   <div>
//                     <h5 className="text-white fw-bold">Ullamco laboris nisi</h5>
//                     <p className="text-white-50 mb-0">
//                       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//                     </p>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Feature 3 */}
//               <div className="col-md-6">
//                 <div className="d-flex align-items-start">
//                   <i className="bi bi-broadcast fs-1 text-danger me-3"></i>
//                   <div>
//                     <h5 className="text-white fw-bold">Labore consequatur</h5>
//                     <p className="text-white-50 mb-0">
//                       Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Feature 4 */}
//               <div className="col-md-6">
//                 <div className="d-flex align-items-start">
//                   <i className="bi bi-easel fs-1 text-danger me-3"></i>
//                   <div>
//                     <h5 className="text-white fw-bold">Beatae veritatis</h5>
//                     <p className="text-white-50 mb-0">
//                       Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Team from './pages/Team';
import Contact from './pages/Contact';
import HeroSection from './pages/Home';


const App = () => {
  return(
    <>

      <Router>

        <Navbar/>
        
          <Routes>

            <Route path='/' element={<HeroSection/>} ></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/portfolio' element={<Portfolio/>}></Route>
            <Route path='/team' element={<Team/>}></Route>
            
            <Route path='/contact' element={<Contact/>}></Route>


          </Routes>

        


      </Router>
    
    </>
  )
}

export default App